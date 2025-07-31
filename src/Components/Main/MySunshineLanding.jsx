import React, { useState } from "react";
import StoryBehindModal from "../../Modal/StoryBehindModal";
import FeaturesSection from "./FeaturesSection";
import EmpatheticDesignSection from "./EmpatheticDesignSection";
import TestimonialSection from "./TestimonialSection";

const MySunshineLanding = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen ">
      {/* Header Section */}
      <div className="container mx-auto 2xl:mt-32 px-6 py-12">
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
