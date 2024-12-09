const mongoose = require('mongoose');

function connect() {
  return mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true })
    .then(() => {
      console.log('Connected to DB');
    })
    .catch((error) => {
      console.error('Error connecting to DB:', error);
    });
}
   module.exports = connect;