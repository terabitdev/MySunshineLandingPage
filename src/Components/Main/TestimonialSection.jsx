import React, { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "I didn't know how to grieve until I found MySunlight. It felt like someone truly understood.",
      name: "Jaime Richard",
      role: "Designer at Oracle"
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [clickedButton, setClickedButton] = useState(null);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
    setClickedButton('next');
    setTimeout(() => setClickedButton(null), 300);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    setClickedButton('prev');
    setTimeout(() => setClickedButton(null), 300);
  };

  const current = testimonials[currentTestimonial];

  return (
    <div className="bg-[#F39770] py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto relative">
          
          {/* Quote Icon */}
          <div className="mb-8">
            <img 
              src="/assets/quoteicon.svg" 
              alt="Quote icon"
              className="w-12 h-12 opacity-80"
            />
          </div>

          {/* Testimonial Content */}
          <div className="text-left mb-12">
            <blockquote className="text-xl md:text-4xl text-white font-manrope font-normal leading-relaxed mb-8">
              {current.quote}
            </blockquote>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-8">
           {/* Author Info */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img 
                  src="/assets/Avatar.png" 
                  alt="User avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left font-manrope">
                <p className="text-white font-semibold text-lg">
                  {current.name}
                </p>
                <p className="text-white font-normal text-opacity-80 text-sm">
                  {current.role}
                </p>
              </div>
            </div>

          {/* Navigation Arrows */}
          <div className="flex  space-x-2">
            <button
              onClick={prevTestimonial}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                clickedButton === 'prev' 
                  ? 'bg-white' 
                  : 'bg-white bg-opacity-20 hover:bg-opacity-30'
              }`}
              aria-label="Previous testimonial"
            >
              <GoArrowLeft className={`w-5 h-5 transition-colors duration-300 ${
                clickedButton === 'prev' ? 'text-[#F39770]' : 'text-white'
              }`} />
            </button>
            
            <button
              onClick={nextTestimonial}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                clickedButton === 'next' 
                  ? 'bg-white' 
                  : 'bg-white bg-opacity-20 hover:bg-opacity-30'
              }`}
              aria-label="Next testimonial"
            >
              <GoArrowRight className={`w-5 h-5 transition-colors duration-300 ${
                clickedButton === 'next' ? 'text-[#F39770]' : 'text-white'
              }`} />
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;