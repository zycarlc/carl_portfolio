import React from "react"
const AboutUs = ({ result }) => {
    return (
        <section id="about" className="section">
            <div className="container">
                {/* Heading */}
                <p className="text-center mb-2 wow fadeInUp">
                    <span className="bg-primary text-5 px-2">About Me</span>
                </p>
                <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
                    Know Me More
                </h2>
                {/* Heading end*/}
                <div className="row">
                    <div className="col-lg-8 text-center text-lg-start wow fadeInUp">
                        <h2 className="text-8 fw-400 mb-3">
                            Hi, I'm{" "}
                            <span className="fw-700 border-bottom border-3 border-primary">
                                {result?.name}
                            </span>
                        </h2>
                        {result.profile &&
                            result.profile.map((pro, i) => {
                                return (
                                    <p className="text-5" key={i}>
                                        {pro}
                                    </p>
                                )
                            })}
                    </div>
                    <div
                        className="col-lg-4 mt-4 mt-lg-0 wow fadeInUp"
                        data-wow-delay="0.2s"
                    >
                        <div className="featured-box style-4">
                            <div className="featured-box-icon text-25 fw-500 bg-primary rounded-circle">
                                <span
                                    className="wow heartBeat"
                                    data-wow-delay="1.3s"
                                >
                                    500+
                                </span>
                            </div>
                            <h3
                                className="text-7 wow rubberBand"
                                data-wow-delay="2s"
                            >
                                Hours of{" "}
                                <span className="fw-700">
                                    Software Engineer Study
                                </span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row gy-3 mt-4">
                    <div
                        className="col-6 col-lg-3 wow fadeInUp"
                        data-wow-delay="0.2s"
                    >
                        <p className="text-muted fw-500 mb-0">Name:</p>
                        <p className="text-4 text-dark fw-600 mb-0">
                            {result?.name}
                        </p>
                    </div>
                    <div
                        className="col-6 col-lg-3 wow fadeInUp"
                        data-wow-delay="0.3s"
                    >
                        <p className="text-muted fw-500 mb-0">From:</p>
                        <p className="text-4 text-dark fw-600 mb-0">
                            {result.contactInfo?.location}
                        </p>
                    </div>
                    <div
                        className="col-6 col-lg-3 wow fadeInUp"
                        data-wow-delay="0.4s"
                    >
                        <p className="text-muted fw-500 mb-0">Email:</p>
                        <p className="text-4 fw-600 mb-0">
                            <a
                                className="link-dark"
                                href={`mailto:${result.contactInfo?.email}`}
                            >
                                {result.contactInfo?.email}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
