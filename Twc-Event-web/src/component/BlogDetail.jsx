import React from 'react';

const BlogDetail = ({ post }) => (
  <div className="max-w-3xl mx-auto p-4">
    <img src={post.imageURL} alt={post.title} className="w-full h-72 object-cover rounded-xl mb-6" />
    <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
    <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()} • {post.tag}</p>
    <div className="mt-6 prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
  </div>
);

export default BlogDetail;
