const firebaseConfig = {
    apiKey: "AIzaSyDsPtuk0Yp7werjjOGtgMUlmGSccu8rXIg",
    authDomain: "kwitter-d34db.firebaseapp.com",
    databaseURL: "https://kwitter-d34db-default-rtdb.firebaseio.com",
    projectId: "kwitter-d34db",
    storageBucket: "kwitter-d34db.appspot.com",
    messagingSenderId: "501729417847",
    appId: "1:501729417847:web:cde4502fed9b1488518472",
    measurementId: "G-GRY7CYQ57Z"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function adduser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}