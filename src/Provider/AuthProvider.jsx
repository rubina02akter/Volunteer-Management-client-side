
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const[user, setUser] = useState(null);
  const[loading,setLoading] = useState(true);
  const [emails, setEmails] = useState([]);

const createUser = (email, password) => {
  setLoading(true);
  return createUserWithEmailAndPassword(auth,email,password);
}

const signInUser = (email,password) => {
  setLoading(true);
  return signInWithEmailAndPassword(auth,email,password);
}

const signInWithGoogle = () => {
  return signInWithPopup(auth,provider)
}

const signOutUser = ( ) => {
  setLoading(true);
 return signOut(auth);
}

  //update profile
  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser , updatedData)
  }

useEffect(()=>{
  const unSubscribe = onAuthStateChanged(auth,currentUser=>{
      console.log('currently logged in',currentUser)
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      unSubscribe()
    }
  },[])


const authInfo = {
  createUser,
  user,
  setUser,
  signInUser,
  signOutUser,
  loading,
  signInWithGoogle,
  emails,
 setEmails,
 updateUserProfile,
}

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;