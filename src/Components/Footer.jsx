import React from "react";
import { useNavigate } from "react-router";
function Footer() {
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="bg-bg-primary text-center pt-20 pb-6">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex items-center space-x-4 mb-12">
          <img src="/assets/Logo.svg" alt="Logo" className="h-16" />
          <h2 className="text-[#150A02] font-manrope font-semibold  text-3xl">
            MySunlight
          </h2>
        </div>
        
       

        

       </div>
    </div>
  );
}

export default Footer;
