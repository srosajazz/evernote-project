import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

// Your web app's Firebase configuration
const firebaseConfig =
  // Initialize Firebase
  firebase.initializeApp({
    apiKey: 'AIzaSyCocqoSXe4Bu6qW5FOKXagyiB1c-4juVEs',
    authDomain: 'evernote-project-740af.firebaseapp.com',
    databaseURL: 'https://evernote-project-740af.firebaseio.com',
    projectId: 'evernote-project-740af',
    storageBucket: 'evernote-project-740af.appspot.com',
    messagingSenderId: '637718871628',
    appId: '1:637718871628:web:a9814495ff11472645fee9',
    measurementId: 'G-SM1SEVZRKG',
  });
firebase.analytics();

ReactDOM.render(<App />, document.getElementById('evernote-container'));
serviceWorker.unregister();
