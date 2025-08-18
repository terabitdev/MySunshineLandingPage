import React, { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
const ArticleListing = () => {
  const [activeFilter, setActiveFilter] = useState('All Articles');
  const [showAll, setShowAll] = useState(false);
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [filterButtonRect, setFilterButtonRect] = useState(null);
  const navigate = useNavigate();

  const articles = [
    {
      id: 1,
      title: "Understanding Grief: It's Not One-Size-Fits-All",
      description: "This article explores the many different grief we all face, reminding readers that there's no proper or wrong way of grieving loss.",
      image: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=400&h=250&fit=crop",
      caption: "Loved one Loss",
      category: "Loss of a loved one'"
    },
    {
      id: 2,
      title: "Understanding Grief: It's Not One-Size-Fits-All",
      description: "This article explores the many different grief we all face, reminding readers that there's no proper or wrong way of grieving loss.",
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=250&fit=crop",
      caption: "Loved one Loss",
      category: "Infertility"
    },
    {
      id: 3,
      title: "Micro-Moments of Healing Small Habits That Make",
      description: "This article discusses the many different grief we all face, reminding readers that there's no proper or wrong way of grieving loss.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      caption: "Loved one Loss",
      category: "Job loss or career setback"
    },
    {
      id: 4,
      title: "Micro-Moments of Healing Small Habits That Make",
      description: "This article discusses the many different grief we all face, reminding readers that there's no proper or wrong way of grieving loss.",
      image: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=400&h=250&fit=crop",
      caption: "Loved one Loss",
      category: "Relationship breakup or divorce"
    },
    {
      id: 5,
      title: "Micro-Moments of Healing Small Habits That Make",
      description: "This article discusses the many different grief we all face, reminding readers that there's no proper or wrong way of grieving loss.",
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=250&fit=crop",
      caption: "Loved one Loss",
      category: "Open topic"
    },
    {
      id: 6,
      title: "Micro-Moments of Healing Small Habits That Make",
      description: "This article discusses the many different grief we all face, reminding readers that there's no proper or wrong way of grieving loss.",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=250&fit=crop",
      caption: "Loved one Loss",
      category: "Open topic"
    },
    {
      id: 7,
      title: "Micro-Moments of Healing Small Habits That Make",
      description: "This article discusses the many different grief we all face, reminding readers that there's no proper or wrong way of grieving loss.",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=250&fit=crop",
      caption: "Loved one Loss",
      category: "Open topic"
    },
    {
      id: 8,
      title: "Micro-Moments of Healing Small Habits That Make",
      description: "This article discusses the many different grief we all face, reminding readers that there's no proper or wrong way of grieving loss.",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=250&fit=crop",
      caption: "Loved one Loss",
      category: "Open topic"
    }
  ];

  const filterButtons = ['All Articles', 'Loss of a loved one', 'Infertility', 'Job loss or career setback', 'Relationship breakup or divorce', 'Open topic'];

  const filteredArticles = activeFilter === 'All Articles' 
    ? articles 
    : articles.filter(article => article.category === activeFilter);

  const displayArticles = showAll ? filteredArticles : filteredArticles.slice(0, 8);
  const firstTwoArticles = displayArticles.slice(0, 2);
  const remainingArticles = displayArticles.slice(2);
  const hasMoreArticles = filteredArticles.length > 8;

  return (
    <div className="min-h-screen  py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className=" text-3xl sm:text-4xl font-semibold font-inter-tight text-[#0A0A0A] mb-4">
            All Articles
          </h1>
          <p className="text-[#737373] font-normal text-sm font-inter-tight mb-6 max-w-[35rem]">
            Explore expert insights, personal stories, and therapeutic tools to
            support your grief journey. Every article is thoughtfully written to
            bring you comfort, clarity, and connection.
          </p>

          {/* Search and Filter Bar */}
          <div className="flex gap-8 mb-6">
            <div className="relative flex-1 max-w-sm sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#A3A3A3] w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-12 py-2 border placeholder-[#A3A3A3] font-inter-tight border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              
              {/* Filter Icon - Mobile (inside search bar) */}
              <div className="md:hidden absolute right-3 top-1/2 transform -translate-y-1/2">
                <button
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setFilterButtonRect(rect);
                    setIsFilterDropdownOpen(!isFilterDropdownOpen);
                  }}
                  className="p-1 bg-[#F39770] rounded-md"
                >
                  <SlidersHorizontal className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Filter Buttons - Desktop */}
            <div className="hidden md:flex gap-2 max-w-5xl ">
              {filterButtons.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-lg text-sm font-medium font-inter-tight ${
                    activeFilter === filter
                      ? "bg-[#4B7C6C26] text-[#0A0A0A] border border-[#4B7C6C]"
                      : "bg-white text-[#737373] border border-[#E5E5E5] shadow-[#0D0D120F]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* First Two Articles - Centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center max-w-7xl mx-auto mb-12">
          {firstTwoArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => navigate("/article-details")}
              className="bg-white rounded-lg shadow-md p-4 max-h-[40rem]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-60 object-cover rounded-lg "
                />
              </div>

              <div className="mt-5">
                <h3 className="text-2xl font-manrope font-bold text-[#150A02] mb-3 cursor-pointer">
                  {article.title}
                </h3>
                <h3 className="flex items-center font-manrope text-xl uppercase font-semibold text-[#F39770] mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  <img src="/assets/captionicon.svg" alt="caption" className='h-6  mr-2' />
                  {article.caption}
                </h3>
                <p className="font-manrope font-normal text-[#150A02] text-lg mb-4 ">
                  {article.description}
                </p>
                <div className="flex items-center space-x-2">
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/article-details");
                    }}
                    className="text-[#4B7C6C] font-inter-tight text-lg  cursor-pointer"
                  >
                    Learn More 
                    
                  </span>
                  <FaArrowRight className='text-[#4B7C6C]' size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Remaining Articles - 3 Column Grid */}
        {remainingArticles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {remainingArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => navigate("/article-details")}
                className="bg-white rounded-lg shadow-md p-4 max-h-[40rem] cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>

                <div className="mt-5">
                  <h3 className="text-xl font-manrope font-bold text-[#150A02] mb-3 cursor-pointer">
                    {article.title}
                  </h3>
                  <h3 className="flex items-center font-manrope text-lg uppercase font-semibold text-[#F39770] mb-3">
                    <img src="/assets/captionicon.svg" alt="caption" className='h-6 mr-2' />
                    {article.caption}
                  </h3>
                  <p className="font-manrope font-normal text-[#150A02] text-base mb-4">
                    {article.description}
                  </p>
                  <div className="flex items-center space-x-2">
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate("/article-details");
                      }}
                      className="text-[#4B7C6C] font-inter-tight text-base cursor-pointer"
                    >
                      Learn More
                    </span>
                    <FaArrowRight className='text-[#4B7C6C]' size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View More Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(true)}
            className="bg-[#4B7C6C] text-white px-8 py-3 rounded-full  font-semibold font-manrope text-lg"
          >
            View More 
          </button>
        </div>

        {/* Mobile Filter Dropdown - Fixed Position */}
        {isFilterDropdownOpen && filterButtonRect && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-25 z-[9999]"
              onClick={() => setIsFilterDropdownOpen(false)}
            />
            
            {/* Dropdown Menu */}
            <div 
              className="fixed w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-[10000]"
              style={{
                top: filterButtonRect.bottom + 8,
                right: window.innerWidth - filterButtonRect.right,
              }}
            >
              <div className="p-2">
                {filterButtons.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => {
                      setActiveFilter(filter);
                      setIsFilterDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium font-inter-tight mb-1 ${
                      activeFilter === filter
                        ? "bg-[#4B7C6C26] text-[#0A0A0A] border border-[#4B7C6C]"
                        : "bg-white text-[#737373] hover:bg-gray-50"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ArticleListing;