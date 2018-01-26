const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var ip = require('ip');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(process.env.PORT || 3000, () => console.log("Server running"));

app.get("/", (req, res) => {
    const agent = req.headers['user-agent'];
    const language = req.headers['accept-language'].split(',')[0];
    const ipaddress = ip.address()
    res.json({ipaddress,language,agent})
});
