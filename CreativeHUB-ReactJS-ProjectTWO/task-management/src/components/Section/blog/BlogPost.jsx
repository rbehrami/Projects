import React from 'react'
import BlogHome from '../blog/BlogHome'

const BlogPost = ({title,description,image}) => {
  return (
  
    <article>
      <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1">
  <div className="relative">
    <img src={image} alt={title} className='h-45'/>
    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
      New
    </div>
  </div>
  <div className="p-6">
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
      Read More
    </button>
  </div>
</div>
    </article>
  
  
  
  

  )
}

export default BlogPost;
