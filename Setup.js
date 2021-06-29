/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';

import firebase from '@react-native-firebase/app'
 

var firebaseConfig = {
  apiKey: "AIzaSyANMQThzU5XE-I5_HW55mOzTU5TM89K6gc",
  authDomain: "musickitdemo-964c0.firebaseapp.com",
  projectId: "musickitdemo-964c0",
  storageBucket: "musickitdemo-964c0.appspot.com",
  messagingSenderId: "893041639841",
  appId: "1:893041639841:web:8906dbccaea05a3e298be0",
  measurementId: "G-S26F6H00P6"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export default  db;



 
 