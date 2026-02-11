import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Calendar, Clock, Share2, Heart, MessageCircle, Tag, ChevronRight, BookOpen } from 'lucide-react';
import blogsData from '../../assets/data/blogs-data.json';
import NotAvailable from '../routes/NotAvailable';
import BackNav from '../routes/BackNav';
import { toast } from '../ui/Toast';
import './styles/BlogDetailsPage.css';

export const BlogDetailsLoader = ({ params }) => {
  const blog = blogsData.find(item => item.blogsId?.toString() === params.blogsId);

  if (!blog) {
    throw new Response("Not Found", { status: 404 });
  }
  return blog;
}

const BlogDetailsPage = () => {
  const blog = useLoaderData();
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(42);
  const [comments, setComments] = useState(12);
  const { showBlog, title, excerpt, category, publishedAt, readTime, featuredImage, author, toc, tags, content, likeCount } = blog;

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: excerpt,
          url: window.location.href,
        });
      } catch (err) {
        toast.error('Error sharing:', err);
      }
    } else {
      // Fallback - copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        toast.info('Link copied to clipboard!');
      } catch (err) {
        toast.error('Could not copy link, try after some time.');
      }
    }
  };

  return (
    <>
      {showBlog ? (
        <>
          <BackNav />
          <div className="container">
            <div className="hero-section">
              <div className="hero-container">
                {/* Breadcrumb */}
                <nav className="breadcrumb">
                  <span>Blog</span>
                  <ChevronRight size={16} />
                  <span className="breadcrumb-current">{category}</span>
                </nav>

                {/* Title and Meta */}
                <div className="title-section">
                  <h1>
                    {title}
                  </h1>

                  <div className="meta-info">
                    <div className="author-info">
                      <div className="author-avatar" style={{ backgroundImage: `${featuredImage}` }}>UK</div>
                      <div>
                        <p className="author-name">{author.name}</p>
                        <p className="simple-text">{author.bio}</p>
                      </div>
                    </div>

                    <div className="date-info">
                      <div className="date-item">
                        <Calendar size={16} />
                        <span>{new Date(publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}</span>
                      </div>
                      <div className="date-item">
                        <Clock size={16} />
                        <span>{readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Featured Image */}
                <div className="featured-image-container">
                  <div className="featured-image" style={{ backgroundImage: `${featuredImage}` }}>
                    {excerpt}
                  </div>
                </div>

                {/* Tags */}
                <div className="tags-container">
                  {tags.map((tag, index) => (
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
                  {content.map((item, index) => (
                    <div
                      key={index}
                      className="prose"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  ))}

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
                    <nav className="toc" >
                      {toc.map((item, index) => (
                        <a
                          key={index}
                          href={`#${item.id}`}
                          className="toc-link"
                        >
                          {item.title}
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Quick Stats */}
                  <div className="sidebar-card">
                    <h3 className="sidebar-title">Article Stats</h3>
                    <div className="stats">
                      <div className="stat-item">
                        <span className="stat-label">Reading time</span>
                        <span className="stat-value">{readTime}</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Published</span>
                        <span className="stat-value">
                          {new Date(publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
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
        </>
      ) : (<NotAvailable />)}
    </>
  );
};

export default BlogDetailsPage;