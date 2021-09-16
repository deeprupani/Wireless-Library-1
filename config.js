import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCKZRKDvktgUIf_AqlGJXxf9lpesQg8FGk",
  authDomain: "voting-app-1d6cc.firebaseapp.com",
  projectId: "voting-app-1d6cc",
  storageBucket: "voting-app-1d6cc.appspot.com",
  messagingSenderId: "1020270123571",
  appId: "1:1020270123571:web:c20a63dbfae99c16b0e146"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebase.database();