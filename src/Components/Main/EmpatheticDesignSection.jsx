import React from "react";

const EmpatheticDesignSection = () => {
  const designFeatures = [
    "Calming pastel palette",
    "Minimalistic design, accessible fonts",
    "Voice journaling, dynamic mood check-ins",
    "Encouraging feedback loops and milestone highlights",
  ];

  return (
    <div className="bg-white py-16 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center font-manrope">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-extrabold  text-primaryDark leading-tight">
                <span className="text-[#4B7C6C]">Empathetic</span> Design
                <br />
                with You in Mind
              </h2>

              <div className="space-y-4">
                {designFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <img src="/assets/li.svg" alt="bullet point" className="w-4 h-4 mt-2 flex-shrink-0" />
                    <p className="text-[#0C1311] text-lg leading-relaxed">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Illustration */}
            <div className="w-full">
              <img
                src="/assets/sunshine.png"
                alt="Sunrise with clouds illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpatheticDesignSection;