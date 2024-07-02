const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

var iPortaTcp = 4201;
var sIpAddress = "172.19.21.235"

app.listen(iPortaTcp,sIpAddress, () => console.log('API is running on http://' + sIpAddress + ':' + iPortaTcp));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('', (req, res) => {
console.log("Mi hai chiesto la pagina iniziale");
res.sendFile("index.html", { root: './htdocs' });
});

app.get('/registrati.html', (req, res) => {
    console.log("Mi hai chiesto la pagina di registrazione");
    res.sendFile("registrati.html", { root: './htdocs'});
});

app.get('/accedi.html', (req, res) => {
    console.log("Mi hai chiesto la pagina di registrazione");
    res.sendFile("accedi.html", { root: './htdocs'});
});