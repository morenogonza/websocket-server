const express = require("express");
const cors = require("cors");
const { socketController } = require("../sockets/controllers");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.server = require("http").createServer(this.app);
    this.io = require("socket.io")(this.server);

    this.paths = {};

    // middlewares
    this.middlewares();

    // routes
    this.routes();

    // socket io
    this.socket();
  }

  middlewares() {
    // cors
    this.app.use(cors());

    // directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    // this.app.use(this.paths.uploads, require("../routes/uploads"));
  }

  socket() {
    this.io.on("connection", socketController);
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log("Servidor en el puerto", this.port);
    });
  }
}

module.exports = Server;
