import React, { useState, useEffect } from 'react';
import './Categories.css';

const Categories = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Adjust the screen width breakpoint as needed
  const categories = [
    { name: 'Film & Animation' },
    { name: 'Autos & Vehicles' },
    { name: 'Music' },
    { name: 'Pets & Animals' },
    { name: 'Sports' },
    { name: 'Travel & Events' },
    { name: 'Gaming' },
    { name: 'People & Blogs' },
    { name: 'Comedy' },
    { name: 'Entertainment' },
    // { name: 'News & Politics' },
    // { name: 'Howto & Style' },
    // { name: 'Education' },
    // { name: 'Science & Technology' },
    // { name: 'Nonprofits & Activism' }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the screen width breakpoint as needed
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const displayedCategories = isMobile ? categories.slice(0, 3) : categories;

  return (
    <div className="category-container">
      {displayedCategories.map((category, index) => (
        <button key={index} className="category">
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default Categories;
