const firebase = require('firebase/app').default
import '@firebase/auth';
import '@firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyAGuXUzTnWza7W-DGMCArR99iYLoju-KoU",
    authDomain: "maintenance-66394.firebaseapp.com",
    projectId: "maintenance-66394",
    storageBucket: "maintenance-66394.appspot.com",
    messagingSenderId: "841676816788",
    appId: "1:841676816788:web:03e8d18717103d333e0f81",
    measurementId: "G-2L1XCCFBEW"
  };


  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
