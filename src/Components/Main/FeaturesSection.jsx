import React from "react";

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: "Daily Sunshine",
      description: "Personalized daily quotes based on user's mood",
      icon: "/assets/features/1.svg",
      bgColor: "bg-[#F8F2E1]",
    },
    {
      id: 2,
      title: "Guided Journaling",
      description: "Prompts + mood tracking + sentiment analysis",
      icon: "/assets/features/2.svg",
      bgColor: "bg-[#F8F2E1]",
    },
    {
      id: 3,
      title: "Self-Care Plans",
      description: "Custom daily routines, reminders, and assessments",
      icon: "/assets/features/3.svg",
      bgColor: "bg-[#F8F2E1]",
    },
    {
      id: 4,
      title: "Professional Support",
      description: "Therapist directory + book sessions directly",
      icon: "/assets/features/4.svg",
      bgColor: "bg-[#F8F2E1]",
    },
    {
      id: 5,
      title: "Community Forums",
      description: "Safe spaces to get help and inspiration",
      icon: "/assets/features/5.svg",
      bgColor: "bg-[#F8F2E1]",
    },
    {
      id: 6,
      title: "Multimedia Resources",
      description: "Articles, meditations, videos, podcasts",
      icon: "/assets/features/6.svg",
      bgColor: "bg-[#F8F2E1]",
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        {/* Features Title */}
        <div
          className="max-w-[18rem] mx-auto bg-white rounded-2xl bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/assets/After1.png)" }}
        >
          <h2 className="text-center text-3xl font-manrope font-extrabold text-primaryDark py-3 mb-10">
            Features
          </h2>
        </div>

        {/* Features Grid */}
        <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl p-6 h-72 shadow-[#00000012]  w-72 flex-shrink-0"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mb-4 mx-auto`}
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-8 h-8"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-extrabold font-manrope text-primaryDark text-center mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-primaryDark font-manrope text-center text-[16px] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;