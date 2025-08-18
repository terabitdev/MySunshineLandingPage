import React from 'react';
import { ChevronLeft, Calendar, User, Clock, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const ArticleDetail = () => {
  const navigate = useNavigate();
  
  const article = {
    title: "Understanding Grief: It's Not One-Size-Fits-All",
    author: "Sarah Johnson",
    publishDate: "Jan 24, 2023",
    readTime: "8 min read",
    category: "Healing",
    caption: "Loved one Loss",
    heroImage: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=400&h=250&fit=crop",
    excerpt: "Explore the different ways grief can manifest—emotionally, physically, and even spiritually. This article helps normalize the wide range of grief responses and encourages readers to embrace their unique journey.",
    keyTopics: [
      "Types of grief and emotional expressions of each",
      "The myth of the 5 stages",
      "How grief manifests in our bodies",
      "Creating space for your unique process"
    ],
    content: [
      "Grief is a deeply personal journey. It doesn’t follow a set timeline, and it doesn’t always look the way we expect. Whether you're grieving the loss of a loved one, the end of a relationship, a shift in identity, or another significant change, it’s important to know: there is no “right” way to grieve.",
      "Grief is a deeply personal journey. It doesn’t follow a set timeline, and it doesn’t always look the way we expect. Whether you're grieving the loss of a loved one, the end of a relationship, a shift in identity, or another significant change, it’s important to know: there is no “right” way to grieve.",
      "Grief is a deeply personal journey. It doesn’t follow a set timeline, and it doesn’t always look the way we expect. Whether you're grieving the loss of a loved one, the end of a relationship, a ",
      "Grief is a deeply personal journey. It doesn’t follow a set timeline, and it doesn’t always look the way we expect. Whether you're grieving the loss of a loved one, the end of a relationship, a shift in identity, or another significant change, it’s important to know: there is no “right” way to grieve. Grief is a deeply personal journey. It doesn’t follow a set timeline, and it doesn’t always look the way we expect. Whether you're grieving the loss of a loved one, the end of a relationship, a shift in identity, or another significant change, it’s important to know: there is no “right” way to grieve.",
      "Grief is a deeply personal journey. It doesn’t follow a set timeline, and it doesn’t always look the way we expect. Whether you're grieving the loss of a loved one, the end of a relationship, a  Grief is a deeply personal journey. It doesn’t follow a set timeline, and it doesn’t always look the way we expect. Whether you're grieving the loss of a loved one, the end of a relationship, a shift in identity, or another significant change, it’s important to know: there is no “right” way to grieve. shift in identity, or another significant change, it’s important to know: there is no “right” way to grieve.",
      "Grief is a deeply personal journey. It doesn’t follow a set timeline, and it doesn’t always look the way we expect. Whether you're grieving the loss of a loved one, the end of a relationship, a shift in identity, or another significant change, it’s important to know: there is no “right” way to grieve."
    ]
  };

  return (
    <div className="min-h-screen bg-custom-page-gradient">
      <Header />
      {/* Navigation Breadcrumb */}
      <div className="border-b border-gray-200 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-12">
          <div 
            onClick={() => {
              navigate('/articles');
            }}
            className="flex items-center text-[#525252] font-inter-tight font-medium text-lg  cursor-pointer "
            style={{ zIndex: 100 }}
          >
            <ChevronLeft size={24} className="mr-1 text-[#525252]" />
            All Articles
          </div>
        </div>
      </div>
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Image */}
        <div className="relative mb-8 rounded-xl overflow-hidden shadow-lg">
          <img
            src={article.heroImage}
            alt={article.title}
            className="w-full h-64 sm:h-80 lg:h-[30rem] object-cover"
          />
        </div>

        {/* Article Metadata */}
        <div className="mb-6">
          <div className=" mb-4">
            <div className="flex items-center space-x-4 mb-3 ">
                <h3 className="flex items-center font-manrope text-xl uppercase font-semibold text-[#F39770]  line-clamp-2 group-hover:text-blue-600 transition-colors">
                  <img src="/assets/captionicon.svg" alt="caption" className='h-6  mr-2' />
                  {article.caption}
                </h3>
              <h3 className='text-[#525252] font-inter-tight font-normal text-xl'>{article.publishDate}</h3>
            </div>
            <div className="flex items-center font-manrope text-lg text-primaryDark font-extrabold">
              <h3>Author: <span className='font-normal'>{article.author}</span></h3>
            </div>
            
          </div>
        </div>

        {/* Article Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-manrope font-bold text-[#0A0A0A] mb-6 leading-tight">
          {article.title}
        </h1>

        {/* Article Excerpt */}
        <p className="text-lg sm:text-xl text-primaryDark font-normal  mb-6">
            {article.excerpt}
        </p>
        

        {/* Key Topics */}
        <div className="mb-8">
          <h2 className="text-xl font-manrope font-extrabold text-primaryDark mb-4">Key Topics:</h2>
          <ul className="space-y-2">
            {article.keyTopics.map((topic, index) => (
              <li key={index} className="flex items-center">
                <div className=' p-px bg-white rounded-full mr-2'>
                  <img src="/assets/keytopics.svg" alt="key topic" className="h-4 w-4" />
                </div>
                <span className="text-primaryDark text-lg font-normal font-manrope">{topic}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="space-y-6">
            {article.content.map((paragraph, index) => (
              <p key={index} className="text-primaryDark font-inter-tight font-normal leading-relaxed text-xl">
                {paragraph}
              </p>
            ))}
          </div>
        </div>      
      </div>
      <Footer />
    </div>
  );
};

export default ArticleDetail;