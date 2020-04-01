const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/ConnectDB');


dotenv.config({path: './config/config.env'})
const PORT = process.env.PORT || 4000;
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.listen(PORT, () => console.log(`Server listenig in ${process.env.NODE_ENV} mode on port ${PORT}`))