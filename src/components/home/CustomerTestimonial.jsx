import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import heart from "../../assets/heart.png";

const CustomerTestimonials = () => {
  const testimonies = [
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      author: "John Doe",
      company: "Company 1"
    },
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      author: "Jane Smith",
      company: "Company 2"
    },
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      author: "James Brown",
      company: "Company 3"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    beforeChange: (current, next) => setCurrentSlide(next), // Update currentSlide on change
    customPaging: i => (
      <div
        style={{
          width: i === currentSlide ? "20px" : "10px",
          height: "13px",
          borderRadius: "45%",
          backgroundColor: i === currentSlide ? "#FCB225" : "#FFFFFF", // Change the colors as needed
          transition: "background-color 0.3s, width 0.3s", // Smooth transition

        }}
      ></div>
    ),
    appendDots: dots => (
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <ul className="flex items-center">{dots}</ul>
      </div>
    )
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div>
            {/* Image */}
            <img src={heart} alt="Customer" className="w-full h-auto md:w-[500px] mx-auto" />
          </div>
          <div className="md:pl-8">
            {/* Testimonies Carousel */}
            <h3 className="text-lg font-bold text-gray-800 mb-2">What Our Customers Say</h3>

            <Slider {...settings} className="w-full">
              {testimonies.map((testimonial, index) => (
                <div key={index} className="">
                  <blockquote className="text-lg font-light text-gray-700 mb-2">
                    {testimonial.quote}
                  </blockquote>
                  <p className="text-gray-500 font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.company}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
