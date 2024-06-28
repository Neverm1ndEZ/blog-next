// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.FIREBASE,
	authDomain: "blog-app-426314.firebaseapp.com",
	projectId: "blog-app-426314",
	storageBucket: "blog-app-426314.appspot.com",
	messagingSenderId: "737046405404",
	appId: "1:737046405404:web:17998893529036cd4e9ad9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
