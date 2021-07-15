//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDtGRojeSepGUoyME6OZnYXTGzxzM6iMg8",
      authDomain: "kwitter-7ddcf.firebaseapp.com",
      databaseURL: "https://kwitter-7ddcf-default-rtdb.firebaseio.com",
      projectId: "kwitter-7ddcf",
      storageBucket: "kwitter-7ddcf.appspot.com",
      messagingSenderId: "431357348978",
      appId: "1:431357348978:web:4ee0814b8ad98bb6d146eb",
      measurementId: "G-VSSL5BGF86"
    };
     // Initialize Firebase
    
  firebase.initializeApp(firebaseConfig);
  
  room_name = localStorage.getItem("room_name");
  user_name = localStorage.getItem("user_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send() {
msg= document.getElementById('msg').value;
firebase.database().ref(room_name).push ({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value="";
}
function  logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "LCWA.html";
    }
    
    