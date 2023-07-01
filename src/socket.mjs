const socket = new WebSocket("ws://localhost/ws");

socket.onopen = function (_event) {
    console.log("Connection to hot reload server established");
};

socket.onmessage = function (_event) {
    console.log("Got a message from server!");
    window.location.reload();
};

socket.onerror = function (error) {
    console.error(error);
};