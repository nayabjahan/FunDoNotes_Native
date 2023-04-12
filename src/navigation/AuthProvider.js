import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';

import {alert} from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { addUserData } from '../services/UserServices';
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password, errorCallback) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e.code);
            errorCallback(e.code);
          }
        },
        register: async (email, password) => {
          try {
           const userDatail= await auth().createUserWithEmailAndPassword(email, password);
            addUserData(email,userDatail.user.uid,"")
          } catch (e) {
            console.log(e.code);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
        googleLogin: async () => {
          try {
            await GoogleSignin.hasPlayServices({
              showPlayServicesUpdateDialog: true,
            });
            // Get the users ID token
            const {idToken} = await GoogleSignin.signIn();

            // Create a Google credential with the token
            const googleCredential =
              auth.GoogleAuthProvider.credential(idToken);
            // Sign-in the user with the credential
            return auth().signInWithCredential(googleCredential);
          } catch (error) {
            console.log(error);
          }
        },

        resetPassword: async (email) => {
                    try {
                        await auth().sendPasswordResetEmail(email);
                        alert("Password reset link sent")
                    } catch (e) {
                        console.log(e);
                    }
                },
            }}
      >
      {children}
    </AuthContext.Provider>
  );
};
