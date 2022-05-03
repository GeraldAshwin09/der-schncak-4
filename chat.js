var firebaseConfig = {
  apiKey: "AIzaSyCIqe0YKPUj110l69PZ2ziQQ5vSoTgpYA0",
  authDomain: "derschnack-4e48d.firebaseapp.com",
  databaseURL: "https://derschnack-4e48d-default-rtdb.firebaseio.com",
  projectId: "derschnack-4e48d",
  storageBucket: "derschnack-4e48d.appspot.com",
  messagingSenderId: "1065289100324",
  appId: "1:1065289100324:web:06ab2acb48e74f1faffcb1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  rname=localStorage.getItem("user_name");
  document.getElementById("name").innerHTML="Welcome" + rname + "!";


function addroom()
{
room_name = document.getElementById("roomname").value;

firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
});

  localStorage.setItem("room_name", room_name);
  
  window.location = "kwitter_page.html";
}
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
Room_names = childKey;
     console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
  });
});
}
getData();


function redirectToRoomName(name)
{
  localStorage.setItem("room_name", name);
  window.location="kwitter_page.html";
}
 


