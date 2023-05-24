import React, { useEffect, useRef, useState } from "react"
import Isotope from "isotope-layout"
import ProjectDetailsModal from "./ProjectDetailsModal"
const Portfolio = ({ result }) => {
    // init one ref to store the future isotope object
    const isotope = useRef()
    // store the filter keyword in a state
    const [filterKey, setFilterKey] = useState("*")
    const [imagesLoaded, setimagesLoaded] = useState(0)
    const [selectedProjectDetails, setSelectedProjectDetails] = useState()
    const [isOpen, setIsOpen] = useState(false)

    const htmlElement = document.getElementsByTagName("html")[0]
    const isRtl = htmlElement.getAttribute("dir") === "rtl"

    const filters = {
        solo: "Solo Project",
        group: "Group Project",
    }

    const types = {
        IMAGE: "image",
        VIDEO: "video",
        DOCUMENT: "document",
    }

    let projectsData = []

    for (let i = 0; i < 4; i++) {
        projectsData.push({
            title: "Detailed Project 1",
            type: types.DOCUMENT,
            document: {
                projectInfo:
                    "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
                client: "Ruby Clinton",
                technologies: "iOS, HTML5, CSS3, PHP, Java",
                industry: "Art & Design",
                date: "July 16, 2019",
                url: {
                    name: "www.example.com",
                    link: "https://www.example.com",
                },
                sliderImages: [
                    "images/projects/project-2.jpg",
                    "images/projects/project-5.jpg",
                ],
            },
            thumbImage: "images/no-image.png",
            categories: [filters.DETAILED],
        })
    }

    if (result) {
        projectsData = []
        result.projects.forEach(project => {
            projectsData.push({
                title: project.name,
                type: types.DOCUMENT,
                document: {
                    projectInfo: project.intro,
                    client: "Ruby Clinton",
                    technologies: project.technique.join(", "),
                    date: "2023",
                    url: {
                        name: project.name,
                        link: project.URL,
                    },
                    sliderImages: [project.demoURL, ...project.images],
                },
                thumbImage: project.thumbImage,
                categories: [project.projectType],
                demoURL: project.demoURL,
                projectType: project.projectType.split(" ")[0],
            })
        })
    }

    // initialize an Isotope object with configs
    useEffect(() => {
        isotope.current = new Isotope(".portfolio-filter", {
            itemSelector: ".filter-item",
            layoutMode: "masonry",
            originLeft: !isRtl,
        })

        // cleanup
        return () => {
            isotope.current.destroy()
        }
    }, [isRtl])

    // handling filter key change
    useEffect(() => {
        if (imagesLoaded) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` })
        }
    }, [filterKey, imagesLoaded])

    const handleFilterKeyChange = key => () => setFilterKey(key)

    const getKeyByValue = value => {
        return Object.keys(filters).find(key => filters[key] === value)
    }

    const getFilterClasses = categories => {
        if (categories.length > 0) {
            let tempArray = []
            categories.forEach((category, index) => {
                tempArray.push(getKeyByValue(category))
            })
            return tempArray.join(" ")
        }
    }

    return (
        <>
            <section id="portfolio" className={"section bg-light"}>
                <div className={"container"}>
                    {/* Heading */}
                    <p className="text-center mb-2 wow fadeInUp">
                        <span className="bg-primary text-dark px-2">
                            Portfolio
                        </span>
                    </p>
                    <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
                        Some of my most recent projects
                    </h2>
                    {/* Heading end*/}
                    {/* Filter Menu */}
                    <ul
                        className={
                            "portfolio-menu nav nav-tabs fw-600 justify-content-start justify-content-md-center border-bottom-0 mb-5 wow fadeInUp"
                        }
                    >
                        <li className="nav-item">
                            <button
                                className={
                                    "nav-link " +
                                    (filterKey === "*" ? "active" : "")
                                }
                                onClick={handleFilterKeyChange("*")}
                            >
                                All
                            </button>
                        </li>
                        {Object.keys(filters).map((oneKey, i) => (
                            <li className="nav-item" key={i}>
                                <button
                                    className={
                                        "nav-link " +
                                        (filterKey === oneKey ? "active" : "")
                                    }
                                    onClick={handleFilterKeyChange(oneKey)}
                                >
                                    {filters[oneKey]}
                                </button>
                            </li>
                        ))}
                    </ul>
                    {/* Filter Menu end */}
                    <div className="portfolio wow fadeInUp">
                        <div className="row portfolio-filter filter-container g-4">
                            {projectsData.length > 0 &&
                                projectsData.map((project, index) => (
                                    <div
                                        className={
                                            "col-sm-6 col-lg-4 filter-item " +
                                            getFilterClasses(project.categories)
                                        }
                                        key={index}
                                    >
                                        <div className="portfolio-box">
                                            <div className="portfolio-img">
                                                <img
                                                    onLoad={() => {
                                                        setimagesLoaded(
                                                            imagesLoaded + 1
                                                        )
                                                    }}
                                                    className="img-fluid d-block portfolio-image"
                                                    src={project.thumbImage}
                                                    alt=""
                                                />
                                                <div
                                                    className="portfolio-overlay"
                                                    onClick={() => {
                                                        setSelectedProjectDetails(
                                                            projectsData[index]
                                                        )
                                                        setIsOpen(true)
                                                    }}
                                                >
                                                    <button className="popup-ajax stretched-link border-0 p-0 ">
                                                        {" "}
                                                    </button>
                                                    <img
                                                        src={project.demoURL}
                                                        alt=""
                                                    />
                                                    <div className="portfolio-overlay-details bg-secondary">
                                                        <h5 className="text-white text-5">
                                                            {project?.title}
                                                        </h5>
                                                        <span className="text-light">
                                                            Click for project
                                                            details
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* Modal */}
            {isOpen && (
                <ProjectDetailsModal
                    projectDetails={selectedProjectDetails}
                    setIsOpen={setIsOpen}
                ></ProjectDetailsModal>
            )}
        </>
    )
}

export default Portfolio
