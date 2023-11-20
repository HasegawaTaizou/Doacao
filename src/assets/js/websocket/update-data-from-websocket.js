import { getParsedData } from "./websocket";

const updateDataFromWebsocket = function (target, type, operation) {
  const parsedData = getParsedData();

  if (parsedData.type == type && operation === "concat") {
    target.push(parsedData.data);
  } else if (parsedData.type == type && operation === "replace") {
    if (!Array.isArray(target)) {
      Object.assign(target, parsedData.data);
    } else {
      target.splice(0, target.length, ...parsedData.data);
    }
  }
};

export { updateDataFromWebsocket };
