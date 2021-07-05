
function printTabellaPunteggi(x, y) {
    s = "";
    for (let i = x; i < y; i++) {
      s = s + "\t" + tabellaPunteggi[i];
    }
    console.log(s);
  }
  
  function printTabellaPunteggiAll() {
    console.log("--------P U N T E G G I----------");
    console.log(" ");
    printTabellaPunteggi(0, 4);
    printTabellaPunteggi(4, 8);
    printTabellaPunteggi(8, 12);
    printTabellaPunteggi(12, 16);
    console.log(" ");
  }
  
  function calcolaPunteggio(contaX, contaO) {
    if (contaO == 3 && contaX == 0) {
      punteggio = 100;
    } else if (contaO == 0 && contaX == 3) {
      punteggio = 90;
    } else if (contaO == 0 && contaX == 2) {
      punteggio = 50;
    } else if (contaO == 2 && contaX == 0) {
      punteggio = 60;
    } else if (contaO == 1 && contaX == 0) {
      punteggio = 10;
    } else if (contaO == 0 && contaX == 0) {
      punteggio = 5;
    } else if (contaO == 0 && contaX == 1) {
      punteggio = 1;
    } else {
      punteggio = 0;
    }
    return punteggio;
  }
  
  function checkAsse(x, passo) {
    let contaX = 0;
    let contaO = 0;
    let y = x + 3 * passo;
    for (let i = x; i <= y; i += passo) {
      if (tabella[i] == "X") {
        contaX++;
      } else if (tabella[i] == "O") {
        contaO++;
      }
      punteggio = calcolaPunteggio(contaX, contaO);
    }
  
    var vintoGiocatore = false;
    var vintoPc = false;
  
    if (contaX > 3) {
      console.log("********Il giocatore ha vinto!*******");
      vintoGiocatore = true;
    } else if (contaO >= 3 && contaX == 0) {
      console.log("*******Il computer sta per vincere!*******");
      vintoPc = true;
    }
  
    var esitoAsse = {
      punteggio: punteggio,
      vintoGiocatore: vintoGiocatore,
      vintoPc: vintoPc,
    };
    return esitoAsse;
  }
  
  function checkNextMove() {
    var r1 = checkAsse(0, 1);
    var r2 = checkAsse(4, 1);
    var r3 = checkAsse(8, 1);
    var r4 = checkAsse(12, 1);
    var c1 = checkAsse(0, 4);
    var c2 = checkAsse(1, 4);
    var c3 = checkAsse(2, 4);
    var c4 = checkAsse(3, 4);
    var d1 = checkAsse(0, 5);
    var d2 = checkAsse(3, 3);
  
    console.log(
      "Punteggi colonna: " +
        c1.punteggio +
        " " +
        c2.punteggio +
        " " +
        c3.punteggio +
        " " +
        c4.punteggio
    );
    console.log("Punteggio prima riga: " + r1.punteggio);
    console.log("Punteggio seconda riga: " + r2.punteggio);
    console.log("Punteggio terza riga: " + r3.punteggio);
    console.log("Punteggio quarta riga: " + r4.punteggio);
  
    console.log("Punteggio diagonale: " + d1.punteggio + " " + d2.punteggio);
  
    tabellaPunteggi[0] = r1.punteggio + c1.punteggio + d1.punteggio;
    tabellaPunteggi[1] = r1.punteggio + c2.punteggio;
    tabellaPunteggi[2] = r1.punteggio + c3.punteggio;
    tabellaPunteggi[3] = r1.punteggio + c4.punteggio + d2.punteggio;
    tabellaPunteggi[4] = r2.punteggio + c1.punteggio;
    tabellaPunteggi[5] = r2.punteggio + c2.punteggio + d1.punteggio;
    tabellaPunteggi[6] = r2.punteggio + c3.punteggio + d2.punteggio;
    tabellaPunteggi[7] = r2.punteggio + c4.punteggio;
    tabellaPunteggi[8] = r3.punteggio + c1.punteggio;
    tabellaPunteggi[9] = r3.punteggio + c2.punteggio + d2.punteggio;
    tabellaPunteggi[10] = r3.punteggio + c3.punteggio + d1.punteggio;
    tabellaPunteggi[11] = r3.punteggio + c4.punteggio;
    tabellaPunteggi[12] = r4.punteggio + c1.punteggio + d2.punteggio;
    tabellaPunteggi[13] = r4.punteggio + c2.punteggio;
    tabellaPunteggi[14] = r4.punteggio + c3.punteggio;
    tabellaPunteggi[15] = r4.punteggio + c4.punteggio + d1.punteggio;
  
    for (let i = 0; i < 16; i++) {
      if (tabella[i] == "X" || tabella[i] == "O") {
        tabellaPunteggi[i] = -1;
      }
    }
  
    printTabellaPunteggiAll();
  
    var numMassimo = 0;
  
    for (let i = 0; i < 16; i++) {
      if (tabellaPunteggi[i] > numMassimo) {
        numMassimo = tabellaPunteggi[i];
      }
    }
  
    console.log("Massimo punteggio: " + numMassimo);
  
    var indiceMassimo = 0;
  
    for (let i = 0; i < 16; i++) {
      if (tabellaPunteggi[i] == numMassimo) {
        indiceMassimo = i;
      }
    }
  
    console.log("Indice massimo: " + indiceMassimo);
  
    var finePartita = false;
  
    var contatore = 0;
    for (let i = 0; i < 16; i++) {
      if (tabella[i] == "X" || tabella[i] == "O") {
        contatore++;
      }
    }
  
    console.log("Numero celle piene: " + contatore);
  
    if (
      r1.vintoGiocatore == true ||
      r2.vintoGiocatore == true ||
      r3.vintoGiocatore == true ||
      r4.vintoGiocatore == true ||
      c1.vintoGiocatore == true ||
      c2.vintoGiocatore == true ||
      c3.vintoGiocatore == true ||
      c4.vintoGiocatore == true ||
      d1.vintoGiocatore == true ||
      d2.vintoGiocatore == true
    ) {
      console.log("Il giocatore ha vinto!");
      finePartita = true;
    } else {    
      if (
        r1.vintoPc == true ||
        r2.vintoPc == true ||
        r3.vintoPc == true ||
        r4.vintoPc == true ||
        c1.vintoPc == true ||
        c2.vintoPc == true ||
        c3.vintoPc == true ||
        c4.vintoPc == true ||
        d1.vintoPc == true ||
        d2.vintoPc == true
      ) {
        console.log("Il computer ha vinto!");
        finePartita = true;
      } else {
        console.log("Il gioco continua");
        if (contatore >= 15) {
          console.log("Tabella piena, nessuno ha vinto!");
          finePartita = true;
        }
      }
    }
  
    esito = {
      indexMax: indiceMassimo,
      fineGioco: finePartita,
    };
  
    return esito;
  }