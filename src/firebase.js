import firebase from 'firebase'
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "whatsapp-mern-307804.firebaseapp.com",
    projectId: "whatsapp-mern-307804",
    storageBucket: "whatsapp-mern-307804.appspot.com",
    messagingSenderId: "912068625990",
    appId: "1:912068625990:web:c5cf228b431e4dbad9ec47",
    measurementId: "G-7JXJ5SJE7C"
  };
const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore()
const auth=firebase.auth()
const provider=new firebase.auth.GoogleAuthProvider()
export {auth,provider}
export default db