import React from "react"
import { HelmetProvider } from "react-helmet-async"

// for rtl format comment out bootstrap.min.css and uncomment bootstrap.rtl.min.css
import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/css/bootstrap.rtl.min.css";

import "bootstrap/dist/js/bootstrap.bundle.min.js"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import "./sass/stylesheet.scss"

import "./sass/color-peaceful-green.scss"

import "./index.scss"
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"

import App from "./App"

const container = document.getElementById("root")
const helmetContext = {}

createRoot(container).render(
    <React.StrictMode>
        <HelmetProvider context={helmetContext}>
            <Router>
                <App />
            </Router>
        </HelmetProvider>
    </React.StrictMode>
)
