import { Link as ScrollTo } from "react-scroll"
import { scrollDuration } from "../../config/commonConfig"

const Enlightenly = () => {
    return (
        <>
            <div className="d-flex position-relative py-5 align-items-baseline px-5">
                <div className="container my-auto py-4">
                    <div className="row">
                        <div className="main">
                            <h2 className="title wow fadeIn py-4">
                                AI and LLM Integration Case Study: Full-Stack
                                Developer Internship at Enlightenly
                            </h2>

                            <h3 className="text-secondary">Introduction</h3>
                            <h6>Company Overview:</h6>
                            <p>
                                Enlightenly is a marketplace platform dedicated
                                to supporting small and medium-sized businesses
                                by facilitating product sales and reducing the
                                financial and operational strain of hiring
                                marketing specialists. The company integrates
                                advanced AI technologies into its products to
                                enhance functionality and efficiency.
                            </p>
                            <h6>Role and Key Achievements:</h6>
                            <p>
                                As a Full-Stack Developer intern integrating AI
                                solution at Enlightenly, my role involved
                                exploring the company’s needs, experimenting
                                with potential solutions, and creating technical
                                documentation. I achieved several key
                                milestones:
                            </p>
                            <ul className="ms-4">
                                <li className="mb-2">
                                    <strong>
                                        Development of a Robust Testing Method
                                        for LLMs:{" "}
                                    </strong>
                                    Successfully designed a testing framework
                                    that improved the accuracy of AI-generated
                                    marketing materials, achieving an 80-90%
                                    performance score in reflecting clients'
                                    unique voices.
                                </li>
                                <li className="mb-2">
                                    <strong>
                                        Implementation of Retrieval-Augmented
                                        Generation (RAG):{" "}
                                    </strong>
                                    Enhanced data retrieval efficiency, reducing
                                    token usage and latency by a factor of ten
                                    while identifying key trade-offs in response
                                    quality.
                                </li>
                                <li className="mb-2">
                                    <strong>
                                        Creation of a Seamless Client
                                        Application:{" "}
                                    </strong>
                                    Developed a WordPress plugin and a NodeJS
                                    server to facilitate secure interactions
                                    between users and AI services, ensuring a
                                    smooth user experience within the existing
                                    platform.
                                </li>
                            </ul>
                            <p>
                                <strong>Keywords: </strong>
                                Large Language Models (LLMs);
                                Retrieval-Augmented Generation (RAG); Prompt
                                Engineering; System Design; Full-Stack
                                Development; Personal Growth{" "}
                            </p>
                            <h3 className="text-secondary">
                                Initial Objectives and Scope{" "}
                            </h3>
                            <strong>Project Goals:</strong>
                            <p>
                                The primary goals at the beginning of my
                                internship were:
                            </p>
                            <ul className="ms-4">
                                <li className="mb-2">
                                    To explore and experiment with AI tools and
                                    solutions from a business perspective{" "}
                                </li>
                                <li className="mb-2">
                                    To learn from and adapt within a
                                    collaborative development environment{" "}
                                </li>
                                <li className="mb-2">
                                    To develop adaptive thinking skills beyond
                                    traditional software development
                                </li>
                            </ul>
                            <strong>Challenges and Constraints:</strong>
                            <p>Initial challenges included:</p>
                            <ul className="ms-4">
                                <li className="mb-2">
                                    Limited knowledge of AI technologies and
                                    their applications
                                </li>
                                <li className="mb-2">
                                    Insufficient understanding of the specific
                                    business needs of Enlightenly
                                </li>
                            </ul>
                        </div>
                        <div className="w-100 border mb-5"></div>
                        <div className="container wow">
                            <div className="row">
                                <div
                                    className="col-lg-8"
                                    data-spy="scroll"
                                    data-target="#navbar1"
                                    data-offset="4em"
                                >
                                    <h3 className="text-secondary">
                                        Project Overview
                                    </h3>
                                    <div className="wow" id="project-1">
                                        <h4>
                                            Project 1: Designing a Testing
                                            Method for LLMs
                                        </h4>
                                        <strong>Objective:</strong>
                                        <p>
                                            Enlightenly's business need was to
                                            identify the most effective AI
                                            solution for generating marketing
                                            materials that accurately reflect
                                            their clients' unique voices and
                                            writing styles. The objective of
                                            this project is to identify the most
                                            suitable LLM for Enlightenly’s needs
                                            by creating a robust testing
                                            methodology that evaluates{" "}
                                            <span>
                                                <strong>
                                                    model performance
                                                </strong>
                                            </span>{" "}
                                            and{" "}
                                            <span>
                                                <strong>prompt design</strong>
                                            </span>
                                            .
                                        </p>
                                        <strong>Process:</strong>
                                        <p>
                                            To meet Enlightenly’s requirement
                                            for accurately reflecting clients'
                                            voices, I:
                                        </p>
                                        <ul className="ms-4">
                                            <li className="mb-2">
                                                Utilized LangChain, an
                                                open-source framework, to manage
                                                LLM API requests and prompt
                                                templates efficiently.
                                            </li>
                                            <li className="mb-2">
                                                To learn from and adapt within a
                                                collaborative development
                                                environment{" "}
                                            </li>
                                            <li className="mb-2">
                                                Conducted comparative testing
                                                with various LLMs, including
                                                GPT, Clause, Mistral, Groq,
                                                Gemini, and Llama, to evaluate
                                                their performance in generating
                                                marketing content that aligns
                                                with client-specific styles.
                                            </li>
                                            <li className="mb-2">
                                                Developed a JavaScript-based
                                                testing application to automate
                                                and streamline the evaluation
                                                process.
                                            </li>
                                        </ul>
                                        <strong>Technologies Used:</strong>
                                        <ul className="ms-4">
                                            <li className="mb-2">
                                                LLMs: GPT, Clause, Mistral,
                                                Groq, Gemini, Llama
                                            </li>
                                            <li className="mb-2">
                                                Framework: LangChain, LangSmith
                                            </li>
                                            <li className="mb-2">
                                                Language: JavaScript and NodeJS
                                            </li>
                                        </ul>
                                        <img
                                            className="mx-auto d-block w-75 shadow-sm"
                                            src="https://res.cloudinary.com/dmla1ujpx/image/upload/v1728356378/enlightenly/Screenshot_2024-09-18_at_11.41.36_am_spnhqw.png"
                                            alt="Prompt Template"
                                        />
                                        <div className="text-muted w-75 d-block mx-auto">
                                            A Prompt Template example from
                                            LangChain Hub. The user will provide
                                            the transcript for different use
                                            cases to replace the placeholder at
                                            the bottom.
                                        </div>
                                        <strong>Outcome:</strong>
                                        <ul className="ms-4">
                                            <li className="mb-2">
                                                Achieved a performance score of
                                                80-90% based on criteria for
                                                reflecting clients' unique
                                                voices and writing styles.
                                            </li>
                                            <li className="mb-2">
                                                Refined prompt templates and
                                                identified the most suitable
                                                LLMs for meeting Enlightenly’s
                                                needs, ensuring that the
                                                AI-generated marketing materials
                                                were aligned with
                                                client-specific requirements.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="w-100 border mb-5"></div>
                                    <div className="wow" id="project-2">
                                        <h4>
                                            Project 2: Implementing
                                            Retrieval-Augmented Generation (RAG)
                                        </h4>
                                        <strong>Objective:</strong>
                                        <p>
                                            Address limitations of the initial
                                            testing method, such as high token
                                            usage and long latency, by
                                            integrating the RAG method for more
                                            efficient data retrieval.
                                        </p>
                                        <strong>Process:</strong>
                                        <p>
                                            To address the identified issues, I:
                                        </p>
                                        <ul className="ms-4">
                                            <li className="mb-2">
                                                Investigated various RAG
                                                solutions, ultimately selecting
                                                Azure AI Search for its
                                                scalability and efficiency.
                                            </li>
                                            <li className="mb-2">
                                                Customized the integration of
                                                Azure AI Search with LangChainJS
                                                to align with our existing
                                                framework, focusing on
                                                optimizing data retrieval and
                                                reducing token usage.
                                            </li>
                                        </ul>
                                        <strong>Technologies Used:</strong>
                                        <ul className="ms-4">
                                            <li className="mb-2">
                                                Cloud Service: Azure
                                            </li>
                                            <li className="mb-2">
                                                Framework: LangChain,
                                                LangChainJS
                                            </li>
                                            <li className="mb-2">
                                                Service: Azure AI Search
                                            </li>
                                        </ul>
                                        <img
                                            className="mx-auto d-block w-75 shadow-sm"
                                            src="https://res.cloudinary.com/dmla1ujpx/image/upload/v1728356410/enlightenly/Screenshot_2024-08-26_at_3.28.48_pm_pmptfa.png"
                                            alt="Azure AI Search"
                                        />
                                        <div className="text-muted w-75 d-block mx-auto">
                                            An index will be created as one
                                            client’s knowledge base. Then, Azure
                                            will handle the client’s RAG.
                                        </div>
                                        <strong>Outcome:</strong>
                                        <ul className="ms-4">
                                            <li className="mb-2">
                                                Reduced token usage and latency
                                                to one-tenth of the initial
                                                testing.
                                            </li>
                                            <li className="mb-2">
                                                Identified a trade-off between
                                                reduced latency and response
                                                quality, particularly in
                                                replicating the speaker’s voice.
                                            </li>
                                            <li className="mb-2">
                                                Concluded that the initial
                                                testing method provided higher
                                                quality, despite the higher
                                                latency, which was preferable
                                                from a business perspective.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="w-100 border mb-5"></div>
                                    <div className="wow" id="project-3">
                                        <h4>
                                            Project 3: Development of Client App
                                            and NodeJS Server
                                        </h4>
                                        <strong>Objective:</strong>
                                        <p>
                                            Enhance Enlightenly’s existing
                                            WordPress platform by developing a
                                            client application and a NodeJS
                                            server. The client application will
                                            be implemented as a WordPress plugin
                                            to facilitate user interactions with
                                            AI for generating marketing content,
                                            while the NodeJS server will handle
                                            backend operations and manage
                                            communication between the WordPress
                                            platform and the AI services.
                                        </p>
                                        <strong>Process:</strong>
                                        <p>
                                            Given the constraints of the
                                            existing WordPress platform and the
                                            need to integrate new
                                            functionalities, I:
                                        </p>
                                        <ul className="ms-4">
                                            <li className="mb-2">
                                                Developed a WordPress plugin to
                                                serve as the client application,
                                                enabling users to submit content
                                                for AI processing and generate
                                                marketing materials.
                                            </li>
                                            <li className="mb-2">
                                                Addressed the limitations of the
                                                front-end application by
                                                transitioning to a server-side
                                                NodeJS application to handle
                                                secure communication and complex
                                                backend operations.
                                            </li>
                                            <li className="mb-2">
                                                Implemented middleware to manage
                                                secure interactions between the
                                                WordPress platform and the
                                                NodeJS server, including CORS
                                                and API key validation, and
                                                designed a polling method to
                                                handle variable response times.
                                            </li>
                                        </ul>
                                        <strong>Technologies Used:</strong>
                                        <ul className="ms-4">
                                            <li className="mb-2">
                                                Platform: WordPress, NodeJS
                                            </li>
                                            <li className="mb-2">
                                                Security: Middleware, CORS, API
                                                key validation
                                            </li>
                                            <li className="mb-2">
                                                System Design: Middleware for
                                                backend interactions
                                            </li>
                                        </ul>
                                        <img
                                            className="mx-auto d-block w-75 shadow-sm"
                                            src="https://res.cloudinary.com/dmla1ujpx/image/upload/v1728356597/enlightenly/Screenshot_2024-10-08_at_2.02.33_pm_kdaqlw.png"
                                            alt="system design"
                                        />
                                        <div className="text-muted w-75 d-block mx-auto">
                                            System design for the new app,
                                            ensuring secure communication
                                            between WordPress and NodeJS.
                                        </div>
                                        <strong>Outcome:</strong>
                                        <ul className="ms-4">
                                            <li className="mb-2">
                                                Successfully created a WordPress
                                                plugin that integrates with the
                                                NodeJS server, allowing users to
                                                interact with the AI for content
                                                generation within the existing
                                                WordPress environment.
                                            </li>
                                            <li className="mb-2">
                                                Developed and deployed the
                                                NodeJS server to manage backend
                                                operations and facilitate secure
                                                communication with the WordPress
                                                platform.
                                            </li>
                                            <li className="mb-2">
                                                Ensured that the solution was
                                                scalable and secure, integrating
                                                comprehensive documentation
                                                through Swagger Express UI for
                                                API management.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="w-100 border mb-5"></div>
                                    <div className="wow" id="key-learnings">
                                        <h3 className="text-secondary">
                                            Key Learnings and Insights
                                        </h3>
                                        <h4>Skills Acquired:</h4>
                                        <ul className="ms-4">
                                            <li className="mb-2">
                                                <strong>
                                                    Prompt Engineering:
                                                </strong>{" "}
                                                Gained proficiency in designing
                                                effective prompts for LLMs to
                                                ensure that AI-generated content
                                                aligns with specific client
                                                needs and reflects unique
                                                voices.
                                            </li>
                                            <li className="mb-2">
                                                <strong>
                                                    Node.js Development:
                                                </strong>{" "}
                                                Enhanced expertise in
                                                server-side development with
                                                Node.js, including building
                                                scalable backend systems,
                                                handling asynchronous
                                                operations, and integrating with
                                                existing platforms like
                                                WordPress.
                                            </li>
                                            <li className="mb-2">
                                                <strong>API Security:</strong>{" "}
                                                Developed a strong understanding
                                                of API security best practices,
                                                including implementing
                                                middleware for secure
                                                communication, managing API
                                                keys, and configuring CORS
                                                policies.
                                            </li>
                                        </ul>

                                        <h4>Challenges Overcome:</h4>
                                        <ul className="ms-4">
                                            <li className="mb-2">
                                                <strong>
                                                    Integration with Existing
                                                    Systems:
                                                </strong>{" "}
                                                Faced the challenge of
                                                integrating a new Node.js server
                                                with an existing WordPress
                                                platform. To address this, I
                                                designed a WordPress plugin and
                                                implemented a secure
                                                communication channel between
                                                WordPress and Node.js, ensuring
                                                seamless functionality and user
                                                experience.
                                            </li>
                                            <li className="mb-2">
                                                <strong>
                                                    Security and Scalability:
                                                </strong>{" "}
                                                Encountered difficulties in
                                                ensuring both security and
                                                scalability of the solution. I
                                                addressed these by implementing
                                                comprehensive security measures,
                                                such as middleware for API key
                                                validation and CORS
                                                configurations, and by ensuring
                                                that the Node.js server was
                                                scalable to accommodate future
                                                growth.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div
                                    className="col-lg-4 sidebar sticky-top"
                                    style={{
                                        position: "sticky",
                                        top: "4rem",
                                        zIndex: "1000",
                                        height: "calc(100vh - 4rem)",
                                    }}
                                >
                                    <div className="card shadow-sm">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Table of Contents
                                            </h5>
                                            <nav id="navbar1">
                                                <ul className="nav nav-pills">
                                                    <li className="nav-item">
                                                        <ScrollTo
                                                            className="nav-link"
                                                            smooth="easeInOutQuint"
                                                            duration={
                                                                scrollDuration
                                                            }
                                                            style={{
                                                                cursor: "pointer",
                                                            }}
                                                            activeClass="active"
                                                            spy
                                                            to="project-1"
                                                            onClick={e => {
                                                                e.preventDefault()
                                                            }}
                                                            offset={-100}
                                                        >
                                                            Project 1: Designing
                                                            a Testing Method for
                                                            LLMs
                                                        </ScrollTo>
                                                    </li>
                                                    <li className="nav-item">
                                                        <ScrollTo
                                                            className="nav-link"
                                                            smooth="easeInOutQuint"
                                                            duration={
                                                                scrollDuration
                                                            }
                                                            style={{
                                                                cursor: "pointer",
                                                            }}
                                                            activeClass="active"
                                                            spy
                                                            to="project-2"
                                                            onClick={e => {
                                                                e.preventDefault()
                                                            }}
                                                            offset={-100}
                                                        >
                                                            Project 2:
                                                            Implementing
                                                            Retrieval-Augmented
                                                            Generation (RAG)
                                                        </ScrollTo>
                                                    </li>
                                                    <li className="nav-item">
                                                        <ScrollTo
                                                            className="nav-link"
                                                            smooth="easeInOutQuint"
                                                            duration={
                                                                scrollDuration
                                                            }
                                                            style={{
                                                                cursor: "pointer",
                                                            }}
                                                            activeClass="active"
                                                            spy
                                                            to="project-3"
                                                            onClick={e => {
                                                                e.preventDefault()
                                                            }}
                                                            offset={-100}
                                                        >
                                                            Project 3:
                                                            Development of
                                                            Client App and
                                                            NodeJS Server
                                                        </ScrollTo>
                                                    </li>
                                                    <li className="nav-item">
                                                        <ScrollTo
                                                            className="nav-link"
                                                            smooth="easeInOutQuint"
                                                            duration={
                                                                scrollDuration
                                                            }
                                                            style={{
                                                                cursor: "pointer",
                                                            }}
                                                            activeClass="active"
                                                            spy
                                                            to="key-learnings"
                                                            onClick={e => {
                                                                e.preventDefault()
                                                            }}
                                                            offset={-100}
                                                        >
                                                            Key Learnings and
                                                            Insights
                                                        </ScrollTo>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Enlightenly
