import React from 'react';
import { useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase';

const AdminDashboard = () => {
  const [form, setForm] = useState({ title: '', tag: '', content: '', excerpt: '' });
  const [image, setImage] = useState(null);

  const handleUpload = async () => {
    const imageRef = ref(storage, `blogs/${image.name}`);
    await uploadBytes(imageRef, image);
    return await getDownloadURL(imageRef);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageURL = await handleUpload();
    await addDoc(collection(db, 'posts'), {
      ...form,
      date: Timestamp.now(),
      imageURL,
    });
    alert('Post added!');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 space-y-4">
      <input placeholder="Title" onChange={e => setForm({ ...form, title: e.target.value })} className="input" />
      <input placeholder="Tag" onChange={e => setForm({ ...form, tag: e.target.value })} className="input" />
      <input placeholder="Excerpt" onChange={e => setForm({ ...form, excerpt: e.target.value })} className="input" />
      <textarea placeholder="Content (HTML allowed)" onChange={e => setForm({ ...form, content: e.target.value })} className="input h-32" />
      <input type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Post</button>
    </form>
  );
};

export default AdminDashboard;
