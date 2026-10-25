import WOW from "wowjs"
import Footer from "../../components/Footer"
import { useEffect, useState } from "react"
import {
    appliedConfig,
    introBackgroundConfig,
    themeConfig,
} from "../../config/commonConfig"
import { Tooltip } from "../../components/Tooltip"
import FullScreenHeader from "../../components/themes/fullScreen/Header"
import BottomHeaderDefaultIntro from "../../components/themes/bottomHeader/IntroDefault"
import profile from "../../data/profile.json"
import Blog from "."

function Index() {
    const appliedTheme = appliedConfig.appliedTheme
    const appliedIntro = appliedConfig.appliedIntro

    const result = profile

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

    return (
        <>
            <div style={{ position: "relative" }}>
                <div id="main-wrapper">
                    {appliedTheme === themeConfig.BottomHeader &&
                        getBottomHeaderIntro()}
                    {getHeader()}

                    <div id="content" role="main">
                        <Blog />
                    </div>
                    <Footer
                        handleNavClick={handleNavClick}
                        result={result}
                    ></Footer>
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

export default Index
