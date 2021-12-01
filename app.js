const express = require('express');
const app = express();

//config env using the dotenv library
const cors = require('cors');
const dotenv = require('dotenv');
require('dotenv').config();
const mongoose = require('mongoose');

const adminRoutes = require('./routes/admin');
const driverRoutes = require('./routes/driver');
const passengerRoutes = require('./routes/passenger');
const locationRoutes = require('./routes/location');

const connect = async () => {
  return await mongoose.connect(
    //'mongodb+srv://admin:admin@puvts.ok9va.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    'mongodb://localhost/puvts',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};

const host = '0.0.0.0';
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/admin', adminRoutes);
app.use('/api/driver', driverRoutes);
app.use('/api/passenger', passengerRoutes);
app.use('/api/location', locationRoutes);

connect()
  .then(async (connection) => {
    app.listen(port, host, () => {
      console.log(`Sever is up at port ${port}`);
    });
  })
  .catch((e) => console.error(e));
