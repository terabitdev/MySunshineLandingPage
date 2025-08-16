import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
  };
  
  return (
    <div className="h-14 md:h-72 relative">
      <nav className="absolute top-20 left-0 right-0 z-10 max-w-7xl mx-auto bg-[#FFFFFFAD]  rounded-lg">
        <div className="max-w-7xl mx-auto px-6 py-1">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center justify-center  cursor-pointer" onClick={handleLogoClick}>
              <img
                src="/assets/navbarlogo.svg"
                alt="MySunlight Logo"
                className="h-10 w-10 mr-1"
              />
              <span className="text-xl font-manrope font-semibold text-primaryDark">MySunlight</span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline font-manrope space-x-8">
                <a href="/about" className="text-primaryDark px-3 py-2 text-sm font-semibold ">
                  About Us
                </a>
                <a href="/resources" className="text-primaryDark px-3 py-2 text-sm font-semibold ">
                  Resources
                </a>
                <a href="/terms" className="text-primaryDark px-3 py-2 text-sm font-semibold ">
                  Terms & Conditions
                </a>
                <a href="/privacy" className="text-primaryDark px-3 py-2 text-sm font-semibold ">
                  Privacy Policy
                </a>
              </div>
            </div>
            
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-orange-500 focus:outline-none focus:text-orange-500">
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <div className="relative w-full">
        <img
          src="/assets/bgimg.png"
          alt="Background"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}

export default Header;
