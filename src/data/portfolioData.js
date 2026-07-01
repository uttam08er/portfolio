import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiRedux,
  SiReactrouter,
  SiFastapi,
  SiFlask,
  SiPython,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiFigma,
  SiGithub,
  SiVite,
  SiGit
} from "react-icons/si";

import {
  MonitorCheck,
  CodeXml,
  TabletSmartphone,
  Frame,
  Unplug,
  Layers,
  Download
} from "lucide-react";

export const personalInfo = {
  name: "Uttam Kumar",
  role: ["Web Developer", "React Developer", "UI/UX Designer"],
  tagline: "Building modern web experiences with React and cutting-edge technologies. Explore my projects, learn more about me, and discover how I can help bring your ideas to life.",
  email: "uttamkrp08@gmail.com",
  github: "https://github.com/uttam08er",
  linkedin: "https://linkedin.com/in/uttam08er",
  twitter: "",
  location: "India",
  available: true,
};

export const stats = [
  { label: "Projects Completed", value: 20, suffix: "+" },
  { label: "Technologies Learned", value: 15, suffix: "+" },
  { label: "GitHub Commits", value: 300, suffix: "+" },
  { label: "Months Learning", value: 18, suffix: "+" },
];

export const skills = {
  Frontend: [
    { name: "React.js", level: 90, icon: SiReact },
    { name: "JavaScript", level: 88, icon: SiJavascript },
    { name: "HTML5", level: 95, icon: SiHtml5 },
    { name: "CSS3", level: 90, icon: SiCss },
    { name: "Tailwind CSS", level: 92, icon: SiTailwindcss },
    { name: "Redux Toolkit", level: 80, icon: SiRedux },
    { name: "React Router", level: 85, icon: SiReactrouter },
  ],
  Backend: [
    { name: "Node.js", level: 70, icon: SiNodedotjs },
    { name: "Express.js", level: 68, icon: SiExpress },
    { name: "REST APIs", level: 75, icon: Unplug },
    { name: "Python", level: 75, icon: SiPython },
    { name: "FastAPI", level: 60, icon: SiFastapi },
    { name: "Flask", level: 70, icon: SiFlask },
  ],
  Database: [
    { name: "PostgreSQL", level: 72, icon: SiPostgresql },
    { name: "MySQL", level: 72, icon: SiMysql },
    { name: "MongoDB", level: 65, icon: SiMongodb },
  ],
  Design: [
    { name: "Figma", level: 80, icon: SiFigma },
    { name: "UI/UX Design", level: 78, icon: Frame },
  ],
  Tools: [
    { name: "Git", level: 85, icon: SiGit },
    { name: "GitHub", level: 85, icon: SiGithub },
    { name: "Responsive Design", level: 90, icon: TabletSmartphone },
    { name: "Vite", level: 80, icon: SiVite },
  ],
};

export const projects = [
  {
    id: 'pt-6',
    title: "Evently – Event Booking Platform",
    description: "A full-stack event booking platform where users can discover, create, and book events. Features user authentication, event management, and a seamless booking experience.",
    longDescription: "Developed a complete event management solution with React frontend and Node.js/Express backend. Users can browse events by category, book tickets, and manage their reservations. Admins can create and manage events through a dedicated dashboard.",
    image: "/project2.jpg",
    tags: ["React", "Node.js", "Express.js", "MySQL"],
    github: "https://github.com/uttam08er/evanto",
    live: "https://evanto-mern.vercel.app/",
    featured: true,
    Download: false,
    category: ["React", "Node.js", "Full Stack"],
    features: [
      "JWT-based user authentication",
      "Event browsing with category filters",
      "Real-time seat availability",
      "Booking management dashboard",
      "Responsive design for all devices"
    ],
    color: "#f65ca9",
    icon: '🎪'
  },
  {
    id: 'pt-5',
    title: "Smart Traffic Violation Detection System",
    description: "An AI-powered system that detects traffic violations in real-time using computer vision. Automatically identifies vehicles, reads license plates via OCR, and logs violations to a database.",
    longDescription: "Built an intelligent traffic management system that uses YOLOv8 for real-time object detection and OpenCV for video processing. The system identifies traffic violations, extracts license plate data using OCR, and provides a React-based dashboard for monitoring.",
    image: "/project1.jpg",
    tags: ["React", "Python", "YOLOv8", "OpenCV", "OCR", "Flask", "MySQL"],
    github: "https://github.com/uttamkumar/traffic-detection",
    live: "#",
    featured: true,
    Download: false,
    category: ["React", "Python", "AI/ML"],
    features: [
      "Real-time vehicle detection using YOLOv8",
      "Automatic license plate recognition via OCR",
      "React dashboard for violation management",
      "MySQL database for logging violations",
      "Flask REST API backend"
    ],
    color: "#ea9c4d",
    icon: '🚦'
  },

  {
    id: 'pt-4',
    title: "Shaurya eServices - Cyber-cafe management system",
    description: "Engineered a scalable cyber cafe management platform that automates customer service requests, booking management, and administrative operations.",
    longDescription: "A web-based management system designed to digitize cyber cafe operations. The platform enables customers to browse available services, submit service requests, and track booking status, while administrators can manage users, services, pricing, and operational records through a centralized dashboard. The system improves efficiency, reduces manual work, and provides a user-friendly experience for both customers and staff.",
    image: "",
    tags: ["React", "Tailwind CSS", "Python", "Flask", "PostgreSQL", "REST APIs", "JWT Authentication"],
    github: "https://github.com/uttam08er/cyber-cafe",
    live: "https://shauryaeservices.vercel.app/",
    featured: true,
    Download: false,
    category: ["React", "Python", "Full Stack", "web app"],
    features: [
      "JWT-based Authentication",
      "User Registration & Login",
      "Dashboard for managing services and requests",
      "Service request tracking",
      "Database Integration",
      "Responsive design for all devices"
    ],
    color: "#0EA5E9",
    icon: '🖥️'
  },

  {
    id: 'pt-3',
    title: "Factify – AI news headlines analyser (Real or Fake)",
    description: "An AI-powered news analysis platform that helps users determine the credibility of news articles. Uses machine learning to classify news as real or fake and provides detailed analysis.",
    longDescription: "An AI-powered news analysis platform that helps users determine the credibility of news articles. Uses machine learning to classify news as real or fake and provides detailed analysis.",
    image: "",
    tags: ["React", "Python", "Flask", "Pandas"],
    github: "https://github.com/uttam08er/factify",
    live: "https://factify-ten.vercel.app/",
    featured: true,
    Download: false,
    category: ["React", "Python", "Flask"],
    features: [
      "News analysis with AI",
      "Fake news detection using machine learning",
      "News classification and scoring",
      "Use openAI API key - for more details"
    ],
    color: "#e2194f",
    icon: '🔍'
  },

  // {
  //   id: 'pt-2',
  //   title: "E-Commerce Platform",
  //   description: "A feature-rich e-commerce platform with complete shopping experience including product search, cart management, Stripe payments, and an admin dashboard for store management.",
  //   longDescription: "Built a production-ready e-commerce solution with advanced features like JWT authentication, product search with filters, shopping cart with local persistence, Stripe payment integration, and a comprehensive admin dashboard for inventory and order management.",
  //   image: "/project3.jpg",
  //   tags: ["React", "Node.js", "Redux", "Stripe", "JWT", "MySQL"],
  //   github: "https://github.com/uttamkumar/ecommerce",
  //   live: "#",
  //   featured: true,
  //   Download: false,
  //   category: ["React", "Full Stack", "Node.js"],
  //   features: [
  //     "JWT Authentication & Authorization",
  //     "Advanced product search & filters",
  //     "Redux-powered shopping cart",
  //     "Stripe payment integration",
  //     "Admin dashboard for inventory",
  //     "Order tracking system"
  //   ],
  //   color: "#0EA5E9",
  //   icon: '🛒'
  // },
  {
    id: 'pt-2',
    title: "SafeKey - Password Analyzer & Generator",
    description: "A password analyzer desktop application that allows users to generate strong passwords, check password strength, and copy their passwords.",
    longDescription: "A desktop application that provides comprehensive password management features. Users can generate secure passwords with customizable criteria, evaluate password strength using advanced algorithms, and securely store their passwords with encryption.",
    image: "",
    tags: ["Python", "Tkinter", "Matplotlib", "Pyinstaller"],
    github: "https://github.com/uttam08er/SafeKey",
    live: "https://github.com/uttam08er/SafeKey/releases/download/v1.0.0/SafeKey.exe",
    featured: true,
    Download: true,
    category: ["Desktop App"],
    features: [
      "Password generation with customizable criteria",
      "Advanced password strength evaluation",
      "Secure password storage with encryption",
      "Password suggestion based on password strength",
      "Live entropy graph"
    ],
    color: "#10B981",
    icon: '🔒'
  },

  // {
  //   id: 'pt-1',
  //   title: "IoT AC Tube Light Brightness Control",
  //   description: "An IoT solution for smart home automation that allows remote control of AC tube light brightness using NodeMCU microcontroller and mobile app.",
  //   longDescription: "Designed and built an IoT system using NodeMCU ESP8266 that enables wireless control of AC tube light brightness. The system uses PWM control with TRIAC dimmer circuit and communicates via WiFi to a mobile-friendly web interface.",
  //   image: "",
  //   tags: ["NodeMCU", "IoT", "ESP8266", "C++", "HTML", "Sensors"],
  //   github: "https://github.com/uttamkumar/iot-brightness",
  //   live: "#",
  //   featured: false,
  //   Download: false,
  //   category: ["IoT", "Hardware"],
  //   features: [
  //     "Remote brightness control via WiFi",
  //     "Real-time dimming with PWM",
  //     "Mobile-friendly web interface",
  //     "Energy usage monitoring",
  //     "Schedule-based automation"
  //   ],
  //   color: "#10B981",
  //   icon: '💡'
  // },
  {
    id: 'pt-1',
    title: "WheatherAPP - Get real-time weather data",
    description: "A weather web app that allows users to search for weather information by location and get real-time weather data.",
    longDescription: "This responsive weather web app delivers instantaneous, hyper-localized meteorological data globally. Users input any city, postal code, or landmark into a dynamic search bar to access live environmental conditions. The platform aggregates data from trusted meteorological agencies to provide real-time updates on temperature, humidity, wind velocity, UV index, and atmospheric pressure.",
    image: "",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/uttam08er/WeatherApp",
    live: "https://uttam08er.github.io/WeatherApp/",
    featured: false,
    Download: false,
    category: ["Web-app"],
    features: [
      "Get Current Weather Data for any Location",
      "Real-time temperature",
      "Humidity",
      "Wind Velocity",
      "UV Index",
      "Atmospheric Pressure",
      "Mobile-friendly web interface"
    ],
    color: "#5610b9",
    icon: '🌦️'
  },
];

export const timeline = [
  {
    year: "2022",
    title: "Started Web Development",
    description: "Began my journey with HTML, CSS, and JavaScript. Built my first static websites and fell in love with frontend development.",
  },
  {
    year: "2023",
    title: "Learned React.js",
    description: "Dived deep into React ecosystem — hooks, state management, routing. Built several practice projects to solidify understanding.",
  },
  {
    year: "2024",
    title: "Full Stack Exploration",
    description: "Expanded into Node.js, Express, and MySQL. Started building full-stack applications with REST APIs.",
  },
  {
    year: "2025",
    title: "Major Projects Built",
    description: "Developed Smart Traffic Detection System, Evently platform, and E-Commerce solution — gaining real-world project experience.",
  },
  {
    year: "2026",
    title: "Exploring AI & IoT",
    description: "Integrated YOLOv8 AI into web projects and built IoT solutions. Learning advanced frontend patterns and system design.",
  },
];

export const services = [
  {
    title: "Frontend Development",
    description: "Building pixel-perfect, high-performance web applications with modern HTML, CSS, and JavaScript.",
    icon: MonitorCheck,
    color: "#6366F1",
  },
  {
    title: "React Development",
    description: "Creating scalable React applications with hooks, context, Redux, and best practices for production.",
    icon: CodeXml,
    color: "#0EA5E9",
  },
  {
    title: "Responsive Web Design",
    description: "Designing mobile-first, fully responsive layouts that look perfect on every device and screen size.",
    icon: TabletSmartphone,
    color: "#10B981",
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive user interfaces in Figma with focus on user experience and visual aesthetics.",
    icon: Frame,
    color: "#e687d3",
  },
  {
    title: "API Integration",
    description: "Connecting frontends to REST APIs, third-party services, and backend systems efficiently.",
    icon: Unplug,
    color: "#F59E0B",
  },
  {
    title: "Performance Optimization",
    description: "Optimizing web apps for speed, accessibility, and SEO using modern best practices.",
    icon: Layers,
    color: "#EF4444",
  },
];

export const achievements = [
  { title: "Projects Built", value: "10+", icon: "🏗️", color: "#6366F1" },
  { title: "GitHub Stars", value: "50+", icon: "⭐", color: "#8B5CF6" },
  { title: "Technologies", value: "15+", icon: "🛠️", color: "#0EA5E9" },
  { title: "Commits", value: "300+", icon: "📝", color: "#10B981" },
];

export const blogPosts = [
  {
    id: 1,
    title: "10 React Hooks You Must Know in 2025",
    excerpt: "A deep dive into the most important React hooks — useState, useEffect, useCallback, useMemo, and custom hooks that will level up your React skills.",
    category: "React",
    readTime: "8 min read",
    date: "Dec 15, 2024",
    color: "#c64788",
    tags: ["React", "Hooks", "JavaScript"],
    banner: "⚛️",
    author: "Uttam Kumar",
    bio: "Full-stack developer in React and Node.js.",
    views: "2.4k",
    likes: 184,
    content: [
      {
        type: "intro",
        text: "React Hooks revolutionized the way we write React components. Introduced in React 16.8, hooks allow functional components to use state, lifecycle methods, and other React features that were previously exclusive to class components. In this comprehensive guide, we'll explore the 10 most essential hooks you need to master in 2025."
      },
      {
        type: "heading",
        text: "1. useState — The Foundation"
      },
      {
        type: "text",
        text: "The useState hook is the most fundamental hook in React. It allows you to add state to functional components. Every time the state changes, React re-renders the component with the new value."
      },
      {
        type: "code",
        lang: "jsx",
        text: `import { useState } from 'react';

        function Counter() {
          const [count, setCount] = useState(0);

          return (
            <div>
              <p>Count: {count}</p>
              <button onClick={() => setCount(count + 1)}>
                Increment
              </button>
              <button onClick={() => setCount(prev => prev - 1)}>
                Decrement
              </button>
            </div>
          );
        }`
      },
      {
        type: "tip",
        text: "💡 Pro Tip: When the new state depends on the old state, always use the functional form: setCount(prev => prev + 1). This ensures you're working with the most current value, especially in async contexts."
      },
      {
        type: "heading",
        text: "2. useEffect — Side Effects Made Simple"
      },
      {
        type: "text",
        text: "useEffect lets you perform side effects in functional components — data fetching, subscriptions, DOM manipulation, and more. It replaces componentDidMount, componentDidUpdate, and componentWillUnmount from class components."
      },
      {
        type: "code",
        lang: "jsx",
        text: `import { useState, useEffect } from 'react';

        function UserProfile({ userId }) {
          const [user, setUser] = useState(null);
          const [loading, setLoading] = useState(true);

          useEffect(() => {
            setLoading(true);
            fetch(\`/api/users/\${userId}\`)
              .then(res => res.json())
              .then(data => {
                setUser(data);
                setLoading(false);
              });

            // Cleanup function
            return () => {
              setUser(null);
            };
          }, [userId]); // Re-run when userId changes

          if (loading) return <div>Loading...</div>;
          return <div>{user?.name}</div>;
        }`
      },
      {
        type: "heading",
        text: "3. useCallback — Memoize Functions"
      },
      {
        type: "text",
        text: "useCallback returns a memoized version of a callback function. This is especially useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders."
      },
      {
        type: "code",
        lang: "jsx",
        text: `import { useState, useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  // Without useCallback, this creates a new function every render
  const handleClick = useCallback(() => {
    console.log('Button clicked!');
    setCount(c => c + 1);
  }, []); // Empty deps = function never changes

  return (
    <div>
      <p>Count: {count}</p>
      <ExpensiveChild onClick={handleClick} />
    </div>
  );
}`
      },
      {
        type: "heading",
        text: "4. useMemo — Expensive Computation Caching"
      },
      {
        type: "text",
        text: "useMemo memoizes the result of an expensive computation, recalculating only when dependencies change. Use it when you have a computation that is expensive and doesn't need to re-run on every render."
      },
      {
        type: "code",
        lang: "jsx",
        text: `import { useMemo, useState } from 'react';

function ProductList({ products, searchTerm }) {
  // This expensive filter only re-runs when products or searchTerm changes
  const filteredProducts = useMemo(() => {
    return products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  return (
    <ul>
      {filteredProducts.map(p => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  );
}`
      },
      {
        type: "heading",
        text: "5. useContext — Global State Without Props Drilling"
      },
      {
        type: "text",
        text: "useContext provides a way to pass data through the component tree without having to pass props down manually at every level. Perfect for themes, authentication state, and language preferences."
      },
      {
        type: "code",
        lang: "jsx",
        text: `import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Use anywhere in the tree
function Button() {
  const { isDark, setIsDark } = useContext(ThemeContext);
  return (
    <button
      style={{ background: isDark ? '#1E293B' : '#F8FAFC' }}
      onClick={() => setIsDark(!isDark)}
    >
      Toggle Theme
    </button>
  );
}`
      },
      {
        type: "heading",
        text: "6. useRef — DOM Access & Persistent Values"
      },
      {
        type: "text",
        text: "useRef returns a mutable ref object whose .current property persists for the full lifetime of the component. Use it for accessing DOM elements directly or storing values that don't trigger re-renders."
      },
      {
        type: "code",
        lang: "jsx",
        text: `import { useRef, useEffect } from 'react';

function AutoFocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // Access DOM directly
  }, []);

  // Store previous value without re-render
  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <div>
      <input ref={inputRef} placeholder="Auto-focused!" />
      <p>Rendered {renderCount.current} times</p>
    </div>
  );
}`
      },
      {
        type: "heading",
        text: "7. useReducer — Complex State Logic"
      },
      {
        type: "text",
        text: "useReducer is an alternative to useState for managing complex state logic. When state has multiple sub-values or when the next state depends on the previous state in a complex way, useReducer shines."
      },
      {
        type: "code",
        lang: "jsx",
        text: `import { useReducer } from 'react';

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { ...state, count: state.count + state.step };
    case 'decrement': return { ...state, count: state.count - state.step };
    case 'setStep': return { ...state, step: action.payload };
    case 'reset': return initialState;
    default: throw new Error('Unknown action');
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>Count: {state.count} | Step: {state.step}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}`
      },
      {
        type: "heading",
        text: "8. useLayoutEffect — Synchronous Effects"
      },
      {
        type: "text",
        text: "useLayoutEffect fires synchronously after all DOM mutations but before the browser paints. Use it when you need to read layout from the DOM and synchronously re-render to avoid a visual flicker."
      },
      {
        type: "tip",
        text: "⚠️ Warning: Prefer useEffect when possible. useLayoutEffect can block visual updates and hurt performance. Only use it when you need to measure DOM elements before painting."
      },
      {
        type: "heading",
        text: "9. useId — Unique IDs for Accessibility"
      },
      {
        type: "text",
        text: "useId (React 18+) generates unique IDs that are stable across server and client renders. Perfect for linking form labels to inputs for accessibility."
      },
      {
        type: "code",
        lang: "jsx",
        text: `import { useId } from 'react';

function FormField({ label, type }) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} />
    </div>
  );
}

// Each instance gets a unique, stable ID
// <FormField label="Email" type="email" />
// <FormField label="Password" type="password" />`
      },
      {
        type: "heading",
        text: "10. Custom Hooks — The Real Superpower"
      },
      {
        type: "text",
        text: "Custom hooks let you extract component logic into reusable functions. A custom hook is a JavaScript function whose name starts with 'use' and that may call other hooks. This is where React's composability truly shines."
      },
      {
        type: "code",
        lang: "jsx",
        text: `// useFetch - a reusable data fetching hook
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    
    fetch(url, { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then(setData)
      .catch(err => {
        if (err.name !== 'AbortError') setError(err.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}

// Usage — clean and reusable!
function UserCard({ id }) {
  const { data: user, loading, error } = useFetch(\`/api/users/\${id}\`);
  
  if (loading) return <Spinner />;
  if (error) return <Error message={error} />;
  return <div>{user.name}</div>;
}`
      },
      {
        type: "heading",
        text: "Wrapping Up"
      },
      {
        type: "text",
        text: "Mastering these 10 hooks will dramatically improve your React code quality. Start with the basics (useState, useEffect), progress to optimization hooks (useCallback, useMemo), and build your own custom hooks to create reusable, clean abstractions. The real power of React hooks lies in composability — combining them to create elegant, maintainable solutions."
      },
      {
        type: "tip",
        text: "🚀 Next Steps: Explore React Query (TanStack Query) for server state, Zustand or Redux Toolkit for global state, and React Hook Form for form management — all built on top of these foundational hooks!"
      }
    ]
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS: Tips & Tricks",
    excerpt: "Practical tips for writing efficient Tailwind CSS — from custom config to utility patterns that keep your code clean and maintainable.",
    category: "CSS",
    readTime: "6 min read",
    date: "Nov 28, 2024",
    color: "#157dcc",
    tags: ["Tailwind", "CSS", "Design"],
    banner: "🎨",
    author: "Uttam Kumar",
    bio: "Full-stack developer in React and Node.js.",
    views: "1.8k",
    likes: 142,
    content: [
      {
        type: "intro",
        text: "Tailwind CSS has become the go-to utility-first CSS framework for modern web development. But beyond the basics, there are powerful patterns and tricks that can supercharge your workflow. Let's explore the tips that senior developers use to write cleaner, faster Tailwind code."
      },
      {
        type: "heading",
        text: "1. Extend the Theme Instead of Overriding"
      },
      {
        type: "text",
        text: "Never override Tailwind's default theme when you can extend it. Extending keeps all default utilities intact while adding your own custom values."
      },
      {
        type: "code",
        lang: "js",
        text: `//tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#EEF2FF',
          500: '#6366F1',
          900: '#312E81',
        },
        glass: 'rgba(255,255,255,0.1)',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    }
  }
}`
      },
      {
        type: "heading",
        text: "2. Use @apply for Repeating Patterns"
      },
      {
        type: "text",
        text: "@apply lets you extract repeated utility patterns into custom CSS classes. Use it sparingly — only when a pattern repeats 3+ times and doesn't change."
      },
      {
        type: "code",
        lang: "css",
        text: `/* globals.css */
@layer components {
  .btn-primary {
    @apply px-6 py-3 bg-indigo-500 hover:bg-indigo-600 
           text-white font-semibold rounded-xl 
           transition-all duration-200 
           shadow-lg hover:shadow-indigo-500/30
           active:scale-95;
  }

  .card-glass {
    @apply bg-white/5 backdrop-blur-xl 
           border border-white/10 rounded-2xl
           hover:-translate-y-1 transition-transform;
  }

  .gradient-text {
    @apply bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500
           bg-clip-text text-transparent;
  }
}`
      },
      {
        type: "heading",
        text: "3. The Group and Peer Pattern"
      },
      {
        type: "text",
        text: "The group modifier lets you style children based on the parent's state. peer lets siblings respond to each other's state. These are incredibly powerful for interactive UI."
      },
      {
        type: "code",
        lang: "jsx",
        text: `// Group: hover parent to style child
<div className="group cursor-pointer p-4 rounded-xl hover:bg-indigo-50">
  <h3 className="font-bold group-hover:text-indigo-600 transition-colors">
    Card Title
  </h3>
  <p className="text-gray-500 group-hover:text-gray-700">
    Description text
  </p>
  <span className="opacity-0 group-hover:opacity-100 transition-opacity">
    → Read more
  </span>
</div>

// Peer: input state affects sibling label
<div>
  <input 
    type="email"
    className="peer border-2 border-gray-200 focus:border-indigo-500 rounded-lg p-3 outline-none"
    placeholder=" "
  />
  <label className="text-gray-400 peer-focus:text-indigo-500 transition-colors">
    Email Address
  </label>
</div>`
      },
      {
        type: "heading",
        text: "4. Responsive Design with Mobile-First"
      },
      {
        type: "text",
        text: "Tailwind is mobile-first by default. Unprefixed utilities apply to all screen sizes, and prefixed ones (sm:, md:, lg:, xl:) apply at that breakpoint and above."
      },
      {
        type: "code",
        lang: "jsx",
        text: `// Mobile first — think small screen first, then scale up
<div className="
  grid 
  grid-cols-1        // 1 column on mobile
  sm:grid-cols-2     // 2 columns on tablet
  lg:grid-cols-3     // 3 columns on desktop
  xl:grid-cols-4     // 4 columns on wide screens
  gap-4 lg:gap-6
">
  {items.map(item => (
    <div className="
      p-4 lg:p-6
      text-sm lg:text-base
      rounded-xl lg:rounded-2xl
    ">
      {item.title}
    </div>
  ))}
</div>`
      },
      {
        type: "heading",
        text: "5. Dark Mode Done Right"
      },
      {
        type: "text",
        text: "Tailwind's dark: variant makes dark mode effortless. Configure it with 'class' strategy for toggle control, or 'media' to follow system preference."
      },
      {
        type: "code",
        lang: "js",
        text: `// tailwind.config.js
module.exports = {
  darkMode: 'class', // Toggle via JS by adding 'dark' class to <html>
  // or 'media' for automatic system preference
}

// Usage in components
// <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">

// Toggle dark mode
document.documentElement.classList.toggle('dark');`
      },
      {
        type: "tip",
        text: "💡 Pro Tip: Use CSS variables with Tailwind for dynamic theming. Define --color-primary in :root and use it in your config as primary: 'rgb(var(--color-primary))'. Then change the variable with JS for instant theme switching!"
      },
      {
        type: "heading",
        text: "6. Arbitrary Values for One-offs"
      },
      {
        type: "text",
        text: "Tailwind's arbitrary value syntax lets you use any CSS value without adding it to your config. Use square brackets for one-off values you don't need as a full utility."
      },
      {
        type: "code",
        lang: "jsx",
        text: `// Arbitrary values with [] syntax
<div className="
  w-[342px]                    // exact width
  h-[calc(100vh-80px)]        // calc()
  bg-[#B05CCA]                 // exact hex color
  text-[clamp(1rem,3vw,2rem)] // clamp()
  grid-cols-[2fr_1fr]         // custom grid
  top-[117px]                  // exact position
  shadow-[0_20px_60px_rgba(99,102,241,0.3)] // custom shadow
">
  Content
</div>`
      },
      {
        type: "heading",
        text: "7. Performance: Purge Unused Styles"
      },
      {
        type: "text",
        text: "Tailwind generates thousands of utility classes in development but purges unused ones in production, resulting in tiny CSS files. Make sure your content paths are correctly configured."
      },
      {
        type: "code",
        lang: "js",
        text: `// tailwind.config.js — ensure all template files are scanned
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    // Add any other template sources
  ],
}

// ⚠️ Don't build class names dynamically:
// ❌ className={\`text-\${color}-500\`}  // Purged!
// ✅ className={color === 'red' ? 'text-red-500' : 'text-blue-500'}`
      },
      {
        type: "heading",
        text: "Conclusion"
      },
      {
        type: "text",
        text: "Tailwind CSS rewards those who invest time to learn its patterns. Use @apply for true component reuse, embrace group/peer modifiers for interactive states, and leverage arbitrary values for the occasional custom need. The result is a codebase that's faster to write, easier to maintain, and trivially responsive."
      }
    ]
  },
  {
    id: 3,
    title: "JavaScript Async/Await: The Complete Guide",
    excerpt: "Everything you need to know about asynchronous JavaScript — Promises, async/await, error handling, and real-world patterns.",
    category: "JavaScript",
    readTime: "10 min read",
    date: "Nov 10, 2024",
    color: "#e8b006",
    tags: ["JavaScript", "Async", "Web Dev"],
    banner: "🟨",
    author: "Uttam Kumar",
    bio: "Full-stack developer in React and Node.js.",
    views: "3.1k",
    likes: 267,
    content: [
      {
        type: "intro",
        text: "Asynchronous JavaScript is at the heart of modern web development. Whether you're fetching data from an API, reading files, or handling user interactions, understanding async patterns is essential. This guide takes you from Callbacks to Promises to async/await — with real-world patterns you'll use every day."
      },
      {
        type: "heading",
        text: "The Problem: JavaScript is Single-Threaded"
      },
      {
        type: "text",
        text: "JavaScript runs on a single thread, meaning it can only do one thing at a time. Without asynchronous patterns, a slow network request would freeze your entire application. The event loop is JavaScript's solution — it allows non-blocking operations by offloading them and handling results via callbacks."
      },
      {
        type: "heading",
        text: "Stage 1: Callbacks (The Old Way)"
      },
      {
        type: "text",
        text: "Callbacks were the original async solution. A callback is a function passed as an argument to be called when an operation completes. They work, but deeply nested callbacks create the infamous 'callback hell'."
      },
      {
        type: "code",
        lang: "js",
        text: `// Callback hell — deeply nested, hard to read
getUser(userId, function(err, user) {
  if (err) return handleError(err);
  
  getOrders(user.id, function(err, orders) {
    if (err) return handleError(err);
    
    getOrderDetails(orders[0].id, function(err, details) {
      if (err) return handleError(err);
      
      // Finally have what we need — 3 levels deep!
      render(user, orders, details);
    });
  });
});`
      },
      {
        type: "heading",
        text: "Stage 2: Promises (The Better Way)"
      },
      {
        type: "text",
        text: "Promises represent a value that may not be available yet. A Promise is in one of three states: pending, fulfilled, or rejected. They enable chaining with .then() and .catch(), eliminating callback hell."
      },
      {
        type: "code",
        lang: "js",
        text: `// Creating a Promise
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Promise chaining — much cleaner!
getUser(userId)
  .then(user => getOrders(user.id))
  .then(orders => getOrderDetails(orders[0].id))
  .then(details => render(details))
  .catch(err => handleError(err))
  .finally(() => setLoading(false));

// Promise.all — run multiple in parallel
Promise.all([
  fetchUser(id),
  fetchPosts(id),
  fetchComments(id)
]).then(([user, posts, comments]) => {
  // All three resolved!
  render(user, posts, comments);
});

// Promise.allSettled — don't fail if one rejects
Promise.allSettled([
  fetchRequired(),
  fetchOptional(),
]).then(results => {
  results.forEach(result => {
    if (result.status === 'fulfilled') use(result.value);
    if (result.status === 'rejected') log(result.reason);
  });
});`
      },
      {
        type: "heading",
        text: "Stage 3: async/await (The Modern Way)"
      },
      {
        type: "text",
        text: "async/await is syntactic sugar over Promises that makes async code look and feel synchronous. An async function always returns a Promise. The await keyword pauses execution until the Promise resolves."
      },
      {
        type: "code",
        lang: "js",
        text: `// The same logic as callbacks — but clean and readable!
async function loadDashboard(userId) {
  const user = await getUser(userId);
  const orders = await getOrders(user.id);
  const details = await getOrderDetails(orders[0].id);
  
  return render(user, orders, details);
}

// Parallel requests with async/await
async function loadProfile(userId) {
  // ❌ Sequential — slow! Each waits for the previous
  const user = await fetchUser(userId);
  const posts = await fetchPosts(userId);

  // ✅ Parallel — fast! All start at the same time
  const [user, posts] = await Promise.all([
    fetchUser(userId),
    fetchPosts(userId)
  ]);
  
  return { user, posts };
}`
      },
      {
        type: "heading",
        text: "Error Handling Patterns"
      },
      {
        type: "text",
        text: "Proper error handling is crucial in async code. There are several patterns — choose based on whether you want to handle errors locally or let them bubble up."
      },
      {
        type: "code",
        lang: "js",
        text: `// Pattern 1: try/catch (most common)
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
    return await response.json();
  } catch (error) {
    console.error('Fetch failed:', error.message);
    throw error; // Re-throw if caller should handle it
  }
}

// Pattern 2: .catch() chaining
const data = await fetchData(url).catch(err => {
  console.error(err);
  return null; // Default fallback value
});

// Pattern 3: Helper that never throws (Go-style)
async function safe(promise) {
  try {
    const data = await promise;
    return [null, data];
  } catch (error) {
    return [error, null];
  }
}

// Clean usage
const [error, user] = await safe(fetchUser(id));
if (error) return handleError(error);
doSomethingWith(user);`
      },
      {
        type: "heading",
        text: "Real-World Pattern: AbortController"
      },
      {
        type: "text",
        text: "In React and other frameworks, you often need to cancel async operations when a component unmounts or when a new request supersedes the old one. AbortController is the modern solution."
      },
      {
        type: "code",
        lang: "js",
        text: `// React hook with proper cleanup
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        setLoading(true);
        const res = await fetch(url, { 
          signal: controller.signal 
        });
        if (!res.ok) throw new Error('Request failed');
        const json = await res.json();
        setData(json);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    load();

    // Cleanup: abort if component unmounts or url changes
    return () => controller.abort();
  }, [url]);

  return { data, error, loading };
}`
      },
      {
        type: "heading",
        text: "Advanced: Async Iterators"
      },
      {
        type: "text",
        text: "for await...of lets you iterate over async data streams, like streaming API responses. This is increasingly important with AI streaming APIs and Server-Sent Events."
      },
      {
        type: "code",
        lang: "js",
        text: `// Streaming AI response (like ChatGPT)
async function streamResponse(prompt) {
  const response = await fetch('/api/ai/stream', {
    method: 'POST',
    body: JSON.stringify({ prompt })
  });

  const reader = response.body.getReader();
  const decoder = new TextDecoder();

  // Read chunks as they arrive
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    
    const chunk = decoder.decode(value);
    appendToUI(chunk); // Update UI incrementally
  }
}

// Async generator function
async function* paginate(url) {
  let page = 1;
  while (true) {
    const data = await fetch(\`\${url}?page=\${page}\`).then(r => r.json());
    if (!data.items.length) break;
    yield data.items;
    page++;
  }
}

for await (const items of paginate('/api/posts')) {
  renderItems(items);
}`
      },
      {
        type: "tip",
        text: "🚀 Key Takeaways: Always use async/await over raw Promises for readability. Use Promise.all for parallel requests. Handle errors with try/catch and always clean up with AbortController in React effects. For long operations, consider showing loading states and error boundaries."
      },
      {
        type: "heading",
        text: "Conclusion"
      },
      {
        type: "text",
        text: "Async JavaScript mastery is what separates good developers from great ones. Start with understanding the event loop, practice Promises until they feel natural, then embrace async/await as your default. The patterns here — safe wrappers, AbortController, parallel fetching — are what you'll use in production every day."
      }
    ]
  }
];