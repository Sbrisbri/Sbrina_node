console.log("script loaded");

let express = require("express");

let app = express();

let port = 5000;

let server = app.listen(port);

app.use(express.static("public"));

console.log("running server on http://localhost:" + port);

//app.use(express.static("public"));

let serverSocket = require("socket.io");

let io = serverSocket(server); 

io.on("connection", newConnection); //secondo parametro che dice quando una nuova connessione avviene deve fare qualcosa il server

function newConnection(newSocket){
console.log(newSocket.id);
newSocket.on("mouse", mouseReceived);

function mouseReceived(dataReceived){
    console.log(dataReceived);
    newSocket.broadcast.emit("mouseBroadcast", dataReceived);
}
}
