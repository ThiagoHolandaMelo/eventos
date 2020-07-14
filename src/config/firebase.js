import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCwOARjXEs6rGfZ0XQ16z4ZooQzQyabNvM",
    authDomain: "eventos-2323c.firebaseapp.com",
    databaseURL: "https://eventos-2323c.firebaseio.com",
    projectId: "eventos-2323c",
    storageBucket: "eventos-2323c.appspot.com",
    messagingSenderId: "966488634923",
    appId: "1:966488634923:web:0da81d63b1967d6c251c6e"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);