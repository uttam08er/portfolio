import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Share2, Heart, MessageCircle, Tag, ChevronRight, BookOpen } from 'lucide-react';
import './styles/BlogPage.css';

const BlogDetailPage = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(42);
  const [comments, setComments] = useState(12);

  // Sample blog data with dummy images
  const blogData = {
    id: 1,
    title: "Building Scalable React Applications: Best Practices and Architecture Patterns",
    excerpt: "Learn how to structure and architect React applications that can grow with your team and requirements.",
    content: `
      <p>Building scalable React applications is crucial for long-term project success. In this comprehensive guide, we'll explore the essential patterns and practices that will help you create maintainable, performant applications.</p>
      
      <h2 id="component-architecture">Component Architecture</h2>
      <p>The foundation of any scalable React application lies in its component architecture. By following the principle of separation of concerns and creating reusable components, we can build applications that are both maintainable and extensible.</p>
      
      <h3>Container vs Presentational Components</h3>
      <p>One of the most important patterns is separating your components into containers (smart components) and presentational components (dumb components). Container components handle logic and state management, while presentational components focus purely on rendering UI.</p>
      
      <div class="code-block">
        <pre><code>// Container Component
const UserListContainer = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchUsers().then(data => {
      setUsers(data);
      setLoading(false);
    });
  }, []);
  
  return &lt;UserList users={users} loading={loading} /&gt;;
};

// Presentational Component
const UserList = ({ users, loading }) => {
  if (loading) return &lt;div&gt;Loading...&lt;/div&gt;;
  
  return (
    &lt;div&gt;
      {users.map(user => (
        &lt;UserCard key={user.id} user={user} /&gt;
      ))}
    &lt;/div&gt;
  );
};</code></pre>
      </div>
      
      <h2 id="state-management">State Management</h2>
      <p>As your application grows, managing state becomes increasingly complex. Consider using state management libraries like Redux, Zustand, or Context API for global state management.</p>
      
      <h3>When to Use Local vs Global State</h3>
      <p>Not all state needs to be global. Use local state for component-specific data and global state for data that needs to be shared across multiple components.</p>
      
      <blockquote class="quote">
        "The key to successful state management is knowing when to lift state up and when to keep it local." - React Team
      </blockquote>
      
      <h2 id="performance-optimization">Performance Optimization</h2>
      <p>Performance is crucial for user experience. Here are some key optimization techniques:</p>
      <ul class="list">
        <li>Use React.memo for component memoization</li>
        <li>Implement code splitting with React.lazy</li>
        <li>Optimize bundle size with tree shaking</li>
        <li>Use proper key props in lists</li>
        <li>Implement virtual scrolling for large lists</li>
      </ul>
      
      <h2 id="testing-strategy">Testing Strategy</h2>
      <p>A comprehensive testing strategy includes unit tests, integration tests, and end-to-end tests. Use tools like Jest, React Testing Library, and Cypress to ensure your application works as expected.</p>
      
      <h3>Testing Best Practices</h3>
      <p>Focus on testing behavior rather than implementation details. Write tests that give you confidence in your application's functionality.</p>
      
      <h2 id="conclusion">Conclusion</h2>
      <p>Building scalable React applications requires careful planning and adherence to best practices. By following these patterns and continuously refactoring your code, you can create applications that stand the test of time.</p>
      
      <p>Remember, scalability isn't just about handling more users—it's about creating code that can evolve with your requirements and team.</p>
    `,
    author: {
      name: "Uttam Kumar",
      avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%234F46E5'/%3E%3Ctext x='50' y='58' text-anchor='middle' fill='white' font-size='36' font-family='Arial'%3EAJ%3C/text%3E%3C/svg%3E",
      bio: "Full-stack developer in React and Node.js."
    },
    toc: [
      {
        id: "component-architecture",
        title: "Component Architecture"
      },
      {
        id: "state-management",
        title: "State Management"
      },
      {
        id: "performance-optimization",
        title: "Performance Optimization"
      },
      {
        id: "testing-strategy",
        title: "Testing Strategy"
      },
      {
        id: "conclusion",
        title: "Conclusion"
      }
    ],
    publishedAt: "2024-03-15",
    readTime: "8 min read",
    tags: ["React", "JavaScript", "Web Development", "Architecture", "Best Practices"],
    category: "Development",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='600' viewBox='0 0 1200 600'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2361DAFB;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%234F46E5;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='600' fill='url(%23grad1)'/%3E%3Ctext x='600' y='320' text-anchor='middle' fill='white' font-size='48' font-family='Arial' font-weight='bold'%3EReact Architecture%3C/text%3E%3Ctext x='600' y='380' text-anchor='middle' fill='white' font-size='24' font-family='Arial' opacity='0.8'%3EBuilding Scalable Applications%3C/text%3E%3C/svg%3E"
  };


  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blogData.title,
          text: blogData.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback - copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      } catch (err) {
        console.log('Could not copy link');
      }
    }
  };

  return (
    <div className="blog-detail-page">
      <div className="hero-section">
        <div className="hero-container">
          {/* Breadcrumb */}
          <nav className="breadcrumb">
            <span>Blog</span>
            <ChevronRight size={16} />
            <span className="breadcrumb-current">{blogData.category}</span>
          </nav>

          {/* Title and Meta */}
          <div className="title-section">
            <h1>
              {blogData.title}
            </h1>

            <div className="meta-info">
              <div className="author-info">
                <img
                  src={blogData.author.avatar}
                  alt={blogData.author.name}
                  className="author-avatar"
                />
                <div>
                  <p className="author-name">{blogData.author.name}</p>
                  <p className="simple-text">{blogData.author.bio}</p>
                </div>
              </div>

              <div className="date-info">
                <div className="date-item">
                  <Calendar size={16} />
                  <span>{new Date(blogData.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
                <div className="date-item">
                  <Clock size={16} />
                  <span>{blogData.readTime}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="featured-image-container">
            <img
              src={blogData.image}
              alt={blogData.title}
              className="featured-image"
            />
          </div>

          {/* Tags */}
          <div className="tags-container">
            {blogData.tags.map((tag, index) => (
              <span
                key={index}
                className="tag"
              >
                <Tag size={14} />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="content-grid">
          {/* Article Content */}
          <article className="article-content">
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: blogData.content }}
            />

            {/* Action Buttons */}
            <div className="action-buttons">
              <div className="social-buttons">
                <button
                  onClick={handleLike}
                  className={`action-btn ${isLiked ? 'liked' : ''}`}
                >
                  <Heart size={18} fill={isLiked ? 'currentColor' : 'none'} />
                  <span>{likes}</span>
                </button>

                <button className="action-btn">
                  <MessageCircle size={18} />
                  <span>{comments}</span>
                </button>
              </div>

              <button
                onClick={handleShare}
                className="share-btn"
              >
                <Share2 size={18} />
                <span>Share</span>
              </button>
            </div>
          </article>

          {/* Sidebar */}
            <div className="sidebar">
              {/* Table of Contents */}
              <div className="sidebar-card">
                <h3 className="sidebar-title">
                  <BookOpen size={18} />
                  Table of Contents
                </h3>
                <nav className="toc">
                  {blogData.toc.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.id}`}
                      className="toc-link"
                    >
                      {item.title}
                    </a>
                 ))}
                  {/* </a> */}
                  {/* <a href="#testing-strategy" className="toc-link">
                    Testing Strategy
                  </a> */}
                </nav>
              </div>

              {/* Quick Stats */}
              <div className="sidebar-card">
                <h3 className="sidebar-title">Article Stats</h3>
                <div className="stats">
                  <div className="stat-item">
                    <span className="stat-label">Reading time</span>
                    <span className="stat-value">{blogData.readTime}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Published</span>
                    <span className="stat-value">
                      {new Date(blogData.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Views</span>
                    <span className="stat-value">2.3k</span>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;











































// import React, { useState, useEffect } from 'react';
// import { ArrowLeft, Calendar, Clock, Share2, Heart, MessageCircle, User, Tag, ChevronRight, BookOpen } from 'lucide-react';
// import './styles/BlogPage.css';

// const BlogDetailPage = () => {
//   const [isLiked, setIsLiked] = useState(false);
//   const [likes, setLikes] = useState(42);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [comments, setComments] = useState(12);

//   // Sample blog data with dummy images
//   const blogData = {
//     id: 1,
//     title: "Building Scalable React Applications: Best Practices and Architecture Patterns",
//     excerpt: "Learn how to structure and architect React applications that can grow with your team and requirements.",
//     content: `
//       <p>Building scalable React applications is crucial for long-term project success. In this comprehensive guide, we'll explore the essential patterns and practices that will help you create maintainable, performant applications.</p>
      
//       <h2 id="component-architecture">Component Architecture</h2>
//       <p>The foundation of any scalable React application lies in its component architecture. By following the principle of separation of concerns and creating reusable components, we can build applications that are both maintainable and extensible.</p>
      
//       <h3>Container vs Presentational Components</h3>
//       <p>One of the most important patterns is separating your components into containers (smart components) and presentational components (dumb components). Container components handle logic and state management, while presentational components focus purely on rendering UI.</p>
      
//       <div class="code-block">
//         <pre><code>// Container Component
// const UserListContainer = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   useEffect(() => {
//     fetchUsers().then(data => {
//       setUsers(data);
//       setLoading(false);
//     });
//   }, []);
  
//   return &lt;UserList users={users} loading={loading} /&gt;;
// };

// // Presentational Component
// const UserList = ({ users, loading }) => {
//   if (loading) return &lt;div&gt;Loading...&lt;/div&gt;;
  
//   return (
//     &lt;div&gt;
//       {users.map(user => (
//         &lt;UserCard key={user.id} user={user} /&gt;
//       ))}
//     &lt;/div&gt;
//   );
// };</code></pre>
//       </div>
      
//       <h2 id="state-management">State Management</h2>
//       <p>As your application grows, managing state becomes increasingly complex. Consider using state management libraries like Redux, Zustand, or Context API for global state management.</p>
      
//       <h3>When to Use Local vs Global State</h3>
//       <p>Not all state needs to be global. Use local state for component-specific data and global state for data that needs to be shared across multiple components.</p>
      
//       <blockquote class="quote">
//         "The key to successful state management is knowing when to lift state up and when to keep it local." - React Team
//       </blockquote>
      
//       <h2 id="performance-optimization">Performance Optimization</h2>
//       <p>Performance is crucial for user experience. Here are some key optimization techniques:</p>
//       <ul class="list">
//         <li>Use React.memo for component memoization</li>
//         <li>Implement code splitting with React.lazy</li>
//         <li>Optimize bundle size with tree shaking</li>
//         <li>Use proper key props in lists</li>
//         <li>Implement virtual scrolling for large lists</li>
//       </ul>
      
//       <h2 id="testing-strategy">Testing Strategy</h2>
//       <p>A comprehensive testing strategy includes unit tests, integration tests, and end-to-end tests. Use tools like Jest, React Testing Library, and Cypress to ensure your application works as expected.</p>
      
//       <h3>Testing Best Practices</h3>
//       <p>Focus on testing behavior rather than implementation details. Write tests that give you confidence in your application's functionality.</p>
      
//       <h2 id="conclusion">Conclusion</h2>
//       <p>Building scalable React applications requires careful planning and adherence to best practices. By following these patterns and continuously refactoring your code, you can create applications that stand the test of time.</p>
      
//       <p>Remember, scalability isn't just about handling more users—it's about creating code that can evolve with your requirements and team.</p>
//     `,
//     author: {
//       name: "Alex Johnson",
//       avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%234F46E5'/%3E%3Ctext x='50' y='58' text-anchor='middle' fill='white' font-size='36' font-family='Arial'%3EAJ%3C/text%3E%3C/svg%3E",
//       bio: "Full-stack developer with 5+ years of experience in React and Node.js. Passionate about clean code and scalable architecture."
//     },
//     publishedAt: "2024-03-15",
//     readTime: "8 min read",
//     tags: ["React", "JavaScript", "Web Development", "Architecture", "Best Practices"],
//     category: "Development",
//     image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='600' viewBox='0 0 1200 600'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2361DAFB;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%234F46E5;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='600' fill='url(%23grad1)'/%3E%3Ctext x='600' y='320' text-anchor='middle' fill='white' font-size='48' font-family='Arial' font-weight='bold'%3EReact Architecture%3C/text%3E%3Ctext x='600' y='380' text-anchor='middle' fill='white' font-size='24' font-family='Arial' opacity='0.8'%3EBuilding Scalable Applications%3C/text%3E%3C/svg%3E"
//   };

//   const relatedPosts = [
//     {
//       id: 2,
//       title: "Advanced React Hooks: Custom Hooks and Performance",
//       excerpt: "Dive deep into React hooks and learn how to create custom hooks for better code reusability.",
//       readTime: "6 min read",
//       image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Cdefs%3E%3ClinearGradient id='grad2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23F59E0B;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23EF4444;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='200' fill='url(%23grad2)'/%3E%3Ctext x='150' y='110' text-anchor='middle' fill='white' font-size='24' font-family='Arial' font-weight='bold'%3EReact Hooks%3C/text%3E%3C/svg%3E"
//     },
//     {
//       id: 3,
//       title: "TypeScript with React: A Complete Guide",
//       excerpt: "Learn how to integrate TypeScript with React for better type safety and developer experience.",
//       readTime: "10 min read",
//       image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Cdefs%3E%3ClinearGradient id='grad3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2310B981;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%233B82F6;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='200' fill='url(%23grad3)'/%3E%3Ctext x='150' y='110' text-anchor='middle' fill='white' font-size='20' font-family='Arial' font-weight='bold'%3ETypeScript + React%3C/text%3E%3C/svg%3E"
//     },
//     {
//       id: 4,
//       title: "React Performance Optimization Techniques",
//       excerpt: "Comprehensive guide to optimizing React applications for better performance and user experience.",
//       readTime: "7 min read",
//       image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Cdefs%3E%3ClinearGradient id='grad4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%238B5CF6;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23EC4899;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='200' fill='url(%23grad4)'/%3E%3Ctext x='150' y='100' text-anchor='middle' fill='white' font-size='18' font-family='Arial' font-weight='bold'%3EPerformance%3C/text%3E%3Ctext x='150' y='125' text-anchor='middle' fill='white' font-size='18' font-family='Arial' font-weight='bold'%3EOptimization%3C/text%3E%3C/svg%3E"
//     }
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 100);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleLike = () => {
//     setIsLiked(!isLiked);
//     setLikes(prev => isLiked ? prev - 1 : prev + 1);
//   };

//   const handleShare = async () => {
//     if (navigator.share) {
//       try {
//         await navigator.share({
//           title: blogData.title,
//           text: blogData.excerpt,
//           url: window.location.href,
//         });
//       } catch (err) {
//         console.log('Error sharing:', err);
//       }
//     } else {
//       // Fallback - copy to clipboard
//       try {
//         await navigator.clipboard.writeText(window.location.href);
//         alert('Link copied to clipboard!');
//       } catch (err) {
//         console.log('Could not copy link');
//       }
//     }
//   };

//   const handleBackClick = () => {
//     // In a real app, this would use router navigation
//     console.log('Navigate back to blog list');
//   };

//   const handleRelatedPostClick = (postId) => {
//     // In a real app, this would navigate to the specific blog post
//     console.log('Navigate to blog post:', postId);
//   };

//   return (
//     <div className="blog-detail-page">
//       {/* Fixed Header */}
//       <header className={`fixed-header ${isScrolled ? 'scrolled' : ''}`}>
//         <div className="header-container">
//           <button
//             onClick={handleBackClick}
//             className="back-button"
//           >
//             <ArrowLeft size={20} />
//             <span>Back to Blog</span>
//           </button>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <div className="hero-section">
//         <div className="hero-container">
//           {/* Breadcrumb */}
//           <nav className="breadcrumb">
//             <span>Blog</span>
//             <ChevronRight size={16} />
//             <span className="breadcrumb-current">{blogData.category}</span>
//           </nav>

//           {/* Title and Meta */}
//           <div className="title-section">
//             <h1 className="blog-title">
//               {blogData.title}
//             </h1>

//             <div className="meta-info">
//               <div className="author-info">
//                 <img
//                   src={blogData.author.avatar}
//                   alt={blogData.author.name}
//                   className="author-avatar"
//                 />
//                 <div>
//                   <div className="author-name">{blogData.author.name}</div>
//                   <div className="author-bio">{blogData.author.bio}</div>
//                 </div>
//               </div>

//               <div className="date-info">
//                 <div className="date-item">
//                   <Calendar size={16} />
//                   <span>{new Date(blogData.publishedAt).toLocaleDateString('en-US', {
//                     year: 'numeric',
//                     month: 'long',
//                     day: 'numeric'
//                   })}</span>
//                 </div>
//                 <div className="date-item">
//                   <Clock size={16} />
//                   <span>{blogData.readTime}</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Featured Image */}
//           <div className="featured-image-container">
//             <img
//               src={blogData.image}
//               alt={blogData.title}
//               className="featured-image"
//             />
//             <div className="image-overlay" />
//           </div>

//           {/* Tags */}
//           <div className="tags-container">
//             {blogData.tags.map((tag, index) => (
//               <span
//                 key={index}
//                 className="tag"
//               >
//                 <Tag size={14} />
//                 {tag}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="main-content">
//         <div className="content-grid">
//           {/* Article Content */}
//           <article className="article-content">
//             <div
//               className="prose"
//               dangerouslySetInnerHTML={{ __html: blogData.content }}
//             />

//             {/* Action Buttons */}
//             <div className="action-buttons">
//               <div className="social-buttons">
//                 <button
//                   onClick={handleLike}
//                   className={`action-btn ${isLiked ? 'liked' : ''}`}
//                 >
//                   <Heart size={18} fill={isLiked ? 'currentColor' : 'none'} />
//                   <span>{likes}</span>
//                 </button>

//                 <button className="action-btn">
//                   <MessageCircle size={18} />
//                   <span>{comments}</span>
//                 </button>
//               </div>

//               <button
//                 onClick={handleShare}
//                 className="share-btn"
//               >
//                 <Share2 size={18} />
//                 <span>Share</span>
//               </button>
//             </div>
//           </article>

//           {/* Sidebar */}
//           <aside className="sidebar">
//             <div className="sidebar-sticky">
//               {/* Author Card */}
//               <div className="sidebar-card">
//                 <div className="author-card">
//                   <img
//                     src={blogData.author.avatar}
//                     alt={blogData.author.name}
//                     className="author-card-avatar"
//                   />
//                   <h3 className="author-card-name">{blogData.author.name}</h3>
//                   <p className="author-card-bio">{blogData.author.bio}</p>
//                   <button className="follow-btn">
//                     Follow
//                   </button>
//                 </div>
//               </div>

//               {/* Table of Contents */}
//               <div className="sidebar-card">
//                 <h3 className="sidebar-title">
//                   <BookOpen size={18} />
//                   Table of Contents
//                 </h3>
//                 <nav className="toc">
//                   <a href="#component-architecture" className="toc-link">
//                     Component Architecture
//                   </a>
//                   <a href="#state-management" className="toc-link">
//                     State Management
//                   </a>
//                   <a href="#performance-optimization" className="toc-link">
//                     Performance Optimization
//                   </a>
//                   <a href="#testing-strategy" className="toc-link">
//                     Testing Strategy
//                   </a>
//                 </nav>
//               </div>

//               {/* Quick Stats */}
//               <div className="sidebar-card">
//                 <h3 className="sidebar-title">Article Stats</h3>
//                 <div className="stats">
//                   <div className="stat-item">
//                     <span className="stat-label">Reading time</span>
//                     <span className="stat-value">{blogData.readTime}</span>
//                   </div>
//                   <div className="stat-item">
//                     <span className="stat-label">Published</span>
//                     <span className="stat-value">
//                       {new Date(blogData.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
//                     </span>
//                   </div>
//                   <div className="stat-item">
//                     <span className="stat-label">Views</span>
//                     <span className="stat-value">2.3k</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </aside>
//         </div>
//       </div>

//       {/* Related Posts */}
//       <section className="related-posts">
//         <div className="related-container">
//           <h2 className="related-title">Related Articles</h2>
//           <div className="related-grid">
//             {relatedPosts.map((post) => (
//               <article
//                 key={post.id}
//                 className="related-card"
//                 onClick={() => handleRelatedPostClick(post.id)}
//               >
//                 <div className="related-card-content">
//                   <div className="related-image-container">
//                     <img
//                       src={post.image}
//                       alt={post.title}
//                       className="related-image"
//                     />
//                   </div>
//                   <div className="related-text">
//                     <h3 className="related-card-title">
//                       {post.title}
//                     </h3>
//                     <p className="related-card-excerpt">
//                       {post.excerpt}
//                     </p>
//                     <div className="related-meta">
//                       <Clock size={14} />
//                       <span>{post.readTime}</span>
//                     </div>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default BlogDetailPage;