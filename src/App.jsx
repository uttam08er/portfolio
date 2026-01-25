import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './components/routes/AppLayout';
import './App.css';

// Layout components
import Home from './components/routes/Home';
import About from './components/layout/About';
import Services from './components/layout/Services';
import Blogs from './components/blogs/Blogs';
import Contact from './components/layout/Contact';
import NotFound from './components/routes/NotFound';
import Projects from './components/projects/Projects';
import BackNav from './components/routes/BackNav';
import ProjectDetails, { ProjectDetailsLoader } from './components/projects/ProjectDetails';
import BlogDetailsPage, { BlogDetailsLoader } from './components/blogs/BlogDetailsPage';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <NotFound />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <><BackNav /><About /></>
        },
        {
          path: '/services',
          element: <><BackNav /><Services /></>
        },
        {
          path: '/projects',
          element: <Projects />
        },
        {
          path: '/projects/:projectId',
          element: <ProjectDetails />,
          loader: ProjectDetailsLoader,
          errorElement: <NotFound />
        },
        {
          path: '/blogs',
          element: <Blogs />
        },
        {
          path: '/blogs/:blogsId',
          element: <BlogDetailsPage />,
          loader: BlogDetailsLoader,
          errorElement: <NotFound />
        },
        {
          path: '/contact',
          element: <><BackNav /><Contact /></>
        }
      ]
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;