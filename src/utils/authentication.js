import firebase from 'firebase';

export const authenticate = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

export const loggedUser = () => firebase.auth().currentUser;

export const isLogged = () => loggedUser() !== null;