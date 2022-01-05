function getHostname() {
  if (window.env.APP_HOSTNAME !== 'undefined') {
    return window.env.APP_HOSTNAME;
  }
  else {
    return "Undefined";
  }
}

function getCanaryColor() {
  if (window.env.APP_CANARY_COLOR !== 'undefined') {
    return window.env.APP_CANARY_COLOR;
  }
  else {
    return "gray";
  }
}

function getSocketIOServerAddr() {
  if (window.env.APP_SOCKETIO_SERVER_ADDR !== 'undefined') {
    return window.env.APP_SOCKETIO_SERVER_ADDR;
  }
  else {
    return "localhost:5000";
  }
}

export const APP_HOSTNAME = getHostname();
export const APP_CANARY_COLOR = getCanaryColor();
export const APP_SOCKETIO_SERVER_ADDR = getSocketIOServerAddr();