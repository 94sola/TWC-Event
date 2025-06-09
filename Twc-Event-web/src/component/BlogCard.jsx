// components/BlogCard.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogCard = ({ post }) => (
  <motion.div className="rounded-xl shadow-lg overflow-hidden bg-white" whileHover={{ scale: 1.02 }}>
    <img src={post.imageURL} alt={post.title} className="h-56 w-full object-cover" />
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p className="text-sm text-gray-500">{new Date(post.date).toDateString()} | {post.tag}</p>
      <p className="mt-2 text-gray-700">{post.excerpt}</p>
      <Link to={`/blog/${post.id}`} className="text-blue-600 font-semibold mt-4 block">Read more →</Link>
    </div>
  </motion.div>
);

export default BlogCard;