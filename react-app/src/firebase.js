import firebase from 'firebase/app'
import 'firebase/auth'

const app= firebase.initializeApp({
    apiKey: "AIzaSyAA6md01TqJer3m1Wj35TH-ey2wc9icV74",
    authDomain: "temp-project-2644e.firebaseapp.com",
    projectId: "temp-project-2644e",
    storageBucket: "temp-project-2644e.appspot.com",
    messagingSenderId: "781753125043",
    appId: "1:781753125043:web:38222def304b801bcf08c6",
    measurementId: "G-Z95Y6C4GLZ"
})

export const auth=app.auth();
export default app