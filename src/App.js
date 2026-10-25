import { Route, Routes } from "react-router-dom"

import WOW from "wowjs"
import Home from "./routes/portfolio"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"
import {
    appliedConfig,
    introBackgroundConfig,
    themeConfig,
} from "./config/commonConfig"
import { Tooltip } from "./components/Tooltip"

import FullScreenHeader from "./components/themes/fullScreen/Header"
import FullScreenDefaultIntro from "./components/themes/fullScreen/IntroDefault"
import BottomHeaderDefaultIntro from "./components/themes/bottomHeader/IntroDefault"
import StandardMenuDefaultIntro from "./components/themes/StandardMenu/IntroDefault"
import profile from "./data/profile.json"
import DevEditor from "./components/DevEditor"
import AiChat from "./components/AiChat"
import Blog from "./routes/blog/Blog"
import Enlightenly from "./routes/enlightenly"
import React from "react"

function Header({ result, appliedTheme, appliedIntro }) {
    const [scrollTopVisible, setScrollTopVisible] = useState(false)

    useEffect(() => {
        new WOW.WOW({
            live: false,
        }).init()
    }, [])

    const checkScrollTop = () => {
        let scrollTopBtn = document.getElementById("back-to-top")

        if (scrollTopBtn) {
            if (
                document.body.scrollTop > 400 ||
                document.documentElement.scrollTop > 400
            ) {
                setScrollTopVisible(true)
            } else {
                setScrollTopVisible(false)
            }
        }
    }

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", checkScrollTop)
    }

    const getHeader = () => {
        return (
            <FullScreenHeader
                result={result}
                textWhite={appliedIntro === introBackgroundConfig.image}
            ></FullScreenHeader>
        )
    }

    const getBottomHeaderIntro = () => {
        return (
            <BottomHeaderDefaultIntro
                result={result}
            ></BottomHeaderDefaultIntro>
        )
    }

    return (
        <>
            {appliedTheme === themeConfig.BottomHeader &&
                getBottomHeaderIntro()}
            {getHeader()}

            <div id="content" role="main"></div>
            {/* back to top */}
            <Tooltip text="Back to Top" placement="left">
                <span
                    id="back-to-top"
                    className="rounded-circle"
                    style={{
                        display: scrollTopVisible ? "inline" : "none",
                    }}
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }}
                >
                    <i className="fas fa-arrow-up"></i>
                </span>
            </Tooltip>
        </>
    )
}

export default function App() {
    const result = profile
    const handleNavClick = section => {
        document.getElementById(section).scrollIntoView({ behavior: "smooth" })
    }
    const appliedTheme = appliedConfig.appliedTheme
    const appliedIntro = appliedConfig.appliedIntro

    const getFullScreenIntro = () => {
        return <FullScreenDefaultIntro result={result}></FullScreenDefaultIntro>
    }

    const getStandardMenuIntro = () => {
        return (
            <StandardMenuDefaultIntro
                result={result}
            ></StandardMenuDefaultIntro>
        )
    }

    return (
        <>
            <Header
                result={result}
                appliedTheme={appliedTheme}
                appliedIntro={appliedIntro}
            />
            <div style={{ position: "relative" }}>
                <div id="main-wrapper">
                    <Routes>
                        <Route path="/blog" element={<Blog />} />
                        <Route
                            path="/enlightenly-case-study"
                            element={<Enlightenly />}
                        />
                        <Route
                            path="/"
                            element={
                                <>
                                    {appliedTheme ===
                                        themeConfig.FullScreenMenu &&
                                        getFullScreenIntro()}
                                    {appliedTheme ===
                                        themeConfig.StandardMenu &&
                                        getStandardMenuIntro()}
                                    <Home result={result} />
                                </>
                            }
                        />
                    </Routes>
                </div>
            </div>
            <Footer handleNavClick={handleNavClick} result={result}></Footer>
            <AiChat name={result.name} />
            {process.env.NODE_ENV === "development" && <DevEditor />}
        </>
    )
}
