import React from "react";

function Footer() {
  return (
    <div className="bg-bg-primary text-center pt-20 pb-6">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex items-center space-x-4 mb-12">
          <img src="/assets/Logo.svg" alt="Logo" className="h-16" />
          <h2 className="text-[#150A02] font-manrope font-semibold  text-3xl">
            MySunlight
          </h2>
        </div>
        <div className="flex items-center font-manrope space-x-4 mt-2">
          <p className="text-[#0C130F] font-semibold text-[16px] ">
            Terms and Conditions
          </p>
          <div className="w-px h-5 bg-[#0000002E]"></div>
          <p className="text-[#0C130F] font-semibold text-[16px]">Articles</p>
        </div>
        <div className="flex items-center font-manrope space-x-4 mt-10">
          <img src="/assets/playstore.svg" className="h-10" alt="playstore" />
          <img src="/assets/applestore.svg" className="h-10" alt="appstore" />
        </div>

        <div className="w-full mt-10 pl-32">
          <div className="bg-[#8F92913D] w-full h-[2px]" />
        </div>

        <div className="flex items-center space-x-4 mt-10 mb-4">
          <div className="bg-white rounded-full p-3 ">
            <img
              src="/assets/instagram-logo.svg"
              className="h-6"
              alt="instagram"
            />
          </div>

          <div className="bg-white  rounded-full p-3 ">
            <img src="/assets/x-logo.svg" className="h-6" alt="twitter" />
          </div>
          <div className="bg-white  rounded-full p-3 ">
            <img src="/assets/youtube-logo.svg" className="h-6" alt="youtube" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
