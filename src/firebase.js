import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC9WKKofx8tvDEKhr374iQzf_QIkeZA4PI",
    authDomain: "netflix-app-5eb4f.firebaseapp.com",
    projectId: "netflix-app-5eb4f",
    storageBucket: "netflix-app-5eb4f.appspot.com",
    messagingSenderId: "502077941898",
    appId: "1:502077941898:web:b68fd60830865e9d376573"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =  firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;