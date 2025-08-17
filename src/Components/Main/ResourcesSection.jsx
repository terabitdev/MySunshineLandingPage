import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";

const ResourcesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const navigate = useNavigate();

  const resources = [
    {
      id: 1,
      title: "Understanding Grief: It's Not One-Size-Fits-All",
      description: "This article explores the many different grief we all face, reminding readers that there's no proper or wrong way of grieving loss.",
      image: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=400&h=250&fit=crop",
      caption: "Loved one Loss",
      category: "Gentle"
    },
    {
      id: 2,
      title: "Micro-Moments of Healing Small Habits That Make",
      description: "This article discusses the many different grief we all face, reminding readers that there's no proper or wrong way of grieving loss.",
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=250&fit=crop",
      caption: "Self-Care Tips",
      category: "Supportive"
    },
    {
      id: 3,
      title: "Building Resilience Through Community Support",
      description: "Learn how connecting with others can strengthen your emotional well-being and provide lasting support through difficult times.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      caption: "Community",
      category: "Wellness"
    },
    {
      id: 4,
      title: "Mindfulness Practices for Daily Peace",
      description: "Discover simple mindfulness techniques that can bring calm and clarity to your everyday routine.",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=250&fit=crop",
      caption: "Mindfulness",
      category: "Mindfulness"
    },
    {
      id: 5,
      title: "Professional Guidance When You Need It",
      description: "Understanding when to seek professional help and how to find the right support for your mental health journey.",
      image: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=400&h=250&fit=crop",
      caption: "Professional Help",
      category: "Self-Care"
    },
    {
      id: 6,
      title: "Creating Healthy Boundaries",
      description: "Learn to set and maintain healthy boundaries that protect your well-being while nurturing meaningful relationships.",
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=250&fit=crop",
      caption: "Boundaries",
      category: "Zero-judgment"
    }
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? resources.length - 3 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= resources.length - 3 ? 0 : prev + 1));
  };

  const handleMobilePrevious = () => {
    setMobileIndex((prev) => (prev === 0 ? resources.length - 1 : prev - 1));
  };

  const handleMobileNext = () => {
    setMobileIndex((prev) => (prev === resources.length - 1 ? 0 : prev + 1));
  };

  const visibleResources = resources.slice(currentIndex, currentIndex + 3);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-david-libre font-bold text-primaryDark mb-4">
            Resources
          </h2>
          <p className="text-gray-600 font-manrope text-lg max-w-2xl mx-auto">
            Explore our curated collection of articles, guides, and tools designed to support your mental health journey.
          </p>
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden relative px-8">
          <div className="flex justify-center">
            {/* Left Navigation Button */}
            <button
              onClick={handleMobilePrevious}
              className="absolute -left-3 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg"
              aria-label="Previous resource"
            >
              <ChevronLeft className="w-5 h-5 text-[#4B7C6C]" />
            </button>

            {/* Right Navigation Button */}
            <button
              onClick={handleMobileNext}
              className="absolute -right-3 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg"
              aria-label="Next resource"
            >
              <ChevronRight className="w-5 h-5 text-[#4B7C6C]" />
            </button>

            {/* Single Card Display */}
            <div
              onClick={() => navigate("/article-details")}
              className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow w-full max-w-sm mx-auto"
            >
              <div className="relative overflow-hidden mb-4">
                <img
                  src={resources[mobileIndex].image}
                  alt={resources[mobileIndex].title}
                  className="w-full h-72 object-cover rounded-lg"
                />
              </div>

              <div>
                <h3 className="text-xl font-manrope font-bold text-[#150A02] mb-3">
                  {resources[mobileIndex].title}
                </h3>
                <h4 className="flex items-center font-manrope text-lg uppercase font-semibold text-[#F39770] mb-3">
                  <img src="/assets/captionicon.svg" alt="caption" className='h-6 mr-2' />
                  {resources[mobileIndex].caption}
                </h4>
                <p className="font-manrope font-normal text-[#150A02] text-base mb-4 line-clamp-3">
                  {resources[mobileIndex].description}
                </p>
                <div className="flex items-center space-x-2">
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/article-details");
                    }}
                    className="text-[#4B7C6C] font-inter-tight text-base cursor-pointer hover:underline"
                  >
                    Learn More
                  </span>
                  <FaArrowRight className='text-[#4B7C6C]' size={14} />
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {resources.map((_, index) => (
              <button
                key={index}
                onClick={() => setMobileIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === mobileIndex ? 'bg-[#4B7C6C]' : 'bg-gray-300'
                }`}
                aria-label={`Go to resource ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Cards Container with Navigation */}
        <div className="hidden md:block relative max-w-6xl mx-auto">
          {/* Left Navigation Button */}
          <button
            onClick={handlePrevious}
            className="absolute -left-8 top-1/2  z-10 bg-[#E6E6E6] rounded-full p-3 shadow-lg "
            aria-label="Previous resources"
          >
            <ChevronLeft className="w-6 h-6 text-[#4B7C6C]" />
          </button>

          {/* Right Navigation Button */}
          <button
            onClick={handleNext}
            className="absolute -right-8 top-1/2  z-10 bg-[#E6E6E6] rounded-full p-3 shadow-lg "
            aria-label="Next resources"
          >
            <ChevronRight className="w-6 h-6 text-[#4B7C6C]" />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8">
            {visibleResources.map((resource) => (
              <div
                key={resource.id}
                onClick={() => navigate("/article-details")}
                className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow"
              >
                <div className="relative overflow-hidden mb-4">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-72 object-cover rounded-lg"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-manrope font-bold text-[#150A02] mb-3">
                    {resource.title}
                  </h3>
                  <h4 className="flex items-center font-manrope text-lg uppercase font-semibold text-[#F39770] mb-3">
                    <img src="/assets/captionicon.svg" alt="caption" className='h-6 mr-2' />
                    {resource.caption}
                  </h4>
                  <p className="font-manrope font-normal text-[#150A02] text-base mb-4 line-clamp-3">
                    {resource.description}
                  </p>
                  <div className="flex items-center space-x-2">
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate("/article-details");
                      }}
                      className="text-[#4B7C6C] font-inter-tight text-base cursor-pointer hover:underline"
                    >
                      Learn More
                    </span>
                    <FaArrowRight className='text-[#4B7C6C]' size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* See All Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate("/articles")}
            className="px-8 py-3 text-[#4B7C6C] font-manrope font-semibold rounded-lg  flex items-center gap-2"
          >
            See All
            <FaArrowRight className="text-[#4B7C6C]" size={16} />
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default ResourcesSection;