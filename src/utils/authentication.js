import firebase from 'firebase';

export const authenticate = (email, password) => (
  firebase.auth().signInWithEmailAndPassword(email, password)
);

export const loggedUser = () => firebase.auth().currentUser;

export const isLoggedIn = () => (loggedUser() !== null);

export const loggout = () => firebase.auth().signOut();