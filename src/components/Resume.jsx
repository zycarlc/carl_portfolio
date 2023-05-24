import React from "react"

const Resume = ({ result }) => {
    const educationDetails = result?.educations
    const experienceDetails = result?.workExperiences

    const skillIcons = {
        Firebase:
            "https://cdn.sanity.io/images/zpskic8f/production/a34200f21d73250b338bfcf423bb6b2e779bf7f6-32x32.svg",
        Bootstrap:
            "https://cdn.sanity.io/images/zpskic8f/production/c5b0d9a66f7c8c08b8d4d9aafe55b4f9c0c7d24d-256x256.svg",
        React: "https://cdn.sanity.io/images/zpskic8f/production/bcf867381478447e5f817a79410e0fa8bddfff38-256x228.svg",
        JavaScript:
            "https://cdn.sanity.io/images/zpskic8f/production/a9f58e5c8d5d0c088ff7e5e43363817b9fa1832b-256x256.svg",
        PostgreSQL:
            "https://cdn.sanity.io/images/zpskic8f/production/78caffbd13c7c07ccae5f3144c7df87ceb56bcb6-128x128.svg",
        CSS: "https://cdn.sanity.io/images/zpskic8f/production/64359677c12dadf13878ea291f179acd0f168110-32x32.svg",
        MUI: "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg",
        HTML: "https://cdn.sanity.io/images/zpskic8f/production/f8d913d0a1ebc51e318226ea3d69ff3e01917cd7-32x32.svg",
        SANITY: "https://cdn.sanity.io/images/zpskic8f/production/2a14afdf73e2c5232d56335d20faa8944a39fe9e-512x104.svg",
        Express:
            "https://cdn.sanity.io/images/zpskic8f/production/bde772e9e79c90a7e56bfe60aab4bc59ce641086-512x149.svg",
    }

    const skills = result?.skills

    return (
        <section id="resume" className="section">
            <div className="container">
                {/* Heading */}
                <p className=" text-center mb-2 wow fadeInUp">
                    <span className="bg-primary text-dark px-2">Resume</span>
                </p>
                <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
                    A summary of My Resume
                </h2>
                {/* Heading end*/}
                <div className="row g-5 mt-5">
                    {/* My Education */}
                    <div className="col-lg-6 wow fadeInUp">
                        <h2 className="text-7 fw-600 mb-4 pb-2">
                            My Education
                        </h2>
                        <div className="border-start border-2 border-primary ps-3">
                            {educationDetails?.length > 0 &&
                                educationDetails?.map((value, index) => (
                                    <div key={index}>
                                        <h3 className="text-5">
                                            {value.degree}
                                        </h3>
                                        <p className="mb-2">
                                            {value.institute} /{" "}
                                            {value.startMMYYYY} -{" "}
                                            {value.endMMYYYY}
                                        </p>
                                        {value.skills[0] && (
                                            <ul>
                                                {value.skills.map(
                                                    (skill, i) => (
                                                        <li
                                                            className="text-muted"
                                                            key={i}
                                                        >
                                                            {skill}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        )}
                                        <hr className="my-4" />
                                    </div>
                                ))}
                        </div>
                    </div>
                    {/* My Experience */}
                    <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay="0.2s"
                    >
                        <h2 className="text-7 fw-600 mb-4 pb-2">
                            My Experience
                        </h2>
                        <div className="border-start border-2 border-primary ps-3">
                            {experienceDetails?.length > 0 &&
                                experienceDetails.map((value, index) => (
                                    <div key={index}>
                                        <h3 className="text-5">
                                            {value.jobTitle}
                                        </h3>
                                        <p className="mb-2">
                                            {value.company} /{" "}
                                            {value.startMMYYYY} -{" "}
                                            {value.endMMYYYY}
                                        </p>
                                        <ul>
                                            {value.responsibilities.map(
                                                (resp, i) => (
                                                    <li
                                                        className="text-muted mb-2"
                                                        key={i}
                                                    >
                                                        {resp}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                        <hr className="my-4" />
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
                {/* My Skills */}
                <h2 className="text-7 fw-600 mb-4 pb-2 mt-5 wow fadeInUp">
                    My Skills
                </h2>
                <div className="row gx-5 wow fadeInUp">
                    {skills?.length > 0 &&
                        skills.map((skill, index) => (
                            <div
                                className="col-sm-6 col-md-4 col-lg-2 wow fadeInUp"
                                key={index}
                            >
                                <div className="skill-box">
                                    <div className="skill-img">
                                        <img
                                            className="img-fluid d-block skill-image"
                                            src={skillIcons[skill]}
                                            alt=""
                                        />
                                        <div className="skill-overlay-details">
                                            <p className="fw-500 text-start mb-2">
                                                {skill}{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                <p className="text-center mt-5 wow fadeInUp">
                    <a
                        className="btn btn-secondary shadow-none rounded-0"
                        href={result?.resume}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Check my resume
                    </a>
                </p>
            </div>
        </section>
    )
}

export default Resume
