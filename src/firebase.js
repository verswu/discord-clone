import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDwTY8Uff2EfpBOXVjj42iQEZyxYuCu8Vw",
    authDomain: "discord-clone-36912.firebaseapp.com",
    databaseURL: "https://discord-clone-36912.firebaseio.com",
    projectId: "discord-clone-36912",
    storageBucket: "discord-clone-36912.appspot.com",
    messagingSenderId: "462807661091",
    appId: "1:462807661091:web:6b0f6cc2dbc0fd2f050f96",
    measurementId: "G-KVGY9CZPGH"
  };

  const firebaseApp = firebase.initailizeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;