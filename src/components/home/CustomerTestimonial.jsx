// import React from 'react';

// const CustomerTestimonials = () => {
//   return (
//     <section className="bg-[#f7f7fD] py-12">
//       <div className="container mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           {/* Image */}
//           <div>
//             <img src="public\images\slider.webp" alt="Customer" className="w-full h-auto rounded-lg shadow-lg" />
//           </div>
//           {/* Testimonial */}
//           <div>
//             <blockquote className="text-lg font-light text-gray-700">
//               "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
//             </blockquote>
//             <p className="mt-4 text-gray-500">John Doe, CEO at Company</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CustomerTestimonials;


// import React from 'react';

// const CustomerTestimonials = () => {
//   return (
//     <section className="bg-[#f7f7fD] py-12">
//       <div className="container mx-auto">
//         <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">What Our Customers Say</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           {/* Image */}
//           <div>
//             <img src="/images/customer_image.jpg" alt="Customer" className="w-full h-auto rounded-lg shadow-lg" />
//           </div>
//           {/* Testimonial */}
//           <div>
//             <blockquote className="text-lg font-light text-gray-700">
//               "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
//             </blockquote>
//             <p className="mt-4 text-gray-500">John Doe, CEO at Company</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CustomerTestimonials;

// import React from 'react';

// const CustomerTestimonials = () => {
//   return (
//     <section className="bg-[#f7f7fD] py-12">
//       <div className="container mx-auto">

//         <div className="grid grid-cols-1 md:grid-cols-2  items-center">
//           {/* Image */}
//           {/* <figure></figure> */}
//           <div>
//             <img src="/images/sliderpic.webp" alt="Customer" className="w-[453] h-[585]" />
//           </div>
//           {/* Testimonial */}
//           <div>
//             <h3 className="text-lg font-bold text-gray-800">What Our Customers Say</h3>
//             <blockquote className="text-lg font-light text-gray-700 mt-4">
//               "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
//             </blockquote>
//             <p className="mt-4 text-gray-500">John Doe, CEO at Company</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CustomerTestimonials;

// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const CustomerTestimonials = () => {
//   const testimonies = [
//     {
//       quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
//       author: "John Doe",
//       company: "Company 1"
//     },
//     {
//       quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
//       author: "Jane Smith",
//       company: "Company 2"
//     },
//     {
//       quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
//       author: "James Brown",
//       company: "Company 3"
//     }
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };

//   return (
//     <section className="bg-[#f7f7fD] py-12">
//       <div className="container mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2">
//           <div>
//             {/* Image */}
//             <img src="/images/sliderpic.webp" alt="Customer" className="w-[453] h-[585]" />
//           </div>
//           <div>
//             {/* Testimonies Carousel */}
//             <Slider {...settings}>
//               {testimonies.map((testimonial, index) => (
//                 <div key={index}>
//                   <h3 className="text-lg font-bold text-gray-800">What Our Customers Say</h3>
//                   <blockquote className="text-lg font-light text-gray-700 mt-4">
//                     {testimonial.quote}
//                   </blockquote>
//                   <p className="mt-4 text-gray-500">{testimonial.author}, CEO at {testimonial.company}</p>
//                 </div>
//               ))}
//             </Slider>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CustomerTestimonials;

// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './CustomerTestimonials.css'; // Import your CSS file for styling

// const CustomerTestimonials = () => {
//   const testimonies = [
//     {
//       quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
//       author: "John Doe",
//       company: "Company 1"
//     },
//     {
//       quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
//       author: "Jane Smith",
//       company: "Company 2"
//     },
//     {
//       quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
//       author: "James Brown",
//       company: "Company 3"
//     }
//   ];
  
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     appendDots: dots => (
//       <div>
//         <ul style={{ margin: "0px" }}> {dots} </ul>
//       </div>
//     )
//   };
  
  
  

//   return (
//     <section className="bg-[#f7f7fD] py-12">
//       <div className="container mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2">
//           <div>
//             {/* Image */}
//             <img src="/images/sliderpic.webp" alt="Customer" className="w-[453] h-[585]" />
//           </div>
//           <div>
//             {/* Testimonies Carousel */}
//             <Slider {...settings}>
//               {testimonies.map((testimonial, index) => (
//                 <div key={index} className="testimonial-slide">
//                   <h3 className="text-lg font-bold text-yellow-500">What Our Customers Say</h3>
//                   <blockquote className="text-lg font-light text-yellow-700 mt-4">
//                     {testimonial.quote}
//                   </blockquote>
//                   <p className="mt-4 text-yellow-500">{testimonial.author}, CEO at {testimonial.company}</p>
//                 </div>
//               ))}
//             </Slider>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CustomerTestimonials;


import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: dots => (
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <ul className="flex items-center space-x-3">{dots}</ul>
      </div>
    )
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            {/* Image */}
            <img src="/images/sliderpic.webp" alt="Customer" className="w-[447] h-[" />
          </div>
          <div className="relative">
            {/* Testimonies Carousel */}
            <Slider {...settings} className="w-full">
              {testimonies.map((testimonial, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">What Our Customers Say</h3>
                  <blockquote className="text-lg font-light text-gray-700 mb-2">
                    {testimonial.quote}
                  </blockquote>
                  <p className="text-gray-500">{testimonial.author}, CEO at {testimonial.company}</p>
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
