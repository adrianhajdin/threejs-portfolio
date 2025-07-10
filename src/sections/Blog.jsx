import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { blogPosts, getBlogCategories } from '../content/blogPosts.js';
import BlogCard from '../components/BlogCard.jsx';
import BlogPost from '../components/BlogPost.jsx';
import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterLoading, setNewsletterLoading] = useState(false);
  const { alert, showAlert, hideAlert } = useAlert();

  // Get unique categories
  const categories = getBlogCategories();

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Posts are already sorted by date in contentLoader
  const sortedPosts = filteredPosts;

  const handleReadMore = (post) => {
    setSelectedPost(post);
  };

  const handleBack = () => {
    setSelectedPost(null);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    
    setNewsletterLoading(true);
    
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID,
        {
          subscriber_email: newsletterEmail,
          to_name: 'Jan Magnus Heimann',
          to_email: 'jan@heimann.ai',
          message: `New newsletter subscription from: ${newsletterEmail}`,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setNewsletterLoading(false);
          showAlert({
            show: true,
            text: 'Successfully subscribed to newsletter! 🎉',
            type: 'success',
          });
          
          setTimeout(() => {
            hideAlert();
            setNewsletterEmail('');
          }, 3000);
        },
        (error) => {
          setNewsletterLoading(false);
          console.error(error);
          
          showAlert({
            show: true,
            text: 'Failed to subscribe. Please try again 😢',
            type: 'danger',
          });
        },
      );
  };

  if (selectedPost) {
    return <BlogPost post={selectedPost} onBack={handleBack} />;
  }

  return (
    <section className="c-space my-20" id="blog">
      {alert.show && <Alert {...alert} />}
      <div className="w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="head-text">Tech Blog</h2>
          <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
            Sharing insights on machine learning, web development, and cutting-edge technology
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-black-300 border border-black-200 rounded-lg px-4 py-2 pl-10 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
            <svg 
              className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-black-300 text-gray-300 hover:bg-black-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-400 text-sm">
            {filteredPosts.length === blogPosts.length 
              ? `${filteredPosts.length} articles` 
              : `${filteredPosts.length} of ${blogPosts.length} articles`}
          </p>
        </div>


        {/* All Posts */}
        <div className="mb-12">
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">
                No articles found matching your search.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedPosts.map(post => (
                <BlogCard 
                  key={post.id} 
                  post={post} 
                  onReadMore={handleReadMore}
                />
              ))}
            </div>
          )}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-black-300 rounded-lg p-8 text-center border border-black-200">
          <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
          <p className="text-gray-400 mb-6">
            Get notified when I publish new articles about machine learning, web development, and technology insights.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
              className="flex-1 bg-black-200 border border-black-100 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
            <button 
              type="submit"
              disabled={newsletterLoading}
              className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              {newsletterLoading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Blog;