import { getParsedData } from "./websocket";

const updateDataFromWebsocket = function (array, type, operation) {
  const parsedData = getParsedData();
  if (parsedData.type == type && operation === "concat") {
    array.push(parsedData.data);
  } else if (parsedData.type == type && operation === "replace") {
    array.splice(0, array.length, ...parsedData.data);
  }
};

export { updateDataFromWebsocket };
