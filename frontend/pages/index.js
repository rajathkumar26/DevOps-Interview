import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../components/Home.module.css';

const instance = axios.create({
  baseURL: process.env.BACKEND_URL
})

function Home() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(instance.defaults.baseURL);
  const fetchPosts = async () => {
    try {
      const response = await instance.get('/api/posts', { baseURL: process.env.BACKEND_URL });
      setPosts(response.data);
    } catch (error) {
      setError('Failed to fetch posts');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (!title || !content) {
      setError('Title and content are required');
      return;
    }

    try {
      const response = await instance.post('/api/posts', { title, content });
      setPosts([...posts, response.data]);
      setTitle('');
      setContent('');
    } catch (error) {
      setError('Failed to create post');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog</h1>

      <form className={styles['form-group']} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            className={styles.input}
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="content">Content</label>
          <textarea
            className={styles.textarea}
            id="content"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
        </div>

        {error && <div className={styles.error}>{error}</div>}

        <button className={styles.button} type="submit">Create post</button>
      </form>

      <h2 className={styles.subtitle}>Posts</h2>

      {posts.length === 0 ? (
        <div className={styles.message}>No posts yet</div>
      ) : (
        <ul className={styles.list}>
          {posts.map((post) => (
            <li key={post.id} className={styles.post}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
