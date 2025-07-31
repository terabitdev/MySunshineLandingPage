import React from "react";
import { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import StoryBehindModal from "../../Modal/StoryBehindModal";
const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: "Daily Sunshine",
      description: "Personalized daily quotes based on user's mood",
      icon: "/assets/features/1.svg",
      bgColor: "bg-[#F8F2E1]",
    },
    {
      id: 2,
      title: "Guided Journaling",
      description: "Prompts + mood tracking + sentiment analysis",
      icon: "/assets/features/2.svg",
      bgColor: "bg-[#F8F2E1]",
    },
    {
      id: 3,
      title: "Self-Care Plans",
      description: "Custom daily routines, reminders, and assessments",
      icon: "/assets/features/3.svg",
      bgColor: "bg-[#F8F2E1]",
    },
    {
      id: 4,
      title: "Professional Support",
      description: "Therapist directory + book sessions directly",
      icon: "/assets/features/4.svg",
      bgColor: "bg-[#F8F2E1]",
    },
    {
      id: 5,
      title: "Community Forums",
      description: "Safe spaces to get help and inspiration",
      icon: "/assets/features/5.svg",
      bgColor: "bg-[#F8F2E1]",
    },
    {
      id: 6,
      title: "Multimedia Resources",
      description: "Articles, meditations, videos, podcasts",
      icon: "/assets/features/6.svg",
      bgColor: "bg-[#F8F2E1]",
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        {/* Features Title */}
        <div
          className="max-w-[18rem] mx-auto bg-white rounded-2xl bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/assets/After1.png)" }}
        >
          <h2 className="text-center text-3xl font-manrope font-extrabold text-primaryDark py-3 mb-10">
            Features
          </h2>
        </div>

        {/* Features Grid */}
        <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl p-6 h-72 shadow-[#00000012]  w-72 flex-shrink-0"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mb-4 mx-auto`}
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-8 h-8"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-extrabold font-manrope text-primaryDark text-center mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-primaryDark font-manrope text-center text-[16px] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const EmpatheticDesignSection = () => {
  const designFeatures = [
    "Calming pastel palette",
    "Minimalistic design, accessible fonts",
    "Voice journaling, dynamic mood check-ins",
    "Encouraging feedback loops and milestone highlights",
  ];

  return (
    <div className="bg-white py-16 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center font-manrope">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-extrabold  text-primaryDark leading-tight">
                <span className="text-[#4B7C6C]">Empathetic</span> Design
                <br />
                with You in Mind
              </h2>

              <div className="space-y-4">
                {designFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <img src="/assets/li.svg" alt="bullet point" className="w-4 h-4 mt-2 flex-shrink-0" />
                    <p className="text-[#0C1311] text-lg leading-relaxed">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Illustration */}

            <div className="w-full">
              <img
                src="/assets/sunshine.png"
                alt="Sunrise with clouds illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "I didn't know how to grieve until I found MySunshine. It felt like someone truly understood.",
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

const MySunshineLanding = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen ">
      {/* Header Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-medium font-david-libre text-primaryDark mb-4">
            MySunshine - Helping You
            <br />
            Heal, One Day at a Time
          </h1>
          <p className="text-lg md:text-xl text-primaryDark max-w-2xl mx-auto leading-relaxed">
            A digital platform for grief support through journaling,
            <br />
            self-care, therapist access & community.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Content */}
              <div className="p-8 md:p-12 font-manrope flex flex-col justify-center">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-5xl font-extrabold text-primaryDark mb-2">
                    The Story Behind
                  </h2>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#F39770] mb-4">
                    MySunshine
                  </h3>
                  <p className="text-3xl font-semibold text-primaryDark mb-6">
                    Inspired by Personal Loss
                  </p>
                </div>

                <div className="mb-8 ">
                  <p className="text-primaryDark text-lg font-medium leading-relaxed mb-4">
                    <span className="font-bold">MySunshine</span> is dedicated
                    to my wife, Meredith, who lost her brother Michael. On the
                    day of his funeral, she said the sun way to survive. Ever
                    since, whenever we see the sun shining, it feels like
                    Michael's embrace of hope.
                  </p>
                </div>

                <button 
                  onClick={openModal}
                  className="bg-[#4B7C6C] text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200 self-start"
                >
                  Read Full Story
                </button>
              </div>

              {/* Right Illustration */}
              <div className="p-10 rounded-tl-3xl">
                <img
                  src="/assets/After.png"
                  alt="Illustration"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-6">
        {/* Problem & Solution Section */}
        <div className="mb-20 font-manrope">
          <div className="bg-[#FAFAFA]  text-center py-4 rounded-full md:rounded-b-none md:rounded-t-3xl max-w-xs md:max-w-sm mx-auto ">
            <h2 className="text-center text-2xl md:text-3xl font-semibold md:font-extrabold text-primaryDark ">
              The Problem & Solution
            </h2>
          </div>

          <div className=" bg-[#FAFAFA] border p-8 rounded-3xl flex flex-col md:flex-row gap-6 max-w-7xl mx-auto">
            {/* The Problem Card */}
            <div className="bg-[#FCE3D2] border border-[#8F92913D] rounded-2xl p-8 md:p-0 md:px-8 md:py-20 flex-1">
              <h3 className="text-xl font-bold md:font-extrabold md:text-3xl text-[#F39770] mb-4">
                The Problem
              </h3>
              <p className="text-primaryDark text-lg md:font-medium leading-relaxed">
                Grief is universal yet deeply personal, and often leaves people
                feeling isolated. <br />{" "}
                <h1 className="mt-5">
                  Traditional support systems fail to meet modern needs.
                </h1>
              </p>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-px bg-[#8F92913D] self-stretch -my-8"></div>

            {/* Our Solution Card */}
            <div className="bg-[#4B7C6C2E] border border-[#8F92913D]  rounded-2xl p-8 md:p-0 md:px-8 md:py-20 flex-1">
              <h3 className="text-xl font-bold md:font-extrabold md:text-3xl text-[#4B7C6C] mb-4">
                Our Solution:
              </h3>
              <p className="text-primaryDark text-lg md:font-medium leading-relaxed">
                A holistic app combining journaling, self-care plans, therapy
                access & community, tailored with AI.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Who It's For Section - Full Width */}
      <div className="w-full">
        <div className="bg-white w-full">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="flex flex-col font-manrope justify-center px-6 md:px-12 py-12">
              <h2 className="text-3xl md:text-5xl font-extrabold text-primaryDark mb-4">
                Who It's For
              </h2>

              <h3 className="text-xl md:text-3xl font-semibold text-primaryDark mb-6">
                Designed for Gen Z and Millennials
                <br />
                (20-45 years old)
              </h3>

              <p className="text-primaryDark font-medium text-lg leading-relaxed">
                People experiencing loss, trauma, life transitions, anxiety, yet
                want an approach geared toward their age & tech-savvy lifestyle,
                and prefer community-based vs counseling therapy are ideal for
                this digital solution.
              </p>
            </div>

            {/* Right Illustration */}
            <div className="flex items-center justify-center">
              <img
                src="/assets/Alone.png"
                alt="Person illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <FeaturesSection />

      {/* Empathetic Design Section */}
      <EmpatheticDesignSection />
      
      {/* Testimonial Section */}
      <TestimonialSection />
      
      {/* Modal - Rendered as overlay */}
      {isModalOpen && <StoryBehindModal isOpen={isModalOpen} onClose={closeModal} />}
    </div>
  );
};

export default MySunshineLanding;
