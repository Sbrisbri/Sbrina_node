let myColor;
colors = ["red", "blue", "yellow", "green", "orange", "purple"];

let clientSocket = io(); //attivare il socket all'interno dello sketch

clientSocket.on("connect", newConnection);

function newConnection(){
  console.log(clientSocket.id);
}

clientSocket.on("mouseBroadcast", otherMouse)

function otherMouse(dataReceived){
fill(dataReceived.color);
circle(dataReceived.x, dataReceived.y, 10);
}

function mouseMoved(){
  let message = {
    x: mouseX,
    y: mouseY,
    id: clientSocket.id,
    color: myColor,
  };

  clientSocket.emit("mouse", message);
}

function setup() {
  createCanvas(400, 400);
  myColor = random(colors);
}

function draw() {
  //background(220);
  fill(myColor);
  circle(mouseX, mouseY, 30);
}
