import React, { useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const TermsConditions = () => {
  const [activeSection, setActiveSection] = useState("all");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigationItems = [
    { id: "all", label: "All Topics", active: true },
    { id: "use-of-app", label: "Use of the App", active: false },
    { id: "policy-terms", label: "Policy & Data", active: false },
    {
      id: "community-guidelines",
      label: "Community Guidelines",
      active: false,
    },
    {
      id: "professional-support",
      label: "Professional Support Disclaimer",
      active: false,
    },
    { id: "account-access", label: "Account Access", active: false },
    {
      id: "subscription-payments",
      label: "Subscription & Payments",
      active: false,
    },
    {
      id: "limitation-liability",
      label: "Limitation of Liability",
      active: false,
    },
    { id: "change-terms", label: "Change to Terms", active: false },
    { id: "contact-us", label: "Contact Us", active: false },
  ];

  const sections = {
    "use-of-app": {
      title: "Use of the App",
      content: [
        "MySunlight is designed for individuals seeking emotional support during grief. You agree to use the app respectfully and only for personal, non-commercial purposes.",
      ],
    },
    "policy-terms": {
      title: "Policy & Data",
      content: [
        "Your privacy matters. We collect limited personal data to personalize your experience. All journal entries and mood data are encrypted and not shared publicly. For details.",
      ],
    },
    "community-guidelines": {
      title: "Community Guidelines",
      content: [
        "Be kind, respectful, and supportive in community forums. Harmful, abusive, or triggering content will be removed. Repeated violations may lead to account suspension.",
      ],
    },
    "professional-support": {
      title: "Professional Support Disclaimer",
      content: [
        "MySunlight does not replace professional therapy. While we connect you to licensed providers, all decisions and outcomes from those services are solely between you and the provider.",
      ],
    },
    "account-access": {
      title: "Account Access",
      content: [
        "You must be at least 16 years old to use the app. You are responsible for keeping your login details secure and for any activity under your account.",
      ],
    },
    "subscription-payments": {
      title: "Subscription & Payments",
      content: [
        "If you choose a premium plan, billing will occur monthly/yearly based on your selection. You may cancel at any time in your account settings.",
      ],
    },
    "limitation-liability": {
      title: "Limitation of Liability",
      content: [
        "We are not liable for any emotional or psychological distress experienced while using the app. MySunlight is a supportive tool, not a medical device.",
      ],
    },
    "change-terms": {
      title: "Change to Terms",
      content: [
        "We may update these terms from time to time. Continued use of the app means you accept any updates.",
      ],
    },
    "contact-us": {
      title: "Contact Us",
      content: [
        "For questions, feedback, or concerns, reach out at:",
      ],
      email: "support@mysunlight.com",
    },
  };

  const currentSection = sections[activeSection] || sections["use-of-app"];

  return (
    <div className="min-h-screen bg-custom-page-gradient">
      <Header />
      <div className="text-center mt-20 md:mt-24 2xl:mt-28 ">
        <h1 className="text-4xl md:text-6xl font-medium font-david-libre text-primaryDark ">
          Terms & Conditions
        </h1>
      </div>
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden lg:block lg:relative inset-y-0 left-0 z-40 w-80 bg-white lg:bg-transparent shadow-lg lg:shadow-none">
          {/* Sidebar Header */}
          <div className="pl-14 pt-10 ">
            <h1 className="text-sm font-inter-tight font-medium text-primaryDark">
              Filter by Topics
            </h1>
          </div>

          {/* Navigation Menu */}
          <nav className="py-4 pl-14 pr-5 md:pr-20 lg:pr-0">
            <ul className="space-y-1">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveSection(item.id);
                      setSidebarOpen(false);
                    }}
                    className={`w-full  flex items-center font-manrope justify-between px-2 py-3 text-left rounded-lg  ${
                      activeSection === item.id
                        ? "bg-[#F39770] text-white font-bold text-sm"
                        : "text-primaryDark font-normal text-sm "
                    }`}
                  >
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          <div className="max-w-4xl mx-auto p-6 lg:p-8">
            {/* Content Display - Show All or Filtered */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="prose prose-lg max-w-none">
                {activeSection === "all" ? (
                  // Show all topics
                  <div className="space-y-12">
                    {navigationItems.filter(item => item.id !== "all").map((item) => (
                      <div key={item.id} id={item.id}>
                        <h2 className="text-lg font-bold font-manrope text-[#0A0A0A] mb-4">
                          {sections[item.id]?.title || item.label}
                        </h2>
                        {sections[item.id]?.content.map((paragraph, index) => (
                          <div key={index} className="mb-4">
                            {paragraph === "" ? (
                              <div className="h-4"></div>
                            ) : (
                              <p className="text-[#525252] font-manrope font-medium text-sm leading-relaxed">
                                {paragraph}
                              </p>
                            )}
                          </div>
                        ))}
                        
                        {/* Special case for Contact Us section */}
                        {item.id === 'contact-us' && sections[item.id]?.email && (
                          <div className="mb-4">
                            <p className="text-[#F39770] font-manrope font-medium text-sm leading-relaxed">
                              <span className="font-bold"> </span>
                              {sections[item.id].email}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  // Show only active section
                  <div key={activeSection} id={activeSection}>
                    <h2 className="text-lg font-bold font-manrope text-[#0A0A0A] mb-4">
                      {sections[activeSection]?.title || navigationItems.find(item => item.id === activeSection)?.label}
                    </h2>
                    {sections[activeSection]?.content.map((paragraph, index) => (
                      <div key={index} className="mb-4">
                        {paragraph === "" ? (
                          <div className="h-4"></div>
                        ) : (
                          <p className="text-[#525252] font-manrope font-medium text-sm leading-relaxed">
                            {paragraph}
                          </p>
                        )}
                      </div>
                    ))}
                    
                    {/* Special case for Contact Us section */}
                    {activeSection === 'contact-us' && sections[activeSection]?.email && (
                      <div className="mb-4">
                        <p className="text-[#F39770] font-manrope font-medium text-sm leading-relaxed">
                          <span className="font-bold"> </span>
                          {sections[activeSection].email}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsConditions;
