import matter from 'gray-matter';

// Auto-discover all markdown files in the blog content directory
const blogFiles = import.meta.glob('../content/blog/*.md', { as: 'raw', eager: true });

// Process markdown files and extract metadata
const processMarkdownFiles = () => {
  const posts = [];
  
  console.log('Blog files found:', Object.keys(blogFiles));
  console.log('Total files:', Object.keys(blogFiles).length);
  
  Object.entries(blogFiles).forEach(([path, content]) => {
    // Extract filename for slug generation
    const filename = path.split('/').pop().replace('.md', '');
    
    // Skip template files (starting with underscore)
    if (filename.startsWith('_')) {
      console.log('Skipping template file:', filename);
      return;
    }
    
    console.log('Processing file:', filename);
    
    // Parse frontmatter and content
    const { data: frontmatter, content: markdownContent } = matter(content);
    
    const slug = filename.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    
    // Generate ID from filename hash (simple approach)
    const id = filename.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    
    // Validate required frontmatter fields
    const requiredFields = ['title', 'excerpt', 'author', 'date', 'readTime', 'tags', 'category'];
    const hasRequiredFields = requiredFields.every(field => frontmatter[field]);
    
    if (!hasRequiredFields) {
      console.warn(`Blog post ${filename} is missing required frontmatter fields:`, {
        missing: requiredFields.filter(field => !frontmatter[field]),
        available: Object.keys(frontmatter)
      });
      return;
    }
    
    // Create post object
    const post = {
      id,
      slug,
      filename,
      title: frontmatter.title,
      excerpt: frontmatter.excerpt,
      author: frontmatter.author,
      date: frontmatter.date,
      readTime: frontmatter.readTime,
      tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [frontmatter.tags],
      category: frontmatter.category,
      content: markdownContent,
      // Additional metadata
      lastModified: new Date().toISOString(),
      wordCount: markdownContent.split(/\s+/).length,
      estimatedReadTime: Math.ceil(markdownContent.split(/\s+/).length / 200) // ~200 words per minute
    };
    
    posts.push(post);
  });
  
  return posts;
};

// Load and process all blog posts
export const loadBlogPosts = () => {
  try {
    const posts = processMarkdownFiles();
    
    // Sort posts by date (newest first)
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    return posts;
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
};

// Get a single blog post by slug
export const getBlogPost = (slug) => {
  const posts = loadBlogPosts();
  return posts.find(post => post.slug === slug);
};

// Get blog posts by category
export const getBlogPostsByCategory = (category) => {
  const posts = loadBlogPosts();
  return posts.filter(post => post.category === category);
};


// Get all unique categories
export const getBlogCategories = () => {
  const posts = loadBlogPosts();
  const categories = [...new Set(posts.map(post => post.category))];
  return ['All', ...categories];
};

// Get all unique tags
export const getBlogTags = () => {
  const posts = loadBlogPosts();
  const tags = [...new Set(posts.flatMap(post => post.tags))];
  return tags.sort();
};

// Search blog posts
export const searchBlogPosts = (query) => {
  const posts = loadBlogPosts();
  const searchTerm = query.toLowerCase();
  
  return posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm) ||
    post.excerpt.toLowerCase().includes(searchTerm) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    post.category.toLowerCase().includes(searchTerm)
  );
};

// Get blog statistics
export const getBlogStats = () => {
  const posts = loadBlogPosts();
  
  return {
    totalPosts: posts.length,
    categories: getBlogCategories().length - 1, // Exclude 'All'
    tags: getBlogTags().length,
    totalWords: posts.reduce((acc, post) => acc + post.wordCount, 0),
    averageReadTime: Math.ceil(posts.reduce((acc, post) => acc + post.estimatedReadTime, 0) / posts.length)
  };
};

// Utility function to validate markdown file structure
export const validateMarkdownFile = (content) => {
  try {
    const { data: frontmatter, content: markdownContent } = matter(content);
    
    const requiredFields = ['title', 'excerpt', 'author', 'date', 'readTime', 'tags', 'category'];
    const missingFields = requiredFields.filter(field => !frontmatter[field]);
    
    return {
      valid: missingFields.length === 0,
      frontmatter,
      content: markdownContent,
      missingFields,
      errors: missingFields.length > 0 ? [`Missing required fields: ${missingFields.join(', ')}`] : []
    };
  } catch (error) {
    return {
      valid: false,
      errors: [error.message]
    };
  }
};