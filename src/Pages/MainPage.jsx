import React from 'react'
import MySunshineLanding from '../Components/Main/MySunshineLanding'
function MainPage() {
  return (
    <div className="min-h-screen bg-custom-page-gradient">
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
      <div className="md:-mt-52">
        <MySunshineLanding />
      </div>
      </div>
    
  )
}

export default MainPage