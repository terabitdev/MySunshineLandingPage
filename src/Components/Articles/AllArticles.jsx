import React from 'react'
import ArticleListing from './ArticleListing'
const AllArticles = () => {
  return (
    <div className="min-h-screen ">
    <div className="text-center md:mb-10 mt-20 md:mt-28 2xl:mt-28">
      <h1 className="text-4xl md:text-6xl font-medium font-david-libre text-primaryDark mb-4">
        Get Help
      </h1>
      <p className="text-lg md:text-xl text-primaryDark max-w-2xl mx-auto leading-relaxed">
        If you're in distress, you're not alone.
        <br /> Please consider these trusted resources
      </p>
    </div>

    {/* Article Listing */}
    <ArticleListing />
    </div>
    
  );
}

export default AllArticles