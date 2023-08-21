import { createContext, useEffect, useState } from "react"
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from "axios";
export const AuthContext = createContext(null)
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const Googleprovider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');


    // create user


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };


    const updateUserProfile = ({ name, photo }) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photo
        });
    }

    // login User


    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };

    // google sign In

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, Googleprovider)
    }


    // logOut

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    // state managements
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            
            // get and set token

            if (currentUser) {
                axios.post('https://creatique-commerce-server-parvez-miah.vercel.app/jwt', {
                    email: currentUser.email
                })
                    .then(data => {
                        localStorage.setItem('access-token', data.data);
                        setLoading(false);

                    })
            }
            else {
                localStorage.removeItem('access-token')
            }
            
        })

        return () => {
            return unsubscribe;
        }
    }, []);





    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        error,
        updateUserProfile,
        googleSignIn

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;