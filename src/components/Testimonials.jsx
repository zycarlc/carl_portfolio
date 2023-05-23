import React from "react";

import Slider from "react-slick";

const Testimonials = () => {
  const reviews = [
    {
      name: "Jay Shah",
      position: "Founder at Icomatic Pvt Ltd",
      src: "images/testimonial/client-sm-1.jpg",
      desc: "“Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure. simply dummy text of the printing and typesetting industry.”",
    },
    {
      name: "Patrick Cary",
      position: "Freelancer from USA",
      src: "images/testimonial/client-sm-2.jpg",
      desc: " “I am happy Working with printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam persequeris essent possim iriure. simply dummy text of the printing and typesetting industry.”",
    },
    {
      name: "Dennis Jacques",
      position: "Noon Inc",
      src: "images/testimonial/client-sm-3.jpg",
      desc: "“Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry.”",
    },
    {
      name: "Chris Tom",
      position: "User from UK",
      src: "images/testimonial/client-sm-4.jpg",
      desc: "“I have used them twice now. Good rates, very efficient service and priced simply dummy text of the printing and typesetting industry quidam interesset his et. simply dummy text of the printing and typesetting industry. Excellent.”",
    },
  ];

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <i className="fa fa-chevron-left"></i>
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <i className="fa fa-chevron-right"></i>
    </button>
  );

  var settings = {
    dots: true,
    arrows: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
  };

  return (
    <section id="testimonial" className="section bg-secondary">
      <div className="container">
        {/* Heading */}
        <p className=" text-center mb-2 wow fadeIn">
          <span className="bg-primary text-dark px-2">Client Speak</span>
        </p>
        <h2 className="text-10 fw-600 text-white text-center mb-5 wow fadeIn">
          What Some of my Clients Say
        </h2>
        {/* Heading end*/}
        <div className="row">
          <div className="col-lg-9 mx-auto wow fadeInUp">
            <Slider {...settings}>
              {reviews.length > 0 &&
                reviews.map((review, index) => (
                  <div className="item text-center px-5" key={index}>
                    {" "}
                    <span className="text-9 text-primary">
                      <i className="fa fa-quote-start" />
                    </span>
                    <p className="text-5 text-white">{review.desc}</p>
                    <img
                      className="img-fluid d-inline-block w-auto rounded-circle shadow"
                      src={review.src}
                      alt={review.name}
                    />{" "}
                    <strong className="d-block text-3 fw-600 text-white">
                      {review.name}
                    </strong>{" "}
                    <span className="text-light">{review.position}</span>{" "}
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
