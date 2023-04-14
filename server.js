let express = require('express');
const { readFileSync,existsSync } = require('fs');
// const cors = require('cors');
const path = require('path');
let app = express();
let fs=require("fs");
let port = 3030;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

/**
 * Home del progetto
 */
app.get('/', function (req, res) {
    //   res.end("Progetto MesseDausin");
      let filePath = "./html/index.html";
      res.end(readFileSync(filePath));
});

/**
 * Home del progetto
 */
app.get('/index.html', function (req, res) {
    //   res.end("Progetto MesseDausin");
      let filePath = "./html/index.html";
      res.end(readFileSync(filePath));
});

/**
 * API e pagine (documentazione)
 */
app.get('/api', function (req, res) {
    //   res.end("Progetto MesseDausin");
      let filePath = "./html/api.html";
      res.end(readFileSync(filePath));
});

/**
 * Invia la pagina per la ricerca delle Messe
 */
app.get('/messe.html', function (req, res) {
    //   res.end("Progetto MesseDausin");
      let filePath = "./html/messe.html";
      res.end(readFileSync(filePath));
});

/**
 * Invia l'elenco delle Diocesi censite
 */
app.get('/elenco_diocesi', function (req, res) {
    //   res.end("Progetto MesseDausin");
      let filePath = "./json/diocesi.json";
      res.end(readFileSync(filePath));
});

/**
 * Fornisce il json con l'elenco delle messe
 */
app.get('/elenco_messe', function (req, res) {
    let diocesiID = req.query.diocesi_id;
    let chiesaID = req.query.chiesa_id;
    console.log("Richiesta elenco Messe [diocesi=" + diocesiID + "] e [chiesa=" + chiesaID + "]" );

    if (chiesaID == undefined)
        console.log("\tTutte le chiese!");

    let filePath = "./json/elenco_messe_" + diocesiID + ".json";

    if (!existsSync(filePath)){  
        // Errore: file non esiste!
		const errore = {
			codice_errore: 001,
			messaggio: "Impossibile trovare la lista desiderata"
			}      
		res.end(JSON.stringify(errore));
    }
    else {
        // OK: file esistente, da girare al client
		let contenuto = JSON.parse(readFileSync(filePath));
		res.end(JSON.stringify(contenuto));
	}
});

var server = app.listen(port, function () {
    console.log("Server MesseDausin in ascolto su porta " + port + "...");
 })