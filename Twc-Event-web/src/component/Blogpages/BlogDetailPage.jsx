import React from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../firebase/config';

const BlogDetailPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const docSnap = await getDoc(doc(db, 'posts', id));
      if (docSnap.exists()) setPost({ id: docSnap.id, ...docSnap.data() });
    };
    fetchPost();
  }, [id]);

  return post ? <BlogDetail post={post} /> : <p>Loading...</p>;
};

export default BlogDetailPage;
