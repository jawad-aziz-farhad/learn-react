import firebase from 'firebase';
// Your web app's Firebase configuration
const firebaseConfig = {
        apiKey: "AIzaSyAEOaFw87EsZz72UAYdfCX0K0SpRyNF2-w",
        authDomain: "reactfirestore-b191a.firebaseapp.com",
        databaseURL: "https://reactfirestore-b191a.firebaseio.com",
        projectId: "reactfirestore-b191a",
        storageBucket: "reactfirestore-b191a.appspot.com",
        messagingSenderId: "676628669871",
        appId: "1:676628669871:web:3ce3af19e68023d1d27b5a",
        measurementId: "G-8ZC9WFS3DP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;