import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyAkDi7BIejz0CP_rKL4mlOelN-gGOjnnJ8",
    authDomain: "projectmanagement-e8a6f.firebaseapp.com",
    projectId: "projectmanagement-e8a6f",
    storageBucket: "projectmanagement-e8a6f.appspot.com",
    messagingSenderId: "955084211893",
    appId: "1:955084211893:web:bd3608bdb81973b2d9a0fc"
};

//init firebase

firebase.initializeApp(firebaseConfig)

//init services 

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//timestamp

const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }