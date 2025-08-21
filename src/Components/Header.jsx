import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isMainPage = location.pathname === "/";
  
  const handleLogoClick = () => {
    navigate("/");
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };
  
  return (
    <div className={`${isMainPage ? 'h-14 md:h-48' : 'h-14'} relative`}>
      <nav className="absolute max-w-[22rem] sm:max-w-7xl top-10 md:top-10 left-0 right-0 z-10  mx-auto bg-[#FFFFFFAD] rounded-lg">
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
                <button 
                  onClick={() => handleNavClick('/about')} 
                  className={`px-3 py-2 text-sm font-semibold ${
                    isActiveLink('/about') 
                      ? 'text-[#F39770]' 
                      : 'text-primaryDark '
                  }`}
                >
                  About Us
                </button>
                <button 
                  onClick={() => handleNavClick('/articles')} 
                  className={`px-3 py-2 text-sm font-semibold ${
                    isActiveLink('/articles') 
                      ? 'text-[#F39770]' 
                      : 'text-primaryDark '
                  }`}
                >
                  Resources
                </button>
                <button 
                  onClick={() => handleNavClick('/terms-conditions')} 
                  className={`px-3 py-2 text-sm font-semibold ${
                    isActiveLink('/terms-conditions') 
                      ? 'text-[#F39770]' 
                      : 'text-primaryDark '
                  }`}
                >
                  Terms & Conditions
                </button>
                <button 
                  onClick={() => handleNavClick('/privacy-policy')} 
                  className={`px-3 py-2 text-sm font-semibold ${
                    isActiveLink('/privacy-policy') 
                      ? 'text-[#F39770]' 
                      : 'text-primaryDark '
                  }`}
                >
                  Privacy Policy
                </button>
              </div>
            </div>
            
            <div className="md:hidden">
              <button 
                onClick={toggleMenu}
                className="text-gray-700 focus:outline-none focus:text-orange-500"
              >
                {isMenuOpen ? (
                  <div className="h-6 w-6 flex items-center justify-center">
                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                ) : (
                  <div className="h-6 w-6">
                    <img className="h-full w-full" src="/assets/hamburger.svg" alt="hamburger" />
                  </div>
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
            <button 
              onClick={() => handleNavClick('/about')}
              className={`block w-full text-left px-6 py-3 text-sm font-semibold hover:bg-gray-100 ${
                isActiveLink('/about') ? 'text-[#F39770]' : 'text-primaryDark'
              }`}
            >
              About Us
            </button>
            <button 
              onClick={() => handleNavClick('/articles')}
              className={`block w-full text-left px-6 py-3 text-sm font-semibold hover:bg-gray-100 ${
                isActiveLink('/articles') ? 'text-[#F39770]' : 'text-primaryDark'
              }`}
            >
              Resources
            </button>
            <button 
              onClick={() => handleNavClick('/terms-conditions')}
              className={`block w-full text-left px-6 py-3 text-sm font-semibold hover:bg-gray-100 ${
                isActiveLink('/terms-conditions') ? 'text-[#F39770]' : 'text-primaryDark'
              }`}
            >
              Terms & Conditions
            </button>
            <button 
              onClick={() => handleNavClick('/privacy-policy')}
              className={`block w-full text-left px-6 py-3 text-sm font-semibold hover:bg-gray-100 ${
                isActiveLink('/privacy-policy') ? 'text-[#F39770]' : 'text-primaryDark'
              }`}
            >
              Privacy Policy
            </button>
          </div>
        </div>
      )}
      
      {isMainPage && (
        <div className="relative w-full sm:h-[26rem]">
          <img
            src="/assets/bgimg.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
}

export default Header;
