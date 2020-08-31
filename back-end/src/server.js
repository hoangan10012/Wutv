const express = require('express')
const app = express()
const port = 8080
const bodyParser = require('body-parser');
const admin = require("firebase-admin");

const serviceAccount = require("../key/key.json");

app.use(bodyParser.json());
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://wutv-red.firebaseio.com"
});

app.listen(port, () => {
  console.log("server is running")
})