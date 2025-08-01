import React from "react";

function Header() {
  return (
    <div className="   h-14 md:h-72 relative">
      <div className="relative w-full">
        <img
          src="/assets/bgimg.png"
          alt="Background"
          className="w-full h-auto object-cover"
        />
        <img
          src="/assets/Logo.svg"
          alt="Logo"
          className="absolute top-3 md:top-12 left-1/2 transform -translate-x-1/2 h-12 md:h-40 w-auto"
        />
      </div>
    </div>
  );
}

export default Header;
