"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.io = void 0;

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cors = _interopRequireDefault(require("cors"));

var _http = _interopRequireDefault(require("http"));

var _socket = _interopRequireDefault(require("socket.io"));

var _variables = require("./config/variables");

var _counter = _interopRequireDefault(require("./controllers/counter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var app = (0, _express["default"])();

var server = _http["default"].createServer(app);

var io = (0, _socket["default"])(server, {
  transports: ['polling'],
  cors: {
    cors: {
      origin: "http://localhost:3000"
    }
  }
});
exports.io = io;
io.on('connection', function (socket) {
  console.log('Connected established');
  socket.on('message', function (message) {
    console.log("message from ".concat(socket.id, " : ").concat(message));
  });
  socket.on('disconnect', function () {
    console.log("socket ".concat(socket.id, " disconnected"));
  });
});
app.use(_express["default"].json());
app.use((0, _cors["default"])());
app.use('/', _counter["default"]);
server.listen(_variables.PORT, function () {
  console.log("Server up and running on port ".concat(_variables.PORT));
});