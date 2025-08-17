import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FeaturesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const features = [
    {
      id: 1,
      title: "Daily Sunshine",
      description: "Personalized daily messages",
      icon: "/assets/features/1.svg",
      bgColor: "bg-[#F8F2E1]",
    },
    {
      id: 2,
      title: "Guided Journaling",
      description: "Tailored prompts that adapt to inputs",
      icon: "/assets/features/2.svg",
      bgColor: "bg-[#F8F2E1]",
    },
    {
      id: 3,
      title: "Practices",
      description: "Custom daily routines, reminders, with /Apple Health",
      icon: "/assets/features/3.svg",
      bgColor: "bg-[#F8F2E1]",
    },
    {
      id: 4,
      title: "Support Groups",
      description: "Find comfort in a caring community",
      icon: "/assets/features/4.svg",
      bgColor: "bg-[#F8F2E1]",
    },
    {
      id: 5,
      title: "Resources",
      description: "Rich library of content to support your journey",
      icon: "/assets/features/5.svg",
      bgColor: "bg-[#F8F2E1]",
    },
    
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className=" sm:mb-20">
      <div className="container mx-auto px-6">
        {/* Features Title */}
       
          <h2 className="text-center text-4xl font-david-libre font-bold text-primaryDark py-3 mb-10">
            Features
          </h2>
       

        {/* Mobile Carousel View */}
        <div className="md:hidden relative px-8">
          <div className="flex justify-center">
            {/* Left Navigation Button */}
            <button
              onClick={handlePrevious}
              className="absolute -left-3 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg"
              aria-label="Previous feature"
            >
              <ChevronLeft className="w-5 h-5 text-[#4B7C6C]" />
            </button>

            {/* Right Navigation Button */}
            <button
              onClick={handleNext}
              className="absolute -right-3 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg"
              aria-label="Next feature"
            >
              <ChevronRight className="w-5 h-5 text-[#4B7C6C]" />
            </button>

            {/* Single Card Display */}
            <div className="bg-white rounded-2xl p-6 h-72 shadow-[#00000012] w-full max-w-sm mx-auto">
              {/* Icon */}
              <div
                className={`w-16 h-16 ${features[currentIndex].bgColor} rounded-full flex items-center justify-center mb-4 mx-auto`}
              >
                <img
                  src={features[currentIndex].icon}
                  alt={features[currentIndex].title}
                  className="w-8 h-8"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-extrabold font-manrope text-primaryDark text-center mb-3">
                {features[currentIndex].title}
              </h3>

              {/* Description */}
              <p className="text-primaryDark font-manrope text-center text-[16px] leading-relaxed">
                {features[currentIndex].description}
              </p>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[#4B7C6C]' : 'bg-gray-300'
                }`}
                aria-label={`Go to feature ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:block max-w-4xl mx-auto">
          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-8 mb-8">
            {features.slice(0, 3).map((feature) => (
              <div
                key={feature.id}
                className="bg-white rounded-2xl p-6 h-72 shadow-[#00000012] w-72 flex-shrink-0 mx-auto"
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

          {/* Second row - 2 cards centered */}
          <div className="flex justify-center gap-6">
            {features.slice(3, 5).map((feature) => (
              <div
                key={feature.id}
                className="bg-white rounded-2xl p-6 h-72 shadow-[#00000012] w-72 flex-shrink-0"
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
    </div>
  );
};

export default FeaturesSection;