import { useState } from 'react';

const BlogCard = ({ post, onReadMore }) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div 
      className={`bg-black-300 rounded-lg p-6 border border-black-200 transition-all duration-300 hover:border-white-600 ${
        isHovered ? 'transform -translate-y-2 shadow-2xl' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      {/* Category and date */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-blue-400 text-sm font-medium">{post.category}</span>
        <span className="text-gray-400 text-sm">{formatDate(post.date)}</span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 hover:text-blue-400 transition-colors">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-gray-300 mb-4 line-clamp-3 leading-relaxed">
        {post.excerpt}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.slice(0, 3).map((tag, index) => (
          <span 
            key={index}
            className="bg-black-200 text-gray-300 px-2 py-1 rounded text-xs border border-black-100"
          >
            {tag}
          </span>
        ))}
        {post.tags.length > 3 && (
          <span className="text-gray-400 text-xs">+{post.tags.length - 3} more</span>
        )}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-sm">{post.author}</span>
          <span className="text-gray-500 text-sm">•</span>
          <span className="text-gray-400 text-sm">{post.readTime}</span>
        </div>
        
        <button
          onClick={() => onReadMore(post)}
          className="text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors flex items-center gap-1"
        >
          Read More
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BlogCard;