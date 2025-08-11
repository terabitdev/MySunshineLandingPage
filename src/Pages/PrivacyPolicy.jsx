import React, { useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("all");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigationItems = [
    { id: "all", label: "All Topics", active: true },
    { id: "introduction", label: "Introduction", active: false },
    { id: "information-collect", label: "Information We Collect", active: false },
    { id: "how-we-use", label: "How We Use Your Information", active: false },
    { id: "sharing-info", label: "Sharing Your Information", active: false },
    { id: "data-retention", label: "Data Retention", active: false },
    { id: "your-rights", label: "Your Rights", active: false },
    { id: "data-protection", label: "Data Protection", active: false },
    { id: "changes-policy", label: "Changes to This Policy", active: false },
    { id: "contact-us", label: "Contact Us", active: false },
  ];

  const sections = {
    "introduction": {
      title: "Introduction",
      content: [
        "This Privacy Policy explains our practices regarding the collection, use, and protection of your personal data. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our application, services, or website and your rights as it relates to your personal data."
      ],
    },
    "information-collect": {
      title: "Information We Collect",
      content: [
        "We collect the following types of information:",
        "• Personal Information: Name, email address, and profile information",
        "• Usage Data: How you interact with our app, including pages visited and actions taken",
        "• Device Information: Information about your device including operating system and app version",
        "• Communication Information: If you communicate with us directly, for example via email or support chat, we collect the information you provided with us or make it available to us"
      ],
    },
    "how-we-use": {
      title: "How We Use Your Information",
      content: [
        "We use the information we collect to:",
        "• Personalize your app experience and deliver tailored content and notifications",
        "• Track and analyze performance to improve our services",
        "• Communicate updates, security, and administrative messages",
        "• Improve app functionality, security, and performance",
        "• Prevent, investigate, and address fraud, security breaches, or suspect or harmful activities"
      ],
    },
    "sharing-info": {
      title: "Sharing Your Information",
      content: [
        "We do not sell, trade, or otherwise transfer your personal information to third parties except:",
        "• In response to legal requests or to protect our rights",
        "• With service providers who assist us in our operations (with strict confidentiality agreements)",
        "• With your consent",
        "• In order to identify potential inconsistencies and check our records"
      ],
    },
    "data-retention": {
      title: "Data Retention",
      content: [
        "We store your personal data only as long as needed to provide the app's services to you or as long as we have another legal basis for the storage.",
        "• Account information: Retained while your account is active",
        "• Usage data: Retained for analytics purposes for up to 2 years",
        "• Support communications: Retained for up to 3 years for quality assurance"
      ],
    },
    "your-rights": {
      title: "Your Rights",
      content: [
        "You have the following rights regarding your personal data:",
        "• View, edit, or delete your personal data at any time from your account settings",
        "• Request a complete export of your data",
        "• Request deletion of your account and associated data",
        "• Opt out of certain communications and data collection"
      ],
    },
    "data-protection": {
      title: "Data Protection",
      content: [
        "We take your privacy seriously and have taking steps to safeguard your account such as encryption your data.",
        "• All data is encrypted both in transit and at rest",
        "• We implement industry-standard security measures",
        "• Regular security audits and updates are performed",
        "• Access to personal data is limited to authorized personnel only"
      ],
    },
    "changes-policy": {
      title: "Changes to This Policy",
      content: [
        "We may update our Privacy Policy from time to time. Any changes will be posted in the app and on our website.",
        "• You will be notified of significant changes via email or in-app notification",
        "• The \"Last Updated\" date at the top indicates when changes were made",
        "• Continued use of the app after changes constitutes acceptance of the new policy"
      ],
    },
    "contact-us": {
      title: "Contact Us",
      content: [
        "For questions, feedback, or concerns about our privacy practices, reach out at:",
      ],
      email: "privacy@mysunlight.app",
    },
  };

  const currentSection = sections[activeSection] || sections["introduction"];

  return (
    <div className="min-h-screen bg-custom-page-gradient">
      <Header />
      <div className="text-center mt-10 md:mt-0 2xl:mt-28 ">
        <h1 className="text-4xl md:text-6xl font-medium font-david-libre text-primaryDark ">
          Privacy Policy
        </h1>
      </div>
      <div className="flex">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow-md"
        >
          {sidebarOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Sidebar */}
        <div
          className={`${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 fixed lg:relative inset-y-0 left-0 z-40 w-80 bg-white lg:bg-transparent shadow-lg lg:shadow-none`}
        >
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

        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setSidebarOpen(false)}
          />
        )}

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

export default PrivacyPolicy;