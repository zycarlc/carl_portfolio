import React from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQs = () => {
  const faqsData = [
    {
      question: "What is Callum?",
      answer:
        "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet.",
    },
    {
      question: "How Can I Help You?",
      answer:
        "Iisque Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. <br /> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.",
    },
    {
      question: "Simple process for workflow?",
      answer:
        "Iisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet.",
    },
    {
      question: "Is Callum a Multi-purpose template?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
    },
    {
      question: "Why responsive one page template?",
      answer:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.",
    },
  ];

  return (
    <section id="faq" className="section bg-light">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-6 order-1 order-lg-0 wow fadeInUp">
            {/* Heading */}
            <p className="text-center text-lg-start mb-2">
              <span className="bg-primary text-dark px-2">FAQ</span>
            </p>
            <h2 className="text-10 fw-600 text-center text-lg-start mb-5">
              Have any questions?
            </h2>
            {/* Heading end*/}

            <Accordion flush defaultActiveKey="0">
              {faqsData.length > 0 &&
                faqsData.map((faq, index) => (
                  <Accordion.Item eventKey={index} key={index}>
                    <Accordion.Header>{faq.question}</Accordion.Header>
                    <Accordion.Body
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    ></Accordion.Body>
                  </Accordion.Item>
                ))}
            </Accordion>
          </div>
          <div
            className="col-lg-6 d-flex align-items-center justify-content-center order-0 order-lg-1 wow fadeIn"
            data-wow-delay="1s"
          >
            {" "}
            <img
              className="img-fluid"
              src="images/faq.png"
              title="FAQ"
              alt="faq"
            />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
