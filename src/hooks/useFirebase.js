import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";


initializeFirebase();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('')

    const auth = getAuth();

    const registerUser = (email, password) => {
        setIsLoading(true);
        if (password.length !== 6) {
            alert('password should be 6 character lomg')
            return
        }
        createUserWithEmailAndPassword(auth, email, password)

            .then(result => {
                setUser(result.user);
                setAuthError('');
            })
            .catch((error) => {

                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const login = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {

                const destination = location?.state?.from || '/'
                history.replace(destination)
                // Signed in 
                setUser(result.user);
                setAuthError('');
            })
            .catch((error) => {

                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));

    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)
                // ...
            } else {
                setUser({})
            }

            setIsLoading(false)
        });
        return () => unsubscribe;
    }, []);


    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({});

            })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        authError,
        registerUser,
        login,
        logOut,
    }

}

export default useFirebase;