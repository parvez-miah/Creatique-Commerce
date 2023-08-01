import { createContext, useEffect, useState } from "react"
import { app } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {



const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
const [error , setError] = useState('');

// create user


const createUser = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)


        .catch((error) => {
            setError(error.code)
            setError(error.message)
        })
};


const updateUserProfile = ({name,photo})=>{
    return updateProfile(auth.currentUser, {
        displayName: name, photo
    });
}

// login User


const signIn = (email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email,password)
        .catch((error) => {
            setError(error.code)
            setError(error.message)
        })
        .finally(() => setIsLoading(false))
};

// logOut

const logOut = ()=>{
   setLoading(true);
    return signOut(auth);
}


// state managements
useEffect(()=>{

    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser);
        console.log('current user' , currentUser)
        setLoading(false);
    })

    return ()=>{
        return unsubscribe;
    }
},[]);





const authInfo ={
    user,
    loading,
    createUser,
    signIn,
    logOut,
    error,
    updateUserProfile

}
  return (
    <AuthContext.Provider value ={authInfo}>
    {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;