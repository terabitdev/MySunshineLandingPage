import React, { useState } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const TermsConditions = () => {
  const [activeSection, setActiveSection] = useState('use-of-app');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigationItems = [
    { id: 'policy-terms', label: 'Policy Terms', active: false },
    { id: 'privacy-policy', label: 'Privacy Policy', active: false },
    { id: 'use-of-app', label: 'Use of the App', active: true },
    { id: 'community-guidelines', label: 'Community Guidelines', active: false },
    { id: 'intellectual-property', label: 'Intellectual Property Statement', active: false },
    { id: 'subscription-payments', label: 'Subscription & Payments', active: false },
    { id: 'disclaimers-warranties', label: 'Disclaimers & Warranties', active: false },
    { id: 'limitation-liability', label: 'Limitation of Liability', active: false },
    { id: 'contact-us', label: 'CONTACT US', active: false }
  ];

  const sections = {
    'use-of-app': {
      title: 'Use of the App',
      content: [
        'By accessing and using this application, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern our relationship with you in relation to this application.',
        '',
        'If you disagree with any part of these terms and conditions, please do not use our application.'
      ]
    },
    'privacy-policy': {
      title: 'Privacy Policy',
      content: [
        'We are committed to protecting your privacy. This privacy policy explains how we collect, use, and protect your information when you use our application. We will not share your personal information with third parties without your consent.',
        '',
        'We collect information you provide directly to us, such as when you create an account, update your profile, or contact us for support.'
      ]
    },
    'community-guidelines': {
      title: 'Community Guidelines',
      content: [
        'Respectful interaction is crucial. Content should be kind, constructive, and supportive. Harassment, hate speech, or inappropriate content will not be tolerated.',
        '',
        'Users are expected to contribute positively to our community and respect the experiences and perspectives of others.'
      ]
    },
    'intellectual-property': {
      title: 'Intellectual Property Statement',
      content: [
        'All content on this application, including text, graphics, logos, images, audio clips, and software, is the property of our company or its content suppliers and is protected by international copyright laws.',
        '',
        'You may not reproduce, distribute, or create derivative works from any content without explicit written permission.'
      ]
    },
    'subscription-payments': {
      title: 'Subscription & Payments',
      content: [
        'Subscription fees are billed in advance on a monthly or annual basis. All fees are non-refundable except as required by law.',
        '',
        'You may cancel your subscription at any time through your account settings. Cancellation will take effect at the end of your current billing period.'
      ]
    },
    'disclaimers-warranties': {
      title: 'Disclaimers & Warranties',
      content: [
        'The information on this application is provided on an "as is" basis. To the fullest extent permitted by law, we disclaim all representations and warranties relating to this application and its contents.',
        '',
        'We do not warrant that the application will be constantly available, or available at all, or free from bugs or viruses.'
      ]
    },
    'limitation-liability': {
      title: 'Limitation of Liability',
      content: [
        'In no event shall we be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of this application.',
        '',
        'Our total liability to you for all damages, losses, and causes of action shall not exceed the amount paid by you, if any, for accessing this application.'
      ]
    },
    'contact-us': {
      title: 'Contact Us',
      content: [
        'If you have any questions about these Terms and Conditions, please contact us at:',
        '',
        'Email: support@example.com',
        'Phone: +1 (555) 123-4567',
        'Address: 123 Main Street, City, State 12345'
      ]
    },
    'policy-terms': {
      title: 'Policy Terms',
      content: [
        'These terms and conditions outline the rules and regulations for the use of our application and services.',
        '',
        'By accessing this application, we assume you accept these terms and conditions. Do not continue to use our application if you do not agree to take all of the terms and conditions stated on this page.'
      ]
    }
  };

  const currentSection = sections[activeSection] || sections['use-of-app'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow-md"
      >
        {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div className={`${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 fixed lg:relative inset-y-0 left-0 z-40 w-80 bg-white shadow-lg transition-transform duration-300 ease-in-out`}>
        
        {/* Sidebar Header */}
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900">Terms & Conditions</h1>
        </div>

        {/* Navigation Menu */}
        <nav className="p-4">
          <ul className="space-y-1">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    setActiveSection(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 text-left rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-orange-100 text-orange-800 font-medium'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className={item.id === 'contact-us' ? 'text-sm font-semibold tracking-wider' : ''}>
                    {item.label}
                  </span>
                  {activeSection === item.id && (
                    <ChevronRight className="w-4 h-4" />
                  )}
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
          {/* Content Header */}
          <div className="mb-8 pt-12 lg:pt-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {currentSection.title}
            </h2>
            <div className="w-16 h-1 bg-orange-500 rounded"></div>
          </div>

          {/* Content Body */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="prose prose-lg max-w-none">
              {currentSection.content.map((paragraph, index) => (
                <div key={index} className="mb-4">
                  {paragraph === '' ? (
                    <div className="h-4"></div>
                  ) : (
                    <p className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Additional Content for Contact Section */}
            {activeSection === 'contact-us' && (
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            )}
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Last updated: January 2025 | These terms are subject to change without notice.
            </p>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsConditions;