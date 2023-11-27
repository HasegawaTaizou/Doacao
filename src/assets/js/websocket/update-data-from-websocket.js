import { getParsedData } from "./websocket";

const updateDataFromWebsocket = function (target, type, operation) {
  let parsedData = getParsedData();

  if (!parsedData.hasOwnProperty("data")) {
    parsedData.data = "";
    if (!Array.isArray(target)) {
      target = {};
      parsedData.data = target;
    } else {
      target = [];
      parsedData.data = target;
    }
  } else if (parsedData.type == type && operation === "concat") {
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
