import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from '../firebase/firebase.config';




export const UserContext = createContext(null)

function AuthContext({children}) {
    const [loading, setLoading] = useState(true);
    const [ user, setUser ] = useState(null)


    useEffect(()=>{
        onAuthStateChanged(auth, currentUser=> {
            setUser(currentUser)
            setLoading(false)
        })
    },[])

    const registration = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () =>{
        setLoading(true)
        return signOut(auth)
    }

 

    const value = {
        registration,
        login,
        logout,
        loading,
        user
    }


    

    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

AuthContext.propTypes = {
    children: PropTypes.node
}


export default AuthContext;