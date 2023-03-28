import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';

import {Alert} from 'react-native';
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password,errorCallback) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e.code);
            errorCallback(e.code);
          }
        },
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
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

        resetPassword: async (email) => {
          try {
            await auth()
              .sendPasswordResetEmail(email)
              .then(() => {
                Alert('reset password has been sent successfully');
               });
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
