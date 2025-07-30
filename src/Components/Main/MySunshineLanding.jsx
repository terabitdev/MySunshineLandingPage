import React from 'react';

const MySunshineLanding = () => {
  return (
    <div className="min-h-screen bg-[#E3E9E8]">
      {/* Header Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            MySunshine - Helping You
            <br />
            Heal, One Day at a Time
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A digital platform for grief support through journaling,
            <br />
            self-care, therapist access & community.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                    The Story Behind
                  </h2>
                  <h3 className="text-2xl md:text-3xl font-bold text-orange-400 mb-4">
                    MySunshine
                  </h3>
                  <p className="text-lg font-semibold text-gray-700 mb-6">
                    Inspired by Personal Loss
                  </p>
                </div>

                <div className="mb-8">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    MySunshine is dedicated to my wife, Meredith, who lost her
                    brother Michael. On the day of his funeral, she said the sun way to
                    survive. Ever since, whenever we see the sun shining, it feels like
                    Michael's embrace of hope.
                  </p>
                </div>

                <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200 self-start">
                  Read Full Story
                </button>
              </div>

              {/* Right Illustration */}
              <div className="relative bg-gradient-to-br from-orange-200 via-yellow-200 to-green-200 p-8 md:p-12 flex items-center justify-center">
                {/* Illustration placeholder - simplified version */}
                <div className="relative w-full h-64 md:h-80">
                  {/* Building/House */}
                  <div className="absolute right-8 top-8">
                    <div className="w-20 h-24 bg-orange-300 rounded-t-lg relative">
                      <div className="w-3 h-3 bg-orange-500 rounded-full absolute top-2 left-2"></div>
                      <div className="w-3 h-3 bg-orange-500 rounded-full absolute top-2 right-2"></div>
                      <div className="w-6 h-8 bg-orange-400 absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
                    </div>
                  </div>

                  {/* Two People Silhouettes */}
                  <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    {/* Person 1 */}
                    <div className="relative">
                      <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                      <div className="w-12 h-20 bg-orange-500 rounded-t-full mt-1"></div>
                      <div className="w-4 h-12 bg-gray-700 absolute -left-1 top-12"></div>
                      <div className="w-4 h-12 bg-gray-700 absolute -right-1 top-12"></div>
                    </div>

                    {/* Person 2 */}
                    <div className="relative">
                      <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                      <div className="w-12 h-20 bg-gray-700 rounded-t-full mt-1"></div>
                      <div className="w-4 h-12 bg-gray-600 absolute -left-1 top-12"></div>
                      <div className="w-4 h-12 bg-gray-600 absolute -right-1 top-12"></div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute bottom-0 left-0 w-full h-8 bg-green-300 rounded-full opacity-60"></div>
                  <div className="absolute top-4 left-4 w-6 h-6 bg-green-400 rounded-full opacity-40"></div>
                  <div className="absolute top-12 right-16 w-4 h-4 bg-yellow-400 rounded-full opacity-60"></div>
                  
                  {/* Plant/foliage */}
                  <div className="absolute bottom-8 left-8">
                    <div className="w-8 h-12 bg-green-500 rounded-full opacity-70"></div>
                    <div className="w-6 h-8 bg-green-400 rounded-full opacity-80 absolute -right-2 top-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySunshineLanding;