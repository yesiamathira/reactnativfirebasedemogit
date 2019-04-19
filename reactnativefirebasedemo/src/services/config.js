import Firebase, { initializeApp } from 'firebase';
let config ={

    apiKey: "AIzaSyARPFtpEAD6cjE1PX3CeWabktoKKW3f0bM",
    authDomain: "fir-demo-82fbe.firebaseapp.com",
    databaseURL: "https://fir-demo-82fbe.firebaseio.com",
    projectId: "fir-demo-82fbe",
    storageBucket: "fir-demo-82fbe.appspot.com",
    messagingSenderId: "926635707769"
};
let app =Firebase.initializeApp(config)
export const db=app.database();
export const firebaseApp=app.auth();