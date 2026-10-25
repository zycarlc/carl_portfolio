// Dev-only (CRA loads this only for `npm start`): lets the in-page editor save profile.json.
const fs = require("fs")
const path = require("path")
const { pathToFileURL } = require("url")

const FILE = path.join(__dirname, "data", "profile.json")

module.exports = function (app) {
    // Runs the Netlify chat function in-process so `npm start` works without the Netlify CLI.
    // Needs GEMINI_API_KEY in .env (loaded by CRA into process.env).
    app.post("/.netlify/functions/chat", (req, res) => {
        let body = ""
        req.on("data", chunk => (body += chunk))
        req.on("end", async () => {
            const fnPath = path.join(__dirname, "..", "netlify", "functions", "chat.mjs")
            // Cache-bust so edits to the function are picked up without restarting.
            const { default: handler } = await import(
                `${pathToFileURL(fnPath).href}?t=${Date.now()}`
            )
            const out = await handler(
                new Request("http://localhost/.netlify/functions/chat", { method: "POST", body })
            )
            res.status(out.status).set("Content-Type", "application/json").send(await out.text())
        })
    })

    app.post("/__dev/profile", (req, res) => {
        let body = ""
        req.on("data", chunk => (body += chunk))
        req.on("end", () => {
            try {
                const data = JSON.parse(body)
                fs.writeFileSync(FILE, JSON.stringify(data, null, 4) + "\n")
                res.json({ ok: true })
            } catch (err) {
                res.status(400).json({ ok: false, error: err.message })
            }
        })
    })
}
