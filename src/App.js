import "./App.scss"
import WOW from "wowjs"
import AboutUs from "./components/About"
import Resume from "./components/Resume"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"
import {
    appliedConfig,
    introBackgroundConfig,
    themeConfig,
} from "./config/commonConfig"
import { Tooltip } from "./components/Tooltip"
import CallToAction from "./components/CallToAction"
import FullScreenHeader from "./components/themes/fullScreen/Header"
import FullScreenDefaultIntro from "./components/themes/fullScreen/IntroDefault"
import BottomHeaderDefaultIntro from "./components/themes/bottomHeader/IntroDefault"
import StandardMenuDefaultIntro from "./components/themes/StandardMenu/IntroDefault"
import axios from "axios"

let PROJECT_ID = process.env.REACT_APP_SANITY
let DATASET = process.env.REACT_APP_DATASET
let QUERY = encodeURIComponent(`*[_type == ${process.env.REACT_APP_QUERY}]`)

// Compose the URL for your project's endpoint and add the query
let PROJECT_URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`

function App() {
    const appliedTheme = appliedConfig.appliedTheme
    const appliedIntro = appliedConfig.appliedIntro

    const [result, setResult] = useState("")

    useEffect(() => {
        axios(PROJECT_URL)
            .then(res => {
                setResult(res.data.result[0])
                console.log(res.data.result[0])
            })
            .catch(err => console.log(err))
    }, [])

    const handleNavClick = section => {
        document.getElementById(section).scrollIntoView({ behavior: "smooth" })
    }

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
            <div style={{ position: "relative" }}>
                <div id="main-wrapper">
                    {appliedTheme === themeConfig.BottomHeader &&
                        getBottomHeaderIntro()}
                    {getHeader()}

                    <div id="content" role="main">
                        {appliedTheme === themeConfig.FullScreenMenu &&
                            getFullScreenIntro()}
                        {appliedTheme === themeConfig.StandardMenu &&
                            getStandardMenuIntro()}

                        <AboutUs result={result}></AboutUs>
                        <Resume result={result}></Resume>
                        <Portfolio result={result}></Portfolio>
                        <CallToAction></CallToAction>
                        <Contact result={result}></Contact>
                    </div>
                    <Footer handleNavClick={handleNavClick}></Footer>
                </div>
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
            </div>
        </>
    )
}

export default App
