// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjSzZPyoOOTP-Z8iN-DamrLtDjOXKxGFw",
    authDomain: "independent-service-prov-b483b.firebaseapp.com",
    projectId: "independent-service-prov-b483b",
    storageBucket: "independent-service-prov-b483b.appspot.com",
    messagingSenderId: "61350267759",
    appId: "1:61350267759:web:cfc631883ab4560e48369a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;