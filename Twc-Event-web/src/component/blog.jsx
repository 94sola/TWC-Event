import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, Calendar, Tag } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { AiOutlineArrowUp } from "react-icons/ai"; 
import wedd from "../assets/image/twc11.jpg";
import birthday from "../assets/image/birthday.jpg";
import conference from "../assets/image/corporatre.jpg";

// Sample data for posts
const posts = [
  {
    title: "Top 10 Wedding Themes for 2025",
    excerpt: "Discover the most enchanting wedding themes of 2025, from fairytale forest to boho chic. TWC Event Services provides unmatched expertise in creating unforgettable wedding experiences.",
    date: "April 20, 2025",
    tag: "Weddings",
    image: wedd,
    comments: [] // Will hold user comments
  },
  {
    title: "Corporate Events That Impress",
    excerpt: "How to plan unforgettable corporate events that boost morale and impress clients. TWC specializes in creating professional yet engaging events tailored to your company's goals.",
    date: "March 15, 2025",
    tag: "Corporate",
    image: conference,
    comments: [] // Will hold user comments
  },
  {
    title: "Birthday Bash Ideas for All Ages",
    excerpt: "Creative themes and party hacks for every milestone birthday celebration. TWC knows how to design memorable birthdays that delight guests of all ages.",
    date: "February 27, 2025",
    tag: "Birthdays",
    image: birthday,
    comments: [] // Will hold user comments
  },
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [postsToShow, setPostsToShow] = useState(3); // Number of posts to display
  const [newComment, setNewComment] = useState(""); // State for comment input
  const [postsData, setPostsData] = useState(posts); // To hold posts with comments
  const [showBackToTop, setShowBackToTop] = useState(false); // For back-to-top button visibility

  // Function to close modal
  const closeModal = () => setSelectedPost(null);

  // Function to load more posts
  const loadMorePosts = () => setPostsToShow(postsToShow + 3);

  // Function to handle comment submission
  const submitComment = (postIndex) => {
    const updatedPosts = [...postsData];
    updatedPosts[postIndex].comments.push(newComment);
    setPostsData(updatedPosts);
    setNewComment(""); // Clear the input field
  };

  // Handle scroll event to show back-to-top button
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  // Scroll to the top when the back-to-top button is clicked
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Use effect to listen for scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Get the index of the selected post
  const currentPostIndex = postsData.indexOf(selectedPost);

  // Function to go to next post
  const goToNextPost = () => {
    if (currentPostIndex < postsData.length - 1) {
      setSelectedPost(postsData[currentPostIndex + 1]);
    }
  };

  // Function to go to previous post
  const goToPreviousPost = () => {
    if (currentPostIndex > 0) {
      setSelectedPost(postsData[currentPostIndex - 1]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-white to-yellow-50 py-12 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-orange-600 mb-4"
        >
          ✍️ TWC Blog
        </motion.h2>

        <p className="text-center text-gray-700 mb-10 text-lg max-w-2xl mx-auto">
          Expert tips, event inspiration, and behind-the-scenes stories from TWC.
        </p>

        {/* Filter Tags */}
        <div className="flex justify-center mb-10 gap-4">
          <button className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition">
            All Posts
          </button>
          <button className="bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 transition">
            Weddings
          </button>
          <button className="bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 transition">
            Corporate
          </button>
          <button className="bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 transition">
            Birthdays
          </button>
        </div>

        <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-2">
          {postsData.slice(0, postsToShow).map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:scale-[1.02] transition duration-300"
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col justify-between flex-grow">
                <h3 className="text-xl font-bold text-orange-700 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Tag className="w-4 h-4" /> {post.tag}
                  </span>
                </div>
                <button
                  className="mt-3 text-orange-600 font-bold hover:underline text-sm"
                  onClick={() => setSelectedPost(post)}
                >
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {postsToShow < postsData.length && (
          <button
            onClick={loadMorePosts}
            className="mt-8 px-6 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition"
          >
            Load More
          </button>
        )}

        {/* Modal for Full Post */}
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-orange-500"
                onClick={closeModal}
              >
                ✕
              </button>
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="rounded-xl mb-4"
              />
              <h2 className="text-2xl font-bold text-orange-700 mb-2">
                {selectedPost.title}
              </h2>
              <p className="text-sm text-gray-500 mb-2">#{selectedPost.tag}</p>
              <p className="text-gray-700 leading-relaxed">
                {selectedPost.excerpt} <br />
                More details about the event, services offered, and the incredible experience that TWC delivers.
              </p>

              {/* Social Sharing */}
              <div className="mt-6 flex gap-4">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FaFacebook className="w-6 h-6" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>

              {/* Comment Section */}
              <div className="mt-6">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full p-3 border rounded-md"
                  rows="4"
                  placeholder="Leave a comment..."
                />
                <button
                  onClick={() => submitComment(postsData.indexOf(selectedPost))}
                  className="mt-2 px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition"
                >
                  Submit Comment
                </button>
              </div>

              {/* Comments List */}
              {selectedPost.comments.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-800">Comments:</h3>
                  <ul>
                    {selectedPost.comments.map((comment, index) => (
                      <li key={index} className="mt-2 text-gray-600">
                        {comment}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Navigation */}
              <div className="mt-8 flex justify-between">
                <button
                  onClick={goToPreviousPost}
                  className="px-6 py-2 bg-gray-300 text-gray-800 rounded-full hover:bg-gray-400 transition"
                >
                  Previous Post
                </button>
                <button
                  onClick={goToNextPost}
                  className="px-6 py-2 bg-gray-300 text-gray-800 rounded-full hover:bg-gray-400 transition"
                >
                  Next Post
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 bg-orange-600 text-white rounded-full p-4 shadow-lg hover:bg-orange-700 transition"
          >
            <AiOutlineArrowUp className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Blog;
