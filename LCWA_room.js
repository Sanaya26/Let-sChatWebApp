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

  user_name = localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

   function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
 snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row; }); }); } getData();

function addroom () 
{
room_name= document.getElementById ("room_name").value;

firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
}
function redirectToRoomName(sanaya){
console.log(sanaya);
localStorage.setItem("room_name" , sanaya );
window.location = "LCWA_page.html";
}
function  logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "LCWA.html";
}
