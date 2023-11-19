import { getParsedData } from './websocket';

const updateDataFromWebsocket = function (array, type) {
  const parsedData = getParsedData();
  if (parsedData.type == type) {
    array.push(parsedData.data);
  }
};

export { updateDataFromWebsocket };
