import React from "react"
import { Link } from "react-scroll"
import Typewriter from "typewriter-effect"
import { scrollDuration } from "../../../config/commonConfig"

const FullScreenDefaultIntro = ({ result }) => {
    const [imageLoaded, setImageLoaded] = React.useState(false)
    return (
        <section
            id="home"
            className="bg-primary d-flex fullscreen position-relative py-5"
        >
            <img
                src={result.contactInfo?.portrait}
                onLoad={() => {
                    setImageLoaded(true)
                }}
                title="I'm Zhenyu"
                alt="I'm Zhenyu"
                hidden
            />
            <div className="container my-auto py-4">
                <div className="row">
                    <div className="col-lg-7 text-center text-lg-start align-self-center order-1 order-lg-0 wow fadeIn">
                        <h1 className="text-12 fw-300 mb-0 text-uppercase">
                            Hi, I'm a {result?.jobTitle}
                        </h1>
                        <h2 className="text-21 fw-600 text-uppercase mb-0 ms-n1">
                            <Typewriter
                                options={{
                                    strings: [
                                        "Developer",
                                        "Bimmer",
                                        "IoT Enthusiast",
                                        "Smart Home Lover",
                                        "Diver",
                                        "你好",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h2>
                        <p className="text-5">
                            based in {result.contactInfo?.location}.
                        </p>
                        <Link
                            className="btn btn-secondary rounded-0 smooth-scroll mt-3"
                            smooth="easeInOutQuint"
                            duration={scrollDuration}
                            style={{ cursor: "pointer" }}
                            to="projects"
                        >
                            View My Works
                        </Link>
                        <Link
                            className="btn btn-link text-dark smooth-scroll mt-3"
                            smooth="easeInOutQuint"
                            duration={scrollDuration}
                            style={{ cursor: "pointer" }}
                            to="contact"
                        >
                            Contact Me
                            <span className="text-4 ms-2">
                                <i className="far fa-arrow-alt-circle-down" />
                            </span>
                        </Link>
                    </div>
                    <div className="col-lg-5 text-center align-self-center mb-4 mb-lg-0 order-0 order-lg-1">
                        <div className="bg-light rounded-pill d-inline-block p-3 shadow-lg wow zoomIn">
                            <img
                                className="img-fluid rounded-pill d-block"
                                src={
                                    imageLoaded
                                        ? result.contactInfo?.portrait
                                        : "/images/web-developer-sm.jpg"
                                }
                                title="I'm Carl"
                                alt="I'm Carl"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Link
                className="scroll-down-arrow text-dark smooth-scroll"
                smooth="easeInOutQuint"
                duration={scrollDuration}
                style={{ cursor: "pointer" }}
                to="about"
            >
                <span className="animated">
                    <i className="fas fa-arrow-down" />
                </span>
            </Link>
        </section>
    )
}

export default FullScreenDefaultIntro
