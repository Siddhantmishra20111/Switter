var firebaseConfig = {
      apiKey: "AIzaSyBIhvFfOtzrBwBPGcS4BPMLOch4B0Ymgp0",
      authDomain: "kwitter-27d53.firebaseapp.com",
      projectId: "kwitter-27d53",
      storageBucket: "kwitter-27d53.appspot.com",
      messagingSenderId: "398268081444",
      appId: "1:398268081444:web:96437a2f78f352e6bf3fb1"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
