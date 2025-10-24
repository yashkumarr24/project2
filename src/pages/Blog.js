import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaCar, 
  FaCalendarAlt, 
  FaUser, 
  FaArrowRight,
  FaSearch,
  FaTags,
  FaClock
} from 'react-icons/fa';
import SEOHead from '../components/SEOHead';
import './Blog.css';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Car Maintenance Tips Every Owner Should Know",
      excerpt: "Keep your car running smoothly with these expert maintenance tips from our 20+ years of automotive experience. Learn when to check oil, brakes, and more.",
      category: "maintenance",
      author: "Ram Lal Lohar",
      date: "2024-10-25",
      readTime: "5 min read",
      image: "/car service.webp",
      slug: "essential-car-maintenance-tips",
      keywords: ["car maintenance", "automotive tips", "vehicle care"]
    },
    {
      id: 2,
      title: "When to Service Your Car's AC System - Complete Guide",
      excerpt: "Learn the warning signs that indicate your car's AC needs professional attention and how to maintain optimal cooling performance year-round.",
      category: "ac-service",
      author: "Ram Lal Lohar", 
      date: "2024-10-24",
      readTime: "7 min read",
      image: "/ac service.webp",
      slug: "car-ac-service-guide",
      keywords: ["AC service", "car air conditioning", "automotive cooling"]
    },
    {
      id: 3,
      title: "Denting and Painting: Restoring Your Car's Beauty",
      excerpt: "Professional techniques and tips for maintaining your vehicle's appearance and protecting its value through proper body work and paint care.",
      category: "body-work",
      author: "Ram Lal Lohar",
      date: "2024-10-23", 
      readTime: "6 min read",
      image: "/dent and paint.webp",
      slug: "denting-painting-guide",
      keywords: ["denting painting", "car body work", "automotive restoration"]
    },
    {
      id: 4,
      title: "Complete Car Washing and Detailing Guide",
      excerpt: "Step-by-step process for professional car washing and detailing to keep your vehicle looking brand new and maintain its resale value.",
      category: "detailing",
      author: "Ram Lal Lohar",
      date: "2024-10-22",
      readTime: "8 min read", 
      image: "/car washing and spa.webp",
      slug: "car-washing-detailing-guide",
      keywords: ["car washing", "auto detailing", "vehicle cleaning"]
    },
    {
      id: 5,
      title: "Engine Diagnostics: Understanding Your Car's Health",
      excerpt: "Learn how modern engine diagnostics work and what common error codes mean for your vehicle's performance and longevity.",
      category: "engine",
      author: "Ram Lal Lohar",
      date: "2024-10-21",
      readTime: "9 min read",
      image: "/engine work.webp", 
      slug: "engine-diagnostics-guide",
      keywords: ["engine diagnostics", "car troubleshooting", "automotive repair"]
    },
    {
      id: 6,
      title: "Tyre Maintenance: Safety and Performance Tips",
      excerpt: "Everything you need to know about tyre care, rotation, alignment, and when to replace them for optimal safety and performance.",
      category: "tyres",
      author: "Ram Lal Lohar",
      date: "2024-10-20",
      readTime: "6 min read",
      image: "/tyres.webp",
      slug: "tyre-maintenance-guide", 
      keywords: ["tyre maintenance", "wheel alignment", "automotive safety"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'maintenance', name: 'Maintenance', count: blogPosts.filter(p => p.category === 'maintenance').length },
    { id: 'ac-service', name: 'AC Service', count: blogPosts.filter(p => p.category === 'ac-service').length },
    { id: 'body-work', name: 'Body Work', count: blogPosts.filter(p => p.category === 'body-work').length },
    { id: 'detailing', name: 'Detailing', count: blogPosts.filter(p => p.category === 'detailing').length },
    { id: 'engine', name: 'Engine', count: blogPosts.filter(p => p.category === 'engine').length },
    { id: 'tyres', name: 'Tyres', count: blogPosts.filter(p => p.category === 'tyres').length }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="blog-page">
      <SEOHead 
        title="Automotive Blog - Car Care Tips & Guides | Yash Car Workshop"
        description="Expert automotive advice, car maintenance tips, and repair guides from Yash Car Workshop. Learn from 20+ years of professional experience in car service and repair."
        canonical="/blog"
        keywords="car maintenance tips, automotive blog, car care guide, vehicle maintenance, auto repair advice, car service tips"
      />

      {/* Hero Section */}
      <section className="blog-hero">
        <div className="hero-background">
          <img src="/jeep-hero.webp" alt="Automotive expertise and car care" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">Automotive Knowledge Hub</h1>
            <p className="hero-subtitle">
              Expert tips, guides, and insights from our 20+ years of automotive experience
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container">
        {/* Search and Filter */}
        <section className="blog-controls">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <FaTags />
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="blog-posts">
          <div className="posts-grid">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="blog-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="card-image">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    loading="lazy"
                  />
                  <div className="card-category">{post.category}</div>
                </div>

                <div className="card-content">
                  <div className="card-meta">
                    <span className="meta-item">
                      <FaUser />
                      {post.author}
                    </span>
                    <span className="meta-item">
                      <FaCalendarAlt />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="meta-item">
                      <FaClock />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="card-title">{post.title}</h2>
                  <p className="card-excerpt">{post.excerpt}</p>

                  <div className="read-more-btn">
                    Read More
                    <FaArrowRight />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="no-results">
              <FaSearch size={48} />
              <h3>No articles found</h3>
              <p>Try adjusting your search terms or category filter.</p>
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="blog-cta">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Need Professional Service?</h2>
            <p>Our expert team is ready to help with all your automotive needs</p>
            <div className="cta-buttons">
              <Link to="/booking" className="btn-primary">
                <FaCar />
                Book Service
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get Quote
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
