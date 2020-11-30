importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js')

firebase.initializeApp({
    apiKey: "AIzaSyBv7Il-yvP95hZRJkbnRqYoozBAZl5dmKM",
    authDomain: "cercle-store.firebaseapp.com",
    databaseURL: "https://cercle-store.firebaseio.com",
    projectId: "cercle-store",
    storageBucket: "cercle-store.appspot.com",
    messagingSenderId: "13108501463",
    appId: "1:13108501463:web:391cf5fc9347c31d28c992"
});

firebase.messaging();