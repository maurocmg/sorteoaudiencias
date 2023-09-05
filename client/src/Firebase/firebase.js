// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCov-72wwqncZLW-xJ0A7iZotKsKsjl5cQ",
  authDomain: "sorteador-de-audiencias.firebaseapp.com",
  projectId: "sorteador-de-audiencias",
  storageBucket: "sorteador-de-audiencias.appspot.com",
  messagingSenderId: "768934600059",
  appId: "1:768934600059:web:fff5a8a340534cc84ff1de",
  measurementId: "G-KYZ65REL3M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app); // Inicializa el módulo de autenticación

export { auth }; // Exporta el módulo de autenticación

