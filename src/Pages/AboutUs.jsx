import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ResourcesSection from "../Components/Main/ResourcesSection";
import TestimonialsSection from "../Components/Main/TestimonialSection";

function AboutUs() {
  return (
    <>
      <div className="min-h-screen bg-custom-page-gradient">
        <Header />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
          <div className="text-center ">
            <h1 className="text-3xl md:text-6xl font-medium text-primaryDark font-david-libre mb-6">
              The Story Behind MySunlight
            </h1>
          </div>

          {/* The Cell */}
          <div className="grid md:grid-cols-2 max-w-5xl mx-auto gap-12 items-center mt-16 bg-white rounded-3xl p-8">
            <div className="flex justify-center">
              <img
                src="/assets/thecell.png"
                alt="the cell"
                className="w-full max-w-md  rounded-xl"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl sm:text-5xl font-bold font-david-libre text-primaryDark mb-4">
                The Cell
              </h1>
              <p className="text-primaryDark font-manrope mb-4 text-lg">
                My brother-in-law was gone. He was only 23. It was so unexpected
                and tragic. My wife was devastated and we just couldn't make
                sense of it.
              </p>
            </div>
          </div>

          {/* The Empty Space */}
          <div className="grid md:grid-cols-2 max-w-5xl mx-auto gap-12 items-center mt-16 bg-white rounded-3xl p-8">
            <div className="text-center md:text-left order-2 md:order-1">
              <h1 className="text-3xl sm:text-5xl font-bold font-david-libre text-primaryDark mb-4">
                The Empty Space
              </h1>
              <p className="text-primaryDark font-manrope mb-4 text-lg">
                Everyone tried to be there for her, but no one could fully reach
                her or understand. It was like she was surrounded by people she
                loved... but still felt so alone.
              </p>
            </div>

            <div className="flex justify-center order-1 md:order-2">
              <img
                src="/assets/Alone.png"
                alt="The Empty Space"
                className="w-full max-w-md rounded-tl-[8rem] rounded-xl "
              />
            </div>
          </div>

          {/* Funeral */}
          <div className="grid md:grid-cols-2 max-w-5xl mx-auto gap-12 items-center mt-16 bg-white rounded-3xl p-8">
            <div className="flex justify-center">
              <img
                src="/assets/leaving.png"
                alt="Funeral"
                className="w-full max-w-md rounded-tr-[8rem] rounded-xl"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl sm:text-5xl font-bold font-david-libre text-primaryDark mb-4">
                Leaving the Funeral
              </h1>
              <p className="text-primaryDark font-manrope mb-4 text-lg">
                After the funeral, we stepped outside. It was a cold day, with
                the sky heavy with clouds.
              </p>
            </div>
          </div>

          {/* The Movement */}
          <div className="grid md:grid-cols-2 max-w-5xl mx-auto gap-12 items-center mt-16 bg-white rounded-3xl p-8">
            <div className="text-center md:text-left order-2 md:order-1">
              <h1 className="text-3xl sm:text-5xl font-bold font-david-libre text-primaryDark mb-4">
                The Moment
              </h1>
              <p className="text-primaryDark font-manrope mb-4 text-lg">
                But then... the clouds parted and the sunlight hit us. It felt
                like her brother was giving us hope and saying 'I'm still here.
                Keep going."
              </p>
            </div>

            <div className="flex justify-center order-1 md:order-2">
              <img
                src="/assets/movement.png"
                alt="The Movement"
                className="w-full max-w-md rounded-tl-[8rem] rounded-xl "
              />
            </div>
          </div>

          {/* Our Why */}
          <div className="grid md:grid-cols-2 max-w-5xl mx-auto gap-12 items-center mt-16 bg-white rounded-3xl p-8">
            <div className="flex justify-center">
              <img
                src="/assets/After.png"
                alt="After"
                className="w-full max-w-md  rounded-xl"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl sm:text-5xl font-bold font-david-libre text-primaryDark mb-4">
                Our Why
              </h1>
              <p className="text-primaryDark font-manrope mb-4 text-lg">
                That moment became our anchor. Our reminder that even in grief,
                there is light. That is why we created MySunlight - to help
                others find their sunshine, too.
              </p>
            </div>
          </div>


          {/*Backed Support  */}
           <div className="grid md:grid-cols-2 max-w-5xl mx-auto gap-12 items-center mt-16 bg-white rounded-3xl p-8">
            <div className="text-center md:text-left order-2 md:order-1">
              <h1 className="text-3xl sm:text-5xl font-bold font-david-libre text-primaryDark mb-4">
                Evidence-Backed Support
              </h1>
              <p className="text-primaryDark font-manrope mb-4 text-lg">
                MySunlight combines cutting-edge research with compassionate care. Our platform is built on evidence-based practices and guided by mental health professionals to ensure you receive the highest quality support.
              </p>
            </div>

            <div className="flex justify-center order-1 md:order-2">
              <img
                src="/assets/backed.png"
                alt="Backed Support"
                className="w-full max-w-md rounded-tl-[8rem] rounded-xl "
              />
            </div>
          </div>

        </div>

        {/* Resources */}
        <ResourcesSection />

        {/* Testimonials */}
        <TestimonialsSection />
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;