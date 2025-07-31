import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import MySunshineLanding from '../Components/Main/MySunshineLanding'
function MainPage() {
  return (
   <>
   <div className="min-h-screen bg-custom-page-gradient">
      <Header />
      <MySunshineLanding />
      <Footer />
   </div>
   </>
    
  )
}

export default MainPage