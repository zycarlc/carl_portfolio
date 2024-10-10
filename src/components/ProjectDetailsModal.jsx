import React, { useEffect, useRef } from "react"

import Slider from "react-slick"

const ProjectDetailsModal = ({ projectDetails, setIsOpen }) => {
    const sliderRef = useRef()

    const types = {
        IMAGE: "image",
        VIDEO: "video",
        DOCUMENT: "document",
    }

    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <button
            {...props}
            className={
                "slick-prev slick-arrow" +
                (currentSlide === 0 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === 0 ? true : false}
            type="button"
        >
            <i className="fa fa-chevron-left"></i>
        </button>
    )
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <button
            {...props}
            className={
                "slick-next slick-arrow" +
                (currentSlide === slideCount - 1 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === slideCount - 1 ? true : false}
            type="button"
        >
            <i className="fa fa-chevron-right"></i>
        </button>
    )

    var settings = {
        dots: true,
        arrows: true,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        infinite: true,
        adaptiveHeight: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
        ],
    }

    useEffect(() => {
        if (projectDetails?.type === types.DOCUMENT) {
            sliderRef.current.slickGoTo(0)
        }
    }, [projectDetails, types.DOCUMENT])

    return (
        <>
            <div className="project-details-modal">
                <div
                    className="modal fade bg-dark-1 show"
                    style={{ display: "block" }}
                    tabIndex={-1}
                    aria-hidden="true"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="modal-dialog modal-xl"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className={"modal-content rounded-0"}>
                            <div className="modal-body">
                                <button
                                    type="button"
                                    className={"btn-close "}
                                    onClick={() => setIsOpen(false)}
                                />
                                <div className={"container ajax-container "}>
                                    <h2
                                        className={
                                            "text-6 fw-600 text-center mb-4"
                                        }
                                    >
                                        {projectDetails?.title}
                                    </h2>
                                    <div className="row g-4">
                                        <div className="col-lg-7">
                                            <Slider
                                                {...settings}
                                                ref={sliderRef}
                                            >
                                                <div className="item">
                                                    <img
                                                        className="img-fluid"
                                                        alt=""
                                                        src={
                                                            projectDetails?.thumbImage
                                                        }
                                                    />
                                                </div>
                                                {projectDetails?.document
                                                    ?.sliderImages?.length >
                                                    0 &&
                                                    projectDetails?.document?.sliderImages?.map(
                                                        (image, index) => (
                                                            <div
                                                                className="item"
                                                                key={index}
                                                            >
                                                                <img
                                                                    className="img-fluid"
                                                                    alt=""
                                                                    src={image}
                                                                />
                                                            </div>
                                                        )
                                                    )}
                                            </Slider>
                                        </div>
                                        <div className="col-lg-5">
                                            <h4 className={"text-4 fw-600"}>
                                                Project Info:
                                            </h4>
                                            <p>
                                                {
                                                    projectDetails?.document
                                                        ?.projectInfo
                                                }
                                            </p>
                                            <h4
                                                className={"text-4 fw-600 mt-4"}
                                            >
                                                Project Details:
                                            </h4>
                                            <ul className={"list-style-2 "}>
                                                <li>
                                                    <span
                                                        className={
                                                            "text-dark fw-600 me-2"
                                                        }
                                                    >
                                                        Technologies:
                                                    </span>
                                                    {
                                                        projectDetails?.document
                                                            ?.technologies
                                                    }
                                                </li>
                                                <li>
                                                    <span
                                                        className={
                                                            "text-dark fw-600 me-2"
                                                        }
                                                    >
                                                        Year:
                                                    </span>
                                                    {
                                                        projectDetails?.document
                                                            ?.date
                                                    }
                                                </li>
                                                <li>
                                                    <span
                                                        className={
                                                            "text-dark fw-600 me-2"
                                                        }
                                                    >
                                                        {projectDetails?.title ===
                                                        "AI-Powered Content Generation System"
                                                            ? "Case Study:"
                                                            : "Live Demo:"}
                                                    </span>
                                                    <a
                                                        href={
                                                            projectDetails
                                                                ?.document?.url
                                                                ?.link
                                                        }
                                                        className="btn btn-primary shadow-none rounded-0 px-3 py-1"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {
                                                            projectDetails
                                                                ?.document?.url
                                                                ?.name
                                                        }
                                                        <i className="fas fa-external-link-alt ms-1" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectDetailsModal
