import { useEffect, useRef, useState } from "react"
import "./AiChat.css"

const ENDPOINT = "/.netlify/functions/chat"

const AiChat = ({ name }) => {
    const firstName = (name || "").split(" ")[0] || "me"
    const [open, setOpen] = useState(false)
    const [input, setInput] = useState("")
    const [sending, setSending] = useState(false)
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            text: `Hi! I'm an AI version of ${firstName}. Ask me about my experience, projects or skills, or leave your contact details and I'll make sure the real me gets back to you.`,
        },
    ])
    const endRef = useRef(null)

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages, open])

    const send = async e => {
        e.preventDefault()
        const text = input.trim()
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

    return (
        <div className="ai-chat">
            {open && (
                <div className="ai-chat-panel" role="dialog" aria-label={`Chat with AI ${firstName}`}>
                    <div className="ai-chat-header">
                        <span>Chat with AI {firstName}</span>
                        <button
                            type="button"
                            className="ai-chat-close"
                            aria-label="Close chat"
                            onClick={() => setOpen(false)}
                        >
                            ×
                        </button>
                    </div>
                    <div className="ai-chat-body">
                        {messages.map((m, i) => (
                            <div key={i} className={`ai-chat-msg ${m.role}${m.error ? " error" : ""}`}>
                                {m.text}
                            </div>
                        ))}
                        {sending && <div className="ai-chat-msg assistant typing">Typing…</div>}
                        <div ref={endRef} />
                    </div>
                    <form className="ai-chat-form" onSubmit={send}>
                        <input
                            type="text"
                            value={input}
                            maxLength={1000}
                            placeholder="Ask me anything…"
                            onChange={e => setInput(e.target.value)}
                            aria-label="Your message"
                        />
                        <button type="submit" disabled={sending || !input.trim()}>
                            Send
                        </button>
                    </form>
                    <div className="ai-chat-note">AI-generated; may be inaccurate.</div>
                </div>
            )}
            <button
                type="button"
                className="ai-chat-toggle"
                onClick={() => setOpen(o => !o)}
                aria-label={open ? "Close chat" : `Chat with AI ${firstName}`}
            >
                {open ? "×" : <i className="fas fa-comment-dots"></i>}
            </button>
        </div>
    )
}

export default AiChat
