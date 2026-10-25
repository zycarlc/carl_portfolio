import { useEffect, useRef, useState } from "react"
import "./AiChat.css"

const ENDPOINT = "/.netlify/functions/chat"

const SUGGESTIONS = [
    "What projects have you built?",
    "What's your tech stack?",
    "Tell me about your work experience",
    "Are you open to new opportunities?",
    "How can I get in touch with you?",
]

// The model sometimes answers with light Markdown; render **bold** and "* " bullets
// instead of showing the raw symbols.
const formatText = text =>
    text.split("\n").map((line, i) => {
        const bullet = /^\s*[*-]\s+/.test(line)
        const parts = line
            .replace(/^\s*[*-]\s+/, "")
            .split(/\*\*(.+?)\*\*/g)
            .map((p, j) => (j % 2 ? <strong key={j}>{p}</strong> : p))
        return (
            <div key={i} className={bullet ? "ai-chat-bullet" : undefined}>
                {parts}
                {line.trim() === "" && " "}
            </div>
        )
    })

// Renders `children` (the avatar) with a button underneath. Clicking the button
// slides a chat window in over the avatar.
const AiChat = ({ name, portrait, onOpenChange, children }) => {
    const firstName = (name || "").split(" ")[0] || "me"
    const [open, setOpen] = useState(false)

    useEffect(() => {
        onOpenChange?.(open)
    }, [open, onOpenChange])
    const [input, setInput] = useState("")
    const [sending, setSending] = useState(false)
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            text: `Hi! I'm an AI version of ${firstName}. Ask me about my experience, projects or skills, or leave your contact details and I'll make sure the real me gets back to you.`,
        },
    ])
    const bodyRef = useRef(null)

    useEffect(() => {
        const el = bodyRef.current
        if (el) el.scrollTop = el.scrollHeight
    }, [messages, sending, open])

    const send = async raw => {
        const text = raw.trim()
        if (!text || sending) return
        const next = [...messages, { role: "user", text }]
        setMessages(next)
        setInput("")
        setSending(true)
        try {
            // Skip the greeting so the conversation sent to the model starts with the user.
            const res = await fetch(ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: next.slice(1) }),
            })
            const data = await res.json().catch(() => ({}))
            if (res.status === 429) {
                setMessages([
                    ...next,
                    {
                        role: "assistant",
                        text: "You're sending messages a bit fast. Please wait a minute and try again.",
                        error: true,
                    },
                ])
                return
            }
            if (!res.ok) throw new Error(data.error || "Request failed")
            setMessages([...next, { role: "assistant", text: data.reply }])
        } catch (err) {
            setMessages([
                ...next,
                {
                    role: "assistant",
                    text: `Sorry, something went wrong. You can also reach me through the contact form on this page.`,
                    error: true,
                },
            ])
        } finally {
            setSending(false)
        }
    }

    const onSubmit = e => {
        e.preventDefault()
        send(input)
    }

    // Suggestions stay visible until the visitor has asked something.
    const showSuggestions = messages.length === 1

    return (
        <div className={`ai-chat${open ? " is-open" : ""}`}>
            <div className="ai-chat-stage">
                <div className="ai-chat-avatar" aria-hidden={open}>
                    {children}
                </div>
            </div>
            <div
                    className="ai-chat-panel"
                    role="dialog"
                    aria-label={`Chat with AI ${firstName}`}
                    aria-hidden={!open}
                >
                    <div className="ai-chat-header">
                        <span className="ai-chat-title">
                            {portrait && <img className="ai-chat-avatar-img" src={portrait} alt="" />}
                            Chat with AI {firstName}
                        </span>
                        <button
                            type="button"
                            className="ai-chat-close"
                            aria-label="Close chat"
                            tabIndex={open ? 0 : -1}
                            onClick={() => setOpen(false)}
                        >
                            ×
                        </button>
                    </div>
                    <div className="ai-chat-body" ref={bodyRef}>
                        {messages.map((m, i) => (
                            <div key={i} className={`ai-chat-row ${m.role}`}>
                                {m.role === "assistant" && portrait && (
                                    <img className="ai-chat-avatar-img" src={portrait} alt="" />
                                )}
                                <div className={`ai-chat-msg ${m.role}${m.error ? " error" : ""}`}>{formatText(m.text)}</div>
                            </div>
                        ))}
                        {showSuggestions && (
                            <div className="ai-chat-suggestions">
                                <div className="ai-chat-suggestions-label">Not sure what to ask? Try:</div>
                                {SUGGESTIONS.map(s => (
                                    <button
                                        key={s}
                                        type="button"
                                        className="ai-chat-chip"
                                        tabIndex={open ? 0 : -1}
                                        onClick={() => send(s)}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        )}
                        {sending && (
                            <div className="ai-chat-row assistant">
                                {portrait && <img className="ai-chat-avatar-img" src={portrait} alt="" />}
                                <div className="ai-chat-msg assistant typing">Typing…</div>
                            </div>
                        )}
                    </div>
                    <form className="ai-chat-form" onSubmit={onSubmit}>
                        <input
                            type="text"
                            value={input}
                            maxLength={1000}
                            tabIndex={open ? 0 : -1}
                            placeholder="Ask about my work, skills, or leave your contact…"
                            onChange={e => setInput(e.target.value)}
                            aria-label="Your message"
                        />
                        <button type="submit" tabIndex={open ? 0 : -1} disabled={sending || !input.trim()}>
                            Send
                        </button>
                    </form>
                    <div className="ai-chat-note">AI-generated; may be inaccurate.</div>
            </div>
            <button
                type="button"
                className="btn btn-secondary rounded-0 ai-chat-toggle"
                tabIndex={open ? -1 : 0}
                aria-hidden={open}
                onClick={() => setOpen(true)}
            >
                <i className="fas fa-comment-dots me-2"></i>Chat with AI {firstName}
                <span className="ai-chat-toggle-sub">Ask about my projects, skills &amp; experience</span>
            </button>
        </div>
    )
}

export default AiChat
