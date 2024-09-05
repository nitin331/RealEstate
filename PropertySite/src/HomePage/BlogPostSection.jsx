// src/components/BlogPostSection.jsx
import React from 'react';

const blogPosts = [
  {
    title: 'Building Gains Into Housing Stocks And How To Trade The Sector',
    date: '20 June 2024',
    author: 'Sam Mehta',
    description: 'Lorem Ipsum is simply dummy text of printing industry Lorem Ipsum been industry standard dummy text since book.',
    image: '/images/kitchen.jpg',
  },
  {
    title: '92% Of Millennial Homebuyers Say Inflation Has Impacted Their Plans',
    date: '20 June 2024',
    author: 'Jenny Parera',
    description: 'Lorem Ipsum is simply dummy text of printing industry Lorem Ipsum been industry standard dummy text since book.',
    image: '/images/milleniel.jpg',
  },
  {
    title: 'We Are Hiring \'Moderately,\' Says Compass CEO',
    date: '20 June 2024',
    author: 'Siddesh Joshi',
    description: 'Lorem Ipsum is simply dummy text of printing industry Lorem Ipsum been industry standard dummy text since book.',
    image: '/images/img3.jpg',
  },
];

const BlogPostSection = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
        <div className="text-center text-red-500 mb-4">OUR BLOG AND ARTICLES</div>
      <h2 className="text-center text-3xl font-semibold mb-8">Latest Blog Post</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
            <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <div className="text-gray-500 text-sm mb-4">
              <span>{post.date}</span> <span>By, {post.author}</span>
            </div>
            <p className="text-gray-700">{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPostSection;
