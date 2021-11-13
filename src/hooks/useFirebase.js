import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/Firebase.init";
import axios from 'axios';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";


initializeFirebase();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        if (password.length !== 6) {
            alert('password should be 6 character lomg')
            return
        }
        createUserWithEmailAndPassword(auth, email, password)

            .then(result => {
                setUser(result.user);
                setAuthError('');
                const newUser = { email, displayName: name }
                setUser(newUser)

                // saving user to database 
                saveUser(email, name);

                // sending name to firebase 
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                history.replace('/');
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
    }, [auth]);

    useEffect(() => {
        fetch(`https://rocky-island-88656.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])


    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({});

            })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName) => {
        const user = { email, displayName }

        axios.post('https://rocky-island-88656.herokuapp.com/users', user)
            .then(res => {

            })
    }

    return {
        user,
        isLoading,
        admin,
        authError,
        registerUser,
        login,
        logOut,
    }

}

export default useFirebase;