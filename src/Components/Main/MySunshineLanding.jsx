import React, { useState } from "react";
import StoryBehindModal from "../../Modal/StoryBehindModal";
import FeaturesSection from "./FeaturesSection";
import ResourcesSection from "./ResourcesSection";
import TestimonialSection from "./TestimonialSection";

const MySunlightLanding = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      {/* Header Section */}
      <div className="container mx-auto px-6 pt-8 pb-12">
        <div className="text-center mb-14 2xl:mt-20">

          <div className="flex items-center justify-center  cursor-pointer mb-5">
              <img
                src="/assets/navbarlogo.svg"
                alt="MySunlight Logo"
                className="h-24 w-24 mr-4"
              />
              <span className="text-7xl font-david-libre font-bold text-primaryDark">MySunlight</span>
            </div>

          <h1 className="text-xl md:text-4xl font-medium font-david-libre text-[#F39770] mb-4">
           Helping You
            Heal, One Day at a Time
          </h1>

          <div className="flex justify-center items-center font-manrope space-x-4 my-6">
            <img src="/assets/playstore.svg" className="h-14" alt="playstore" />
            <img src="/assets/applestore.svg" className="h-14" alt="appstore" />
          </div>

          <p className="text-lg md:text-xl text-primaryDark max-w-2xl mx-auto leading-relaxed">
            A digital platform for grief support through journaling,<br /> self-care routines & supportive community spaces.
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
                    MySunlight
                  </h3>
                  <p className="text-3xl font-semibold text-primaryDark mb-6">
                    Inspired by Personal Loss
                  </p>
                </div>

                <div className="mb-8 ">
                  <p className="text-primaryDark text-lg font-medium leading-relaxed mb-4">
                    MySunlight is a dedication to my wife, Khushboo, who lost her younger brother in late 2022. 
                  </p>

                  <p className="text-primaryDark text-lg font-medium leading-relaxed mb-4">
                    I watched as she navigated her grief - surrounded by so many, yet still feeling so alone. On the day of the funeral, we walked outside and watched as rain and clouds parted, giving way to sunshine.
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

   

      {/* Features Section */}
      <FeaturesSection />

      {/* Resources Section */}
      <ResourcesSection />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Modal - Rendered as overlay */}
      {isModalOpen && (
        <StoryBehindModal isOpen={isModalOpen} onClose={closeModal} />
      )}
    </div>
  );
};

export default MySunlightLanding;
