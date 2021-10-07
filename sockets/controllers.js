const socketController = (socket) => {
  console.log("Cliente conectado");

  socket.on("disconnect", () => {
    console.log("Cliente desconectado");
  });

  socket.on("enviar-mensaje", (payload, callback) => {
    socket.broadcast.emit("enviar-mensaje", payload);
    const id = 123456;
    callback({ id, fecha: new Date().getTime() });
  });
};

module.exports = { socketController };
