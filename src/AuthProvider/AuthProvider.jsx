import React, { useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
import { auth } from "../Firebase/Firebase.init";
import { GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";



const Provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  // *** Create User
  const userRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ***  User Update Info

  const updateUserInfo = (updateInfo) => {
    return updateProfile(auth.currentUser, updateInfo);
  };

  // ***  User LogIn
  const userLogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ***  User LogIn/ Register With Google
  const userSignInGoogle = () => {
    return signInWithPopup(auth, Provider);
  }

  // ***  User LogOut
  const userLogOut = () => {
    return signOut(auth);
  };

  // ***  AuthState change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    userRegister,
    user,
    loading,
    setLoading,
    setUser,
    updateUserInfo,
    userLogOut,
    userLogIn,
    userSignInGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
