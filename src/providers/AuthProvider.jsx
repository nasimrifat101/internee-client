/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    // const [loading, setloading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)

        })
        return () => {

            unsubscribe()
        }
    }, [])



    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    const logout = () => {
        return signOut(auth)
    }

    const info = {
        user,
        createUser,
        signIn,
        signInWithGoogle,
        logout
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;