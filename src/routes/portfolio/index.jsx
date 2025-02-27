import AboutUs from "../../components/About"
import Resume from "../../components/Resume"
import Portfolio from "../../components/Portfolio"
import Contact from "../../components/Contact"
import CallToAction from "../../components/CallToAction"
import React from "react"

function Home({ result }) {
    React.useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <AboutUs result={result}></AboutUs>
            <Resume result={result}></Resume>
            <Portfolio result={result}></Portfolio>
            <CallToAction></CallToAction>
            <Contact result={result}></Contact>
        </>
    )
}

export default Home
