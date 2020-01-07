const server = require('./app');

const PORT = process.env.PORT || 80;

server.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
});
