let connection;
let parsedData = {};

const connectWebsocket = function () {
  connection = new WebSocket("ws://localhost:8080");

  connection.onopen = (event) => {
    // console.log(event);
  };

  connection.onmessage = (event) => {
    handleWebsocketData(event.data);
  };

  return connection;
};

const sendMessage = function (message) {
  connection.send(message);
};

const handleWebsocketData = function (data) {
  parsedData = JSON.parse(data);
};

const getParsedData = function () {
  return parsedData;
};

const setupWebsocketEventListener = function (updateFunction) {
  if (connection) {
    connection.addEventListener("message", (event) => {
      handleWebsocketData(event.data);
      updateFunction();
    });
  }
};

export {
  connectWebsocket,
  handleWebsocketData,
  getParsedData,
  setupWebsocketEventListener,
  sendMessage,
};
