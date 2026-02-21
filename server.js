const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require("dotenv").config();

const app = express();

app.use(express.json());
app.use('/api/contacts', require("./routes/contactRoutes"));
app.use(errorHandler);

const port =  3000;
app.listen(port, () => {
  console.log(`server is running on port http://localhost:${port}`);
}); 