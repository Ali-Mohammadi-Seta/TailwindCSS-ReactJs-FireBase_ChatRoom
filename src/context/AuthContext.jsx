import {createContext, useState, useContext, useEffect} from "react";
import {getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../FireBase.jsx";


const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //Signing With Google
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const { displayName, email, uid, photoURL } = result.user;
                setCurrentUser({ displayName, email, uid, photoURL });
                const user = auth.currentUser;

            })
            .then(() => {
                // Profile updated successfully

            }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }

    //Signout With Google

    const signOutWithGoogle = () => signOut(auth)

    const value = {
        currentUser, setCurrentUser, signInWithGoogle , signOutWithGoogle
    }

    //set current user

    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unSubscribe
    }, [])

    return (

        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )

}

export const UserAuth = () => {
    return useContext(AuthContext)
}
