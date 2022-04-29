// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_rIkH5iGlppdht8Qh3n05rYdMS1VLCRU",
    authDomain: "independent-service-prov-48603.firebaseapp.com",
    projectId: "independent-service-prov-48603",
    storageBucket: "independent-service-prov-48603.appspot.com",
    messagingSenderId: "1090188053777",
    appId: "1:1090188053777:web:1a5c5b9c1810c81e1b50b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;