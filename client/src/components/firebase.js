// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE6vlxRlRgtvOf2zODAEHf_JMPL4PZFhU",
  authDomain: "uploadingfile-803e0.firebaseapp.com",
  projectId: "uploadingfile-803e0",
  storageBucket: "uploadingfile-803e0.appspot.com",
  messagingSenderId: "398410904670",
  appId: "1:398410904670:web:ee3ae086fd0737c59f70cf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)