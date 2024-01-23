

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCtpL0UWOGHCySJ_ID2Qs4TrcDR6GGQEvo",
  authDomain: "proyecto94-64487.firebaseapp.com",
  databaseURL: "https://proyecto94-64487-default-rtdb.firebaseio.com",
  projectId: "proyecto94-64487",
  storageBucket: "proyecto94-64487.appspot.com",
  messagingSenderId: "249257274005",
  appId: "1:249257274005:web:c9ab50fe6617243687099c",
  measurementId: "G-T0T2NL3T9G"
};
 
// Initialize Firebase
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código

      //Final del código
      });});}
getData();


nombre_usuario = localStorage.getItem("nombre_usuario");
document.getElementById("nombre_usuario").innerHTML = "Hola bienvenido " + nombre_usuario;


function adduser()
{
    nombre_usuario = document.getElementById("nombre_usuario").value;

    firebase.database().ref("/").child(nombre_usuario).update({
        purpose : "adding user"
    });

    window.location.replace("warzon_room.html");

}




function getData() {  firebase.database().ref("/").on('value', function(snapshot) 
{ document.getElementById("output").innerHTML = "";
 snapshot.forEach(
  function(childSnapshot) { childKey  = childSnapshot.key;
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
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "warzon_page.html";
}

function logout() {
localStorage.removeItem("nombre_usuario");
localStorage.removeItem("room_name");
    window.location = "index.html";
}

  