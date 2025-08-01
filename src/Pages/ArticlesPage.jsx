import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import AllArticles from '../Components/Articles/AllArticles'

function ArticlesPage() {
  return (
 <>
 
 <div className='min-h-screen bg-custom-page-gradient'>
    <Header />
    <AllArticles />
     <Footer />
 </div>

 </>
  )
}

export default ArticlesPage