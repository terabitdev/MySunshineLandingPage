import React from 'react';
import { ChevronLeft, Calendar, User, Clock, Tag } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const ArticleDetail = () => {
  const article = {
    title: "Understanding Grief: It's Not One-Size-Fits-All",
    author: "Sarah Johnson",
    publishDate: "Jan 24, 2023",
    readTime: "8 min read",
    category: "Healing",
    heroImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    excerpt: "Explore the different ways grief can manifest—emotionally, physically, and even spiritually. This article helps normalize the wide range of grief responses and encourages readers to embrace their unique journey.",
    keyTopics: [
      "Types of grief and emotional expressions of each",
      "The myth of the 5 stages",
      "How grief manifests in our bodies",
      "Creating space for your unique process"
    ],
    content: [
      "Grief is a deeply personal journey. It doesn't follow a set timeline, and it doesn't always look the way we expect. Whether you're grieving the loss of a loved one, the end of a relationship, a job transition, or another significant change, it's important to know that—like you—grief is unique.",
      "One of the most pervasive myths about grief is that it follows a predictable pattern—the famous \"five stages\" of grief. While these stages can be helpful as a framework, they don't represent a universal experience. Some people may skip stages entirely, others may cycle through them multiple times, and many will experience them in a completely different order.",
      "Grief is a deeply personal journey. It doesn't follow a set timeline, and it doesn't always look the way we expect. Whether you're grieving the loss of a loved one, the end of a relationship, a job transition, or another significant change, it's important to know that—like you—grief is unique.",
      "Grief is a deeply personal journey. It doesn't follow a set timeline, and it doesn't always look the way we expect. Whether you're grieving the loss of a loved one, the end of a relationship, a job transition, or another significant change, it's important to know that your \"way\" of grieving. Find is a deeply personal journey. It doesn't follow a set timeline, and it doesn't always look the way we expect. Whether you're grieving the loss of a loved one, whether the end of a relationship, it doesn't follow a set timeline, and it doesn't follow a set timeline, and it doesn't always look the way we expect. Whether you're grieving the loss of a loved one, the \"way\" way is go grieving."
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Navigation Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            <ChevronLeft className="w-4 h-4 mr-1" />
            <span className="text-sm font-medium">All Articles</span>
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Image */}
        <div className="relative mb-8 rounded-xl overflow-hidden shadow-lg">
          <img
            src={article.heroImage}
            alt={article.title}
            className="w-full h-64 sm:h-80 lg:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Article Metadata */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              <span>Author: {article.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{article.publishDate}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>{article.readTime}</span>
            </div>
            <div className="flex items-center">
              <Tag className="w-4 h-4 mr-1" />
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                {article.category}
              </span>
            </div>
          </div>
        </div>

        {/* Article Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {article.title}
        </h1>

        {/* Article Excerpt */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 rounded-r-lg">
          <p className="text-gray-700 text-lg leading-relaxed italic">
            {article.excerpt}
          </p>
        </div>

        {/* Key Topics */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Topics:</h2>
          <ul className="space-y-2">
            {article.keyTopics.map((topic, index) => (
              <li key={index} className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{topic}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="space-y-6">
            {article.content.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Social Share & Actions */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 font-medium">Share this article:</span>
              <div className="flex space-x-2">
                <button className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                  Twitter
                </button>
                <button className="bg-blue-800 text-white px-3 py-2 rounded-lg hover:bg-blue-900 transition-colors text-sm">
                  Facebook
                </button>
                <button className="bg-blue-700 text-white px-3 py-2 rounded-lg hover:bg-blue-800 transition-colors text-sm">
                  LinkedIn
                </button>
              </div>
            </div>
            
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium">
              Read Next Article
            </button>
          </div>
        </div>

        {/* Related Articles Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <img
                  src={`https://images.unsplash.com/photo-${item === 1 ? '1544027993-37dbfe43562a' : '1506905925346-21bda4d32df4'}?w=400&h=200&fit=crop`}
                  alt="Related article"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Micro-Moments of Healing: Small Habits That Make a Difference
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Discover simple daily practices that can create meaningful change in your healing journey.
                  </p>
                  <span className="text-blue-600 text-sm font-medium hover:underline">
                    Read More →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArticleDetail;