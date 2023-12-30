import React, { useEffect, useState } from 'react'
import './../../css/Login.css'
import { auth } from './../../FirebaseConfig'

export default function SignOut() {
    const signOut = (event) => {
        event.preventDefault();
        auth.signOut();
    }
  return (
    <main>
        <button onClick={signOut}  style={{ backgroundColor:"#000", color:"#fff"}}>Sign Out</button>
    </main>
  )
}
