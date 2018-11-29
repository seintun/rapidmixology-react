import firebase from 'firebase/app'
import 'firebase/auth'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDxnST_UWzbRZRLUJ5cLt7SV8AaqC2NMmE",
  authDomain: "rapidmixology.firebaseapp.com",
  databaseURL: "https://rapidmixology.firebaseio.com",
  projectId: "rapidmixology",
  storageBucket: "rapidmixology.appspot.com",
  messagingSenderId: "610465980970"
};

const fire = firebase.initializeApp(config); 
export default fire;