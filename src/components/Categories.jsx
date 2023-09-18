import React from 'react'
import './Categories.css'

const Categories = () => {
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
        { name: 'News & Politics' },
        // { name: 'Howto & Style' },
        // { name: 'Education' },
        // { name: 'Science & Technology' },
        // { name: 'Nonprofits & Activism' }
      ];
      
  return (
    <div className="category-container" >
      {categories.map((category, index) => (
        <button key={index} className="category">
           {category.name}
        </button> 
      ))}
    </div>
  )
}

export default Categories
