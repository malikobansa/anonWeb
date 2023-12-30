import React, {useState, useEffect} from 'react'
import './../../css/Post.css'
import { auth, onAuthStateChanged } from './../../FirebaseConfig';

export default function Post() {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState('');
    const [user, setUser] = useState(null);

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const { displayName, email, photoURL, uid } = user;
          setUser({ displayName, email, photoURL, uid });
        } else {
          setUser(null);
        }
      });
    }, []);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (!newPost) return; // Avoid adding empty posts
  
      setPosts([...posts, newPost]);
      setNewPost(''); // Clear the input field after submitting
    };
  return (
    <main className='post'>
         <h2>Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="What's on your mind?"
        />
        <button type="submit">Post</button>
      </form>

      <h2>Posts</h2>
      <div>
        {posts.map((post, index) => (
          <div key={index}>
            <p>{post}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
