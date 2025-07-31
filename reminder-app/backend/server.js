const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const authRouter = require('./routes/auth');
const remindersRouter = require('./routes/reminders');

app.use('/api/auth', authRouter);
app.use('/api/reminders', remindersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
