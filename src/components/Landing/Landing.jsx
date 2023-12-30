import React, { useState, useEffect } from 'react';
import { auth, onAuthStateChanged } from './../../FirebaseConfig';
import SignOut from '../Auth/SignOut';
import './../../css/Landing.css'
import Navbar from './Navbar';
import Forecast from '../Features/Forecast';
import Post from '../Features/Post';

export default function Landing() {
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

  return (
    <main>
      <div>
        {/* Check if user exists before trying to access its properties */}
        {user ? (
          <div className='div'>
            <div className='display'>{user.displayName}</div>
            <SignOut />
            <div className='display'>
              <Navbar/>
            </div>
            <div className='display fores'>
              <div className="fore">
                <Forecast/>
              </div>
              <div className="fore">
                <Post/>
              </div>
            </div>
          </div>
        ) : (
          <div>No user signed in</div>
        )}
      </div>
    </main>
  );
}
