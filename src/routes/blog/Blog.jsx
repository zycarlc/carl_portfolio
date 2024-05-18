import axios from "axios"
import { useState, useEffect } from "react"
import Typewriter from "typewriter-effect"

let mediumURL = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@zhenyuc`

const addClassToImage = html => {
    return html.replace(/<img /g, '<img class="img-fluid mx-auto" ')
}

const MediumPost = ({ content }) => {
    const [isReadMore, setIsReadMore] = useState(true)
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore)
    }
    let modifiedContent = addClassToImage(content)
    if (isReadMore) {
        modifiedContent = modifiedContent.slice(0, 500)
    }
    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: modifiedContent }} />
            <span
                onClick={toggleReadMore}
                className="read-or-hide btn btn-primary"
            >
                {isReadMore ? "...read more" : " show less"}
            </span>
        </>
    )
}

const Blog = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios(mediumURL)
            .then(res => {
                let modifiedPosts = res.data.items.map(post => {
                    let originalTitle = post.title
                    let contentTitle = post.content.match(/<h3>(.*?)<\/h3>/)[1]
                    if (
                        originalTitle.slice(0, 20) === contentTitle.slice(0, 20)
                    ) {
                        post.title = contentTitle
                        post.content = post.content.replace(contentTitle, "")
                    }
                    return post
                })
                setPosts(modifiedPosts)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <div className="bg-primary d-flex position-relative py-5 align-items-baseline px-5">
                <div className="container my-auto py-4">
                    <div className="row">
                        <h2 className="col-lg-7 text-center text-lg-start align-self-center order-1 order-lg-0 wow fadeIn">
                            <Typewriter
                                options={{
                                    strings: [
                                        "Developer",
                                        "Blogger",
                                        "IoT Enthusiast",
                                        "Smart Home Lover",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h2>

                        <div
                            style={{ height: "150px", width: "150px" }}
                            className="wow zoomIn col-lg-5 text-center align-self-center mb-4 mb-lg-0 order-0 order-lg-1 mx-auto"
                        >
                            <img
                                className="img-fluid rounded-pill mh-100"
                                src={"/images/web-developer-sm.jpg"}
                                title="I'm Carl"
                                alt="I'm Carl"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div id="content" role="main">
                <section id="blog" className="section bg-white">
                    <div className="container">
                        <div className="row mt-5 ">
                            <div className="wow fadeInUp" data-wow-delay="0.2s">
                                <div className="blog-container">
                                    <div className="row g-5">
                                        <div
                                            className="wow fadeInUp"
                                            data-wow-delay="0.2s"
                                        >
                                            {posts.length > 0 &&
                                                posts.map((post, index) => (
                                                    <div key={index}>
                                                        <a
                                                            className="btn-link text-secondary"
                                                            href={post.link}
                                                        >
                                                            <h3 className="text-6 fw-600">
                                                                {post.title}
                                                            </h3>
                                                        </a>
                                                        <p className="mb-2">
                                                            {post.pubDate}
                                                        </p>
                                                        <div className="border-start border-2 border-primary px-4">
                                                            <MediumPost
                                                                content={
                                                                    post.content
                                                                }
                                                            />
                                                            <hr className="my-5" />
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Blog
