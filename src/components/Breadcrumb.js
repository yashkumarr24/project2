import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaChevronRight } from 'react-icons/fa';
import './Breadcrumb.css';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbNameMap = {
    '/': 'Home',
    '/services': 'Services',
    '/booking': 'Book Appointment',
    '/about': 'About Us',
    '/contact': 'Contact Us',
    '/blog': 'Blog'
  };

  if (location.pathname === '/') {
    return null; // Don't show breadcrumb on homepage
  }

  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <div className="container">
        <ol className="breadcrumb-list">
          <li className="breadcrumb-item">
            <Link to="/" className="breadcrumb-link">
              <FaHome />
              <span>Home</span>
            </Link>
          </li>
          
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const displayName = breadcrumbNameMap[routeTo] || name.charAt(0).toUpperCase() + name.slice(1);

            return (
              <li key={routeTo} className="breadcrumb-item">
                <FaChevronRight className="breadcrumb-separator" />
                {isLast ? (
                  <span className="breadcrumb-current" aria-current="page">
                    {displayName}
                  </span>
                ) : (
                  <Link to={routeTo} className="breadcrumb-link">
                    {displayName}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
      
      {/* Structured Data for Breadcrumb */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://yashcar.vercel.app/"
            },
            ...pathnames.map((name, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
              const displayName = breadcrumbNameMap[routeTo] || name.charAt(0).toUpperCase() + name.slice(1);
              return {
                "@type": "ListItem",
                "position": index + 2,
                "name": displayName,
                "item": `https://yashcar.vercel.app${routeTo}`
              };
            })
          ]
        })}
      </script>
    </nav>
  );
};

export default Breadcrumb;
