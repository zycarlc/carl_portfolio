import React, { useEffect, useRef, useState } from "react"
import Isotope from "isotope-layout"
import ProjectDetailsModal from "./ProjectDetailsModal"

const mockUp = {
    title: "Detailed Project 1",
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
}

const Portfolio = ({ result }) => {
    // init one ref to store the future isotope object
    const isotope = useRef()
    const projectsData = useRef()
    const demoImages = useRef()
    const [imagesLoaded, setimagesLoaded] = useState(0)
    const [selectedProjectDetails, setSelectedProjectDetails] = useState()
    const [isOpen, setIsOpen] = useState(false)
    const [isMouseOn, setIsMouseOn] = useState(false)

    const htmlElement = document.getElementsByTagName("html")[0]
    const isRtl = htmlElement.getAttribute("dir") === "rtl"

    projectsData.current = []
    for (let i = 0; i < 4; i++) {
        projectsData.current.push(mockUp)
    }

    if (result) {
        projectsData.current = []
        result.projects.forEach(project => {
            projectsData.current.push({
                title: project.name,
                document: {
                    projectInfo: project.intro,
                    technologies: project.technique.join(", "),
                    date: "2023",
                    shortIntro: project.shortIntro,
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

    const handleOnLoad = (i, url) => {
        demoImages.current = { ...demoImages.current, [i]: url }
    }

    // initialize an Isotope object with configs
    useEffect(() => {
        isotope.current = new Isotope(".portfolio-filter", {
            itemSelector: ".filter-item",
            layoutMode: "fitRows",
            originLeft: !isRtl,
        })

        // cleanup
        return () => {
            isotope.current.destroy()
        }
    }, [isRtl])

    // handling filter key change
    useEffect(() => {
        isotope.current.arrange({ filter: `*` })
    }, [imagesLoaded])

    return (
        <>
            <section id="projects" className={"section bg-light"}>
                {projectsData.current?.map((project, i) => {
                    return (
                        <img
                            src={project.demoURL}
                            alt=""
                            key={i}
                            onLoad={() => {
                                handleOnLoad(i, project.demoURL)
                            }}
                            hidden
                        />
                    )
                })}
                <div className={"container"}>
                    {/* Heading */}
                    <p className="text-center mb-2 wow fadeInUp">
                        <span className="bg-primary text-5 px-2">Projects</span>
                    </p>
                    <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
                        Some of my most recent projects
                    </h2>
                    {/* Heading end*/}
                    <div className="portfolio wow fadeInUp">
                        <div className="row portfolio-filter filter-container g-4">
                            {projectsData.current?.length > 0 &&
                                projectsData.current?.map((project, index) => (
                                    <div
                                        className={"col-sm-6 filter-item"}
                                        key={index}
                                        onMouseLeave={() => {
                                            setIsMouseOn(false)
                                        }}
                                    >
                                        <div className="portfolio-box">
                                            <div className="portfolio-img">
                                                <div
                                                    className="portfolio-image"
                                                    onMouseLeave={() => {
                                                        isotope.current.arrange(
                                                            {
                                                                filter: `*`,
                                                            }
                                                        )
                                                    }}
                                                    onMouseOver={() => {
                                                        isotope.current.arrange(
                                                            {
                                                                filter: `*`,
                                                            }
                                                        )
                                                        setIsMouseOn(index)
                                                    }}
                                                >
                                                    {isMouseOn === index ? (
                                                        <div
                                                            className="portfolio-overlay"
                                                            onClick={() => {
                                                                setSelectedProjectDetails(
                                                                    projectsData
                                                                        .current[
                                                                        index
                                                                    ]
                                                                )
                                                                setIsOpen(true)
                                                            }}
                                                        >
                                                            <img
                                                                className="img-thumbnail"
                                                                src={
                                                                    demoImages.current
                                                                        ? demoImages
                                                                              .current[
                                                                              index
                                                                          ]
                                                                            ? demoImages
                                                                                  .current[
                                                                                  index
                                                                              ]
                                                                            : project.thumbImage
                                                                        : project.thumbImage
                                                                }
                                                                alt=""
                                                            />

                                                            <div className="portfolio-overlay-details bg-secondary">
                                                                <h5 className="text-white text-5">
                                                                    {
                                                                        project?.title
                                                                    }
                                                                </h5>
                                                                <span className="text-light">
                                                                    Click for
                                                                    project
                                                                    details
                                                                </span>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div className="portfolio-thumbnail">
                                                            <img
                                                                onLoad={() => {
                                                                    setimagesLoaded(
                                                                        imagesLoaded +
                                                                            1
                                                                    )
                                                                }}
                                                                className="img-thumbnail d-block"
                                                                src={
                                                                    project.thumbImage
                                                                }
                                                                alt=""
                                                            />
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="d-block mt-4">
                                                    <h4
                                                        className={
                                                            "text-4 fw-600"
                                                        }
                                                    >
                                                        {project?.title}
                                                    </h4>
                                                    <p>
                                                        {
                                                            project?.document
                                                                ?.shortIntro
                                                        }
                                                    </p>
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
