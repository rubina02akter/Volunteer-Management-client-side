
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import axios from "axios";


export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const[user, setUser] = useState(null);
  const[loading,setLoading] = useState(true);
  const [emails, setEmails] = useState([]);
  const [theme, setTheme] = useState("light");

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

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
      // console.log(e.target.value)
    } else {
      setTheme("light");
    }
  };

  // useEffect(()=>{
  //   const unSubscribe = onAuthStateChanged(auth,currentUser=>{
  //       console.log('currently logged in',currentUser)
  //       setUser(currentUser)
  //       setLoading(false)
  //     })
  //     return () => {
  //       unSubscribe()
  //     }
  //   },[])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        
        console.log('state captured', currentUser?.email);

        if (currentUser?.email) {
            const user = { email: currentUser.email };

            axios.post('https://server-side-rho-lemon.vercel.app/jwt', user, { withCredentials: true })
                .then(res => {
                    console.log('login token', res.data);
                    setLoading(false);
                })

        }
        else {
            axios.post('https://server-side-rho-lemon.vercel.app/logout', {}, {
                withCredentials: true
            })
            .then(res => {
                console.log('logout', res.data);
                setLoading(false);
            })
        }
        
    })

    return () => {
        unsubscribe();
    }
}, [])
  


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
 updateUserProfile,theme, setTheme,handleTheme
}

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;