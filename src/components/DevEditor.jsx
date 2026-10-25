import { useState } from "react"
import profile from "../data/profile.json"

// Only rendered in development (see App.js). Saves to src/data/profile.json via setupProxy.js.
const DevEditor = () => {
    const [open, setOpen] = useState(false)
    const [text, setText] = useState("")
    const [status, setStatus] = useState("")

    const openEditor = () => {
        setText(JSON.stringify(profile, null, 4))
        setStatus("")
        setOpen(true)
    }

    const save = async () => {
        try {
            JSON.parse(text)
        } catch (err) {
            setStatus(`Invalid JSON: ${err.message}`)
            return
        }
        const res = await fetch("/__dev/profile", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: text,
        })
        const out = await res.json().catch(() => ({}))
        setStatus(out.ok ? "Saved" : `Error: ${out.error || res.status}`)
    }

    return (
        <>
            <button
                onClick={openEditor}
                style={{
                    position: "fixed",
                    left: 16,
                    bottom: 16,
                    zIndex: 9999,
                    padding: "8px 14px",
                    borderRadius: 6,
                    border: "none",
                    background: "#111",
                    color: "#fff",
                }}
            >
                Edit profile
            </button>
            {open && (
                <div
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 10000,
                        background: "rgba(0,0,0,.6)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div
                        style={{
                            background: "#fff",
                            width: "min(900px, 95vw)",
                            height: "90vh",
                            padding: 16,
                            display: "flex",
                            flexDirection: "column",
                            gap: 8,
                        }}
                    >
                        <textarea
                            value={text}
                            onChange={e => setText(e.target.value)}
                            spellCheck={false}
                            style={{
                                flex: 1,
                                fontFamily: "monospace",
                                fontSize: 13,
                                whiteSpace: "pre",
                            }}
                        />
                        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                            <button onClick={save}>Save</button>
                            <button onClick={() => setOpen(false)}>Close</button>
                            <span>{status}</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default DevEditor
