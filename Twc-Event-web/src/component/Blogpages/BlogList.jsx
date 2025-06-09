
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const snap = await getDocs(collection(db, 'posts'));
      setPosts(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchData();
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-8 p-4 lg:p-12">
      {posts.map(post => <BlogCard key={post.id} post={post} />)}
    </div>
  );
};

export default BlogList;