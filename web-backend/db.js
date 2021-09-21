const firebase = require("firebase/app");
require("firebase/firestore");

const admin = require("firebase-admin");
const serviceAccount = require("C:\\Users\\91897\\OneDrive\\Desktop\\temp-project-2644e-firebase-adminsdk-hoo35-4ec0f95f7e.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://temporary-ea0d3-default-rtdb.asia-southeast1.firebasedatabase.app",
});


const firebaseConfig = {
    // apiKey: "AIzaSyCSGVOz6uwpk9MZYT6vOuBUvcfDNkf-hmo",
    // authDomain: "temporary-ea0d3.firebaseapp.com",
    // databaseURL: "https://temporary-ea0d3-default-rtdb.asia-southeast1.firebasedatabase.app",
    // projectId: "temporary-ea0d3",
    // storageBucket: "temporary-ea0d3.appspot.com",
    // messagingSenderId: "31825922031",
    // appId: "1:31825922031:web:0a59d3d9947d12c778181a",
    // measurementId: "G-CZ9SWHSFCR"
    apiKey: "AIzaSyAA6md01TqJer3m1Wj35TH-ey2wc9icV74",
    authDomain: "temp-project-2644e.firebaseapp.com",
    projectId: "temp-project-2644e",
    storageBucket: "temp-project-2644e.appspot.com",
    messagingSenderId: "781753125043",
    appId: "1:781753125043:web:38222def304b801bcf08c6",
    measurementId: "G-Z95Y6C4GLZ"
};
const app = admin.firestore()

const db = firebase.initializeApp(firebaseConfig);

module.exports = app;