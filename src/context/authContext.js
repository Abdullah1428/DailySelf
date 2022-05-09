import React, { useContext, useState, useEffect } from "react"

import {
  createUserWithEmailAndPassword,
  // signInWithEmailAndPassword,
  // signOut,
  // sendPasswordResetEmail,
} from 'firebase/auth';

import { auth } from "../api/firebase"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {

  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email,password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  },[])

  const value = {
    currentUser,
    signup
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
 