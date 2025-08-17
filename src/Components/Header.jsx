import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleLogoClick = () => {
    navigate("/");
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div className="h-14 md:h-72 relative">
      <nav className="absolute max-w-[22rem] sm:max-w-7xl top-10 md:top-20 left-0 right-0 z-10  mx-auto bg-[#FFFFFFAD] rounded-lg">
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
              <button 
                onClick={toggleMenu}
                className="text-gray-700 hover:text-orange-500 focus:outline-none focus:text-orange-500"
              >
                {isMenuOpen ? (
                  <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Dark Overlay */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-40 z-10"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      
      {/* Mobile Menu - Positioned separately */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[7rem] left-0 right-0 z-20 mx-6">
          <div className="bg-white rounded-lg py-2 shadow-xl">
            <a 
              href="/about" 
              className="block px-6 py-3 text-sm font-semibold text-primaryDark hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href="/resources" 
              className="block px-6 py-3 text-sm font-semibold text-primaryDark hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </a>
            <a 
              href="/terms" 
              className="block px-6 py-3 text-sm font-semibold text-primaryDark hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Terms & Conditions
            </a>
            <a 
              href="/privacy" 
              className="block px-6 py-3 text-sm font-semibold text-primaryDark hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Privacy Policy
            </a>
          </div>
        </div>
      )}
      
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
