import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import App from './App';

firebase.initializeApp({
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
