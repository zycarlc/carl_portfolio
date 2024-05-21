import React, { useState } from "react"
import { Link as ScrollTo } from "react-scroll"
import { Link, useLocation } from "react-router-dom"
import { scrollDuration } from "../../../config/commonConfig"
import { Tooltip } from "../../Tooltip"

const FullScreenHeader = ({ textWhite, result }) => {
    const [stickyHeader, setStickyHeader] = useState(false)
    const [isNavModalClose, setIsNavModalClose] = useState(true)

    const location = useLocation()

    const checkScrollTop = () => {
        let header = document.getElementsByClassName("primary-menu")

        if (header) {
            if (
                document.body.scrollTop > 1 ||
                document.documentElement.scrollTop > 1
            ) {
                setStickyHeader(true)
            } else {
                setStickyHeader(false)
            }
        }
    }

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", checkScrollTop)
    }

    return (
        <header id="header" className="sticky-top">
            {/* Navbar */}
            <nav
                className={
                    "primary-menu navbar navbar-expand-none navbar-overlay  bg-transparent border-bottom-0 text-5 fw-600 " +
                    (stickyHeader ? "sticky-on-top " : " ") +
                    (textWhite
                        ? "navbar-overlay navbar-text-light"
                        : "navbar-overlay-dark")
                }
            >
                <div className="container">
                    {/* Logo */}
                    <Link
                        className="logo"
                        title="Zhenyu"
                        smooth="easeInOutQuint"
                        duration={scrollDuration}
                        style={{
                            cursor: "pointer",
                            textDecoration: "none",
                        }}
                        to="home"
                        onClick={e => {
                            e.preventDefault()
                            setIsNavModalClose(true)
                        }}
                    >
                        <p className="mb-0" style={{ color: "#1e3932" }}>
                            Zhenyu Chen
                        </p>
                    </Link>
                    {/* Logo End */}
                    {location.pathname === "/" ? (
                        <>
                            <div className="d-flex align-items-center">
                                <Link
                                    className="btn btn-link text-dark smooth-scroll"
                                    smooth="easeInOutQuint"
                                    duration={scrollDuration}
                                    style={{ cursor: "pointer" }}
                                    to="/blog"
                                >
                                    Blog
                                </Link>
                                <button
                                    className={
                                        "navbar-toggler collapsed " +
                                        (isNavModalClose ? "" : "show")
                                    }
                                    type="button"
                                    onClick={() =>
                                        setIsNavModalClose(!isNavModalClose)
                                    }
                                    style={{ color: "#1e3932" }}
                                >
                                    <span
                                        style={{ backgroundColor: "#1e3932" }}
                                    />
                                    <span
                                        style={{ backgroundColor: "#1e3932" }}
                                    />
                                    <span
                                        style={{ backgroundColor: "#1e3932" }}
                                    />
                                </button>
                            </div>
                            <>
                                <div
                                    id="header-nav"
                                    className={
                                        "collapse navbar-collapse " +
                                        (isNavModalClose ? "" : "show")
                                    }
                                >
                                    <div className="d-flex flex-column h-100 align-items-center justify-content-center">
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                                <ScrollTo
                                                    className="nav-link "
                                                    smooth="easeInOutQuint"
                                                    duration={scrollDuration}
                                                    style={{
                                                        cursor: "pointer",
                                                    }}
                                                    activeClass="active"
                                                    spy
                                                    to="home"
                                                    onClick={e => {
                                                        e.preventDefault()
                                                        setIsNavModalClose(true)
                                                    }}
                                                >
                                                    Home
                                                </ScrollTo>
                                            </li>
                                            <li className="nav-item">
                                                <ScrollTo
                                                    className="nav-link "
                                                    smooth="easeInOutQuint"
                                                    duration={scrollDuration}
                                                    style={{
                                                        cursor: "pointer",
                                                    }}
                                                    activeClass="active"
                                                    spy
                                                    to="about"
                                                    onClick={e => {
                                                        e.preventDefault()
                                                        setIsNavModalClose(true)
                                                    }}
                                                >
                                                    About Me
                                                </ScrollTo>
                                            </li>
                                            <li className="nav-item">
                                                <ScrollTo
                                                    className="nav-link "
                                                    smooth="easeInOutQuint"
                                                    duration={scrollDuration}
                                                    style={{
                                                        cursor: "pointer",
                                                    }}
                                                    activeClass="active"
                                                    spy
                                                    to="resume"
                                                    onClick={e => {
                                                        e.preventDefault()
                                                        setIsNavModalClose(true)
                                                    }}
                                                >
                                                    Resume
                                                </ScrollTo>
                                            </li>
                                            <li className="nav-item">
                                                <ScrollTo
                                                    className="nav-link "
                                                    smooth="easeInOutQuint"
                                                    duration={scrollDuration}
                                                    style={{
                                                        cursor: "pointer",
                                                    }}
                                                    activeClass="active"
                                                    spy
                                                    to="projects"
                                                    onClick={e => {
                                                        e.preventDefault()
                                                        setIsNavModalClose(true)
                                                    }}
                                                >
                                                    Projects
                                                </ScrollTo>
                                            </li>
                                            <li className="nav-item">
                                                <ScrollTo
                                                    className="nav-link "
                                                    smooth="easeInOutQuint"
                                                    duration={scrollDuration}
                                                    style={{
                                                        cursor: "pointer",
                                                    }}
                                                    activeClass="active"
                                                    spy
                                                    to="contact"
                                                    onClick={e => {
                                                        e.preventDefault()
                                                        setIsNavModalClose(true)
                                                    }}
                                                >
                                                    Contact Me
                                                </ScrollTo>
                                            </li>
                                        </ul>
                                        <ul className="social-icons social-icons-light social-icons-lg social-icons-light d-inline-flex mt-4">
                                            <li className="social-icons-instagram">
                                                <Tooltip
                                                    text="Instagram"
                                                    placement="top"
                                                >
                                                    <a
                                                        href={`http://www.instagram.com/${result.contactInfo?.instagram}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <i className="fab fa-instagram" />
                                                    </a>
                                                </Tooltip>
                                            </li>
                                            <li className="social-icons-linkedin">
                                                <Tooltip
                                                    text="Linkedin"
                                                    placement="top"
                                                >
                                                    <a
                                                        href={`http://www.linkedin.com/in/${result.contactInfo?.linkedin}/`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <i className="fab fa-linkedin" />
                                                    </a>
                                                </Tooltip>
                                            </li>
                                            <li className="social-icons-github">
                                                <Tooltip
                                                    text="Github"
                                                    placement="top"
                                                >
                                                    <a
                                                        href={`http://www.github.com/${result.contactInfo?.github}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <i className="fab fa-github" />
                                                    </a>
                                                </Tooltip>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </>
                        </>
                    ) : (
                        <Link
                            className="btn btn-link text-dark smooth-scroll"
                            smooth="easeInOutQuint"
                            duration={scrollDuration}
                            style={{ cursor: "pointer" }}
                            to="/"
                        >
                            Back to Portfolio
                        </Link>
                    )}
                </div>
            </nav>
            {/* Navbar End */}
        </header>
    )
}

export default FullScreenHeader
