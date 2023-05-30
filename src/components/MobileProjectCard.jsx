import React, { useEffect, useRef, useState, useMemo } from "react"
import ProjectDetailsModal from "./ProjectDetailsModal"

export default function MobileProjectCard({
    project,
    demoImages,
    index,
    isotope,
    width,
}) {
    const [isProjectOpen, setIsProjectOpen] = useState(false)
    const refTop = useRef()
    const isTopInViewport = useIsInViewport(refTop)

    useEffect(() => {
        isotope.current?.arrange({
            filter: `*`,
        })
    }, [isTopInViewport, width, isotope])

    return (
        <>
            <div className="portfolio-box">
                <div className="portfolio-img">
                    <div className="portfolio-image">
                        <div ref={refTop}></div>
                        {isTopInViewport ? (
                            <div
                                className="portfolio-overlay"
                                onClick={() => {
                                    setIsProjectOpen(true)
                                }}
                            >
                                <img
                                    className="img-thumbnail"
                                    src={
                                        demoImages.current
                                            ? demoImages.current[index]
                                                ? demoImages.current[index]
                                                : project.thumbImage
                                            : project.thumbImage
                                    }
                                    alt=""
                                />
                                <div className="portfolio-overlay-details bg-secondary">
                                    <h5 className="text-white text-5">
                                        {project?.title}
                                    </h5>
                                    <span className="text-light">
                                        Click for project details
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <div className="portfolio-thumbnail">
                                <img
                                    className="img-thumbnail d-block"
                                    src={project.thumbImage}
                                    alt=""
                                />
                            </div>
                        )}
                    </div>

                    <div className="d-block mt-4">
                        <h4 className={"text-4 fw-600"}>{project?.title}</h4>
                        <p>{project?.document?.shortIntro}</p>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isProjectOpen && (
                <ProjectDetailsModal
                    projectDetails={project}
                    setIsOpen={setIsProjectOpen}
                ></ProjectDetailsModal>
            )}
        </>
    )
}

// function to check ref is in viewport
function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false)

    const observer = useMemo(
        () =>
            new IntersectionObserver(([entry]) =>
                setIsIntersecting(entry.isIntersecting)
            ),
        []
    )

    useEffect(() => {
        observer.observe(ref.current)

        return () => {
            observer.disconnect()
        }
    }, [ref, observer])

    return isIntersecting
}
