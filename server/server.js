const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/ConnectDB");

dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT;
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/admin', require('./routes/admin'));
app.use('/profs', require('./routes/prof'));
app.use('/faculties', require('./routes/faculty'));
app.use('/majors', require('./routes/major'));
app.use('/positions', require('./routes/position'));
app.use('/download', require('./routes/downloadItem'));

app.listen(PORT, () =>
    console.log(
        `Server listenig in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);
