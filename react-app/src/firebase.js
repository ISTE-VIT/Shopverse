import firebase from 'firebase/app'
import 'firebase/auth'

const app= firebase.initializeApp({
    apiKey: "AIzaSyAFYECvFgSxbqogorS6GSa3yQk2YIjiWGo",
    authDomain: "test-ved-40ccb.firebaseapp.com",
    databaseURL: "https://test-ved-40ccb-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "test-ved-40ccb",
    storageBucket: "test-ved-40ccb.appspot.com",
    messagingSenderId: "934209094317",
    appId: "1:934209094317:web:667b8d2dff6a599d7cfc24",
    measurementId: "G-M7FVNNCR6E"
})

export const auth=app.auth();
export default app