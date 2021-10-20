const firebase = require("firebase/app");
require("firebase/firestore");

const admin = require("firebase-admin");
const serviceAccount = require("./ServiceAccountKey/test-project-3567e-firebase-adminsdk-i281q-30550bee4b");

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
    apiKey: "AIzaSyB0wI74-Xji2SbWZJ8dKt21h9zlcODS_DE",
    authDomain: "test-project-3567e.firebaseapp.com",
    projectId: "test-project-3567e",
    storageBucket: "test-project-3567e.appspot.com",
    messagingSenderId: "1040392244166",
    appId: "1:1040392244166:web:f42226e22b73dff46600c7",
    measurementId: "G-4LWKYRZP86"
};
const app = admin.firestore()

const db = firebase.initializeApp(firebaseConfig);

module.exports = app;