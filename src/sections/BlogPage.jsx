import { useEffect, useState } from 'react';
import { motion} from 'framer-motion';
import {
  FiArrowLeft,
  FiClock,
  FiCalendar,
  FiHeart,
  FiShare2,
  FiChevronRight,
  FiCheck,
  FiLink
} from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { blogPosts } from '../data/portfolioData';
import { codeToHtml } from "shiki";

const likeColor = '#ec0f0f'

/* ── Syntax-highlighted code block ── */
function CodeBlock({ code, lang }) {
  const [copied, setCopied] = useState(false);
  const [html, setHtml] = useState("");

  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    async function highlight() {
      const result = await codeToHtml(code, {
        lang: lang,
        theme: "github-dark",
        transformers: [
          {
            pre(node) {
              node.properties.style =
                "background:transparent;";
            },
          },
        ],
      });

      setHtml(result);
    }

    highlight();
  }, [code, lang]);

  return (
    <div style={{
      background: 'var(--bg-darker)',
      borderRadius: '16px',
      overflow: 'hidden',
      margin: '1.75rem 0',
      border: '1px solid rgba(255,255,255,0.08)',
      boxShadow: '0 4px 30px rgba(0,0,0,0.3)',
    }}>
      {/* Header bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.7rem 1.25rem',
        background: 'rgba(255,255,255,0.04)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F57' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FFBD2E' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28C840' }} />
          <span style={{ marginLeft: '0.5rem', fontSize: '0.72rem', color: 'var(--text-dark-300)', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '1px' }}>{lang}</span>
        </div>
        <button
          onClick={copy}
          style={{
            background: copied ? 'rgba(34,197,94,0.15)' : 'rgba(255,255,255,0.06)',
            border: `1px solid ${copied ? 'rgba(34,197,94,0.3)' : 'rgba(255,255,255,0.1)'}`,
            borderRadius: '8px',
            padding: '0.3rem 0.7rem',
            cursor: 'pointer',
            color: copied ? '#22C55E' : 'var(--text-dark-300)',
            fontSize: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            transition: 'all 0.2s',
          }}
        >
          {copied ? <><FiCheck size={12} /> Copied!</> : <><FiLink size={12} /> Copy</>}
        </button>
      </div>
      {/* Code */}
      <div style={{ overflowX: 'auto', padding: '1.25rem' }}>
        <pre style={{ margin: 0, fontFamily: "'Fira Code', 'Cascadia Code', 'JetBrains Mono', monospace", fontSize: '0.85rem', lineHeight: 1.7, color: 'var(--bg-light)' }}>
          <code dangerouslySetInnerHTML={{ __html: html }} />
        </pre>
      </div>
    </div>
  );
}

/* ── Tip/callout block ── */
function TipBlock({ text, isDark }) {
  const isWarning = text.startsWith('⚠️');
  const color = isWarning ? '#F59E0B' : '#2FA4D7';
  return (
    <div style={{
      background: `${color}12`,
      border: `1px solid ${color}30`,
      borderLeft: `4px solid ${color}`,
      borderRadius: '12px',
      padding: '1.1rem 1.25rem',
      margin: '1.75rem 0',
      fontSize: '0.9rem',
      lineHeight: 1.8,
      color: isDark ? 'var(--text-dark-100)' : 'var(--text-light-100)',
    }}>
      {text}
    </div>
  );
}

/* ── Table of contents ── */
function TableOfContents({ headings, isDark }) {
  const [active, setActive] = useState(0);
  return (
    <div style={{
      background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.85)',
      border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(99,102,241,0.12)',
      borderRadius: '16px',
      padding: '1.25rem',
      marginBottom: '2rem',
    }}>
      <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.75rem' }}>
        Contents
      </p>
      {headings.map((h, i) => (
        <button
          key={i}
          onClick={() => setActive(i)}
          style={{
            display: 'block',
            width: '100%',
            textAlign: 'left',
            background: 'none',
            border: 'none',
            padding: '0.35rem 0.5rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '0.82rem',
            color: active === i ? 'var(--primary)' : isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)',
            fontWeight: active === i ? 600 : 400,
            transition: 'all 0.2s',
            borderLeft: active === i ? '2px solid var(--primary)' : '2px solid transparent',
            paddingLeft: '0.75rem',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = 'var(--primary)'; }}
          onMouseLeave={e => { if (active !== i) e.currentTarget.style.color = isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)'; }}
        >
          {h}
        </button>
      ))}
    </div>
  );
}

/* ── Main BlogPage ── */
export default function BlogPage({ postId, onBack }) {
  const { isDark } = useTheme();
  const [liked, setLiked] = useState(false);
  const post = blogPosts.find(p => p.id === postId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postId]);

  if (!post) return null;

  const headings = post.content.filter(b => b.type === 'heading').map(b => b.text);
  const otherPosts = blogPosts.filter(p => p.id !== postId);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback - copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        console.info('Link copied to clipboard!');
      } catch (err) {
        console.error('Could not copy link, try after some time.');
      }
    };
  };

  const card = {
    background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.85)',
    border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(99,102,241,0.12)',
    borderRadius: '20px',
    backdropFilter: 'blur(10px)',
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ minHeight: '100vh', paddingTop: '70px' }}
    >

      {/* Content area */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem 3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'start' }} className="blog-layout">

        {/* Article */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{gridColumn: "1 / -2"}}
        >
          {/* Back button */}
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.2rem',
              padding: '0 0 1rem 0',
              color: isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)',
              fontSize: '0.875rem',
              fontWeight: 600,
              transition: 'all 0.2s',
            }}
          >
            <span
              onClick={onBack}
              style={{ cursor: 'pointer' }}
              onMouseEnter={e => { e.currentTarget.style.color = post.color; e.currentTarget.style.borderColor = `${post.color}40`; }}
              onMouseLeave={e => {
                e.currentTarget.style.color = isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)';
                e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(99,102,241,0.15)';
              }}
            >
              Blog
            </span><FiChevronRight size={16} />
            <span style={{ color: post.color }}>{post.category}</span>
          </motion.button>

          {/* Hero banner */}
          <div style={{
            padding: '0 0 2rem',
            borderBottom: `1px solid ${post.color}40`,
          }}>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                fontWeight: 800,
                fontFamily: 'Poppins',
                color: post.color,
                lineHeight: 1.25,
                margin: '1rem 0 1.25rem',
              }}
            >
              {post.title}
            </motion.h1>

            {/* Meta row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '1.5rem' }}
            >
              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  background: `linear-gradient(135deg, ${post.color}, ${post.color}aa)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontWeight: 700, fontSize: '0.85rem',
                }}>UK</div>
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 500, color: isDark ? 'var(--text-dark-100)' : 'var(--text-light-100)' }}>{post.author}</div>
                  <div style={{ fontSize: '0.72rem', color: isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)' }}>{post.bio}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {[
                  { icon: FiCalendar, text: post.date },
                  { icon: FiClock, text: post.readTime },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.82rem', color: isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)' }}>
                    <Icon size={13} /> {text}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}
            >
              {post.tags.map(t => (
                <span key={t} style={{
                  background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(99, 163, 241, 0.06)',
                  border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(99,102,241,0.12)',
                  borderRadius: '8px',
                  padding: '0.25rem 0.65rem',
                  fontSize: '0.75rem',
                  color: isDark ? 'var(--text-dark-300)' : 'var(--text-light-00)',
                }}>{t}</span>
              ))}
            </motion.div>
          </div>

          {post.content.map((block, i) => {
            if (block.type === 'intro') return (
              <p key={i} style={{
                fontSize: '1rem',
                lineHeight: 1.9,
                color: isDark ? 'var(--text-dark-100)' : 'var(--text-light-100)',
                fontWeight: 400,
                padding: '1.5rem',
                background: isDark ? `${post.color}20` : `${post.color}20`,
                border: `1px solid ${post.color}25`,
                borderLeft: `4px solid ${post.color}`,
                borderRadius: '12px',
                marginTop: '2rem',
                marginBottom: '2.5rem',
              }}>{block.text}</p>
            );

            if (block.type === 'heading') return (
              <h2 key={i} style={{
                fontSize: '1.45rem',
                fontWeight: 800,
                fontFamily: 'Poppins',
                color: isDark ? 'var(--text-dark-100)' : 'var(--text-light-100)',
                marginTop: i === 0 ? 0 : '2.5rem',
                marginBottom: '1rem',
                paddingBottom: '0.5rem',
                borderBottom: `1px solid ${isDark ? '#ffffff35' : '#0f0e0e35'}`,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                {/* <span style={{ color: post.color, fontSize: '1rem' }}>§</span> */}
                {block.text}
              </h2>
            );

            if (block.type === 'text') return (
              <p key={i} style={{
                fontSize: '1rem',
                lineHeight: 1.9,
                color: isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)',
                marginBottom: '1.25rem',
              }}>{block.text}</p>
            );

            if (block.type === 'code') return (
              <CodeBlock key={i} code={block.text} lang={block.lang} />
            );

            if (block.type === 'tip') return (
              <TipBlock key={i} text={block.text} isDark={isDark} />
            );

            return null;
          })}

          {/* Like / share row */}
          <div style={{
            ...card,
            padding: '1.5rem',
            marginTop: '3rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setLiked(l => !l)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  background: liked ? `${likeColor}15` : isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(99, 172, 241, 0.05)',
                  border: `1px solid ${liked ? likeColor + '50' : isDark ? 'rgba(255,255,255,0.1)' : 'rgba(99,102,241,0.12)'}`,
                  borderRadius: '50px', padding: '0.6rem 1.1rem',
                  cursor: 'pointer',
                  color: liked ? likeColor : isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)',
                  fontSize: '0.875rem', fontWeight: 600, transition: 'all 0.2s',
                }}
              >
                <FiHeart size={16} fill={liked ? 'currentColor' : 'none'} />
                {post.likes + (liked ? 1 : 0)}
              </motion.button>

            </div>

            <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleShare()}
                style={{
                  fontSize: '0.82rem',
                  color: 'var(--primary)', display: 'flex',
                  alignItems: 'center', gap: '0.3rem',
                  background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(99, 163, 241, 0.05)',
                  border: `1px solid isDark ? 'rgba(255,255,255,0.1)' : 'rgba(99,102,241,0.12)'}`,
                  borderRadius: '10px', padding: '0.5rem 0.9rem',
                  cursor: 'pointer',
                }}>
                <FiShare2 size={13} /> Share

              </motion.button>
            </div>
          </div>

          {/* More articles */}
          <div style={{ marginTop: '3rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, fontFamily: 'Poppins', color: isDark ? '#F1F5F9' : '#0F172A', marginBottom: '1.25rem' }}>
              More Articles
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {otherPosts.map(p => (
                <motion.button
                  key={p.id}
                  whileHover={{ x: 4 }}
                  onClick={() => {
                    // onBack();
                    setTimeout(() => {
                      const evt = new CustomEvent('openBlogPost', { detail: p.id });
                      window.dispatchEvent(evt);
                    }, 50);
                  }}
                  style={{
                    ...card,
                    padding: '1rem 1.25rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    border: 'none',
                    textAlign: 'left',
                    width: '100%',
                    transition: 'all 0.2s',
                  }}
                >
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '12px',
                    background: `${p.color}20`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.4rem', flexShrink: 0,
                  }}>{p.banner}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '0.82rem', color: p.color, fontWeight: 700, marginBottom: '0.2rem' }}>{p.category}</div>
                    <div style={{
                      fontSize: '0.9rem', fontWeight: 700,
                      color: isDark ? 'var(--text-dark-100)' : 'var(--text-light-100)',
                      overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                    }}>{p.title}</div>
                    <div style={{ fontSize: '0.75rem', color: isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)', marginTop: '0.2rem' }}>{p.readTime}</div>
                  </div>
                  <FiArrowLeft size={14} style={{ color: isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)', transform: 'rotate(180deg)', flexShrink: 0 }} />
                </motion.button>
              ))}
            </div>
          </div>
        </motion.article>

        {/* Sidebar */}
        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{ position: 'sticky', top: '90px', width: '280px' }}
          className="blog-sidebar"
        >
          <TableOfContents headings={headings} isDark={isDark} />

          {/* Author card */}
          <div style={{ ...card, padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '50%',
                background: 'var(--primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', fontWeight: 700,
              }}>UK</div>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: isDark ? 'var(--text-dark-100)' : 'var(--text-light-100)' }}>{post.author}</div>
                <div style={{ fontSize: '0.75rem', color: isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)' }}>Frontend Developer</div>
              </div>
            </div>
            <p style={{ fontSize: '0.82rem', color: isDark ? 'var(--text-dark-300)' : 'var(--text-light-300)', lineHeight: 1.7 }}>
              CS student passionate about React, UI/UX, and modern web technologies.
            </p>
          </div>
        </motion.aside>
      </div>

      <style>{`
        @media (max-width: 992px) {
          // .blog-layout { grid-template-columns: 1fr !important; }
          .blog-sidebar { display: none !important; }
        }
      `}</style>
    </motion.div>
  );
}
