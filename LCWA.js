function adduser() 
{
user_name = document.getElementById("user_name").value;
alert(user_name);
localStorage.setItem("user_name", user_name);
window.location = "LCWA_room.html";
}


