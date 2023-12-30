import React, { useEffect, useState } from 'react'
import './../../css/Login.css'
import { signInWithRedirect, auth, provider, getRedirectResult, onAuthStateChanged, signInWithEmailAndPassword } from './../../FirebaseConfig'
import SignOut from './SignOut';
import Landing from '../Landing/Landing';

export default function Login() {
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Logged in
        const user = userCredential.user;
        console.log('Logged in user:', user);
        // Redirect or perform other actions as needed
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const signIn = (event) => {
    event.preventDefault();
    signInWithRedirect(auth, provider)
  };



  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          setSignedIn(true)
        } else {

        }
      }).catch((error) => {
        console.log(error)
      });
  }, [])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, photoURL, uid } = user;
        setUser({ displayName, email, photoURL, uid })
      } else {
        setUser(null)
      }
    })
  }, [])

  return (
    <main>
      {
        user ? (
            <Landing/>
        ) : (

          <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit">Login</button>
          <button onClick={signIn} style={{ backgroundColor: "#000", color: "#fff" }}>
            Sign In With Google
          </button>
          </form>
        )
      }
    </main>
  )
}
