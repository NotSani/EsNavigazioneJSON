"use strict"
let jsonDoc;
let pos; //Posizione relativa al libro che voglio mostrare


window.onload = function(){
    let json = localStorage.getItem("jsonBookstore");
    alert(json);
    if(json!=null) {
        jsonDoc = JSON.parse(json);// [{"title":"mio titolo", "author":"mio autore", ...}, ...]
        visualizza();
    }
}

function visualizza(){
    let tBody = document.getElementById("tabLibri");
    for(let i=0; i<jsonDoc.length;i++){
        let jsonAus = jsonDoc[i]; // {"title":"mio titolo", "author":"mio autore", ...}
        let tr = document.createElement("tr");
        tBody.appendChild(tr);
        //Scorro le chiavi e ottengo ogni singolo valore
        for(let key in jsonAus) {
            let td = document.createElement("td");
            td.innerText =  jsonAus[key]; //->"mio titolo", "mio autore", ...
            tr.appendChild(td);
        }
    }
}

function aggiungi(){
    window.location.href = "aggiungi.html";
}

function leggiRecord(){
    let div = document.getElementById("contenuto");
    div.innerHTML = ""
    for(let key in jsonDoc[pos])
        div.innerHTML += key + " : " + jsonDoc[pos][key] + "<br>";

}

function primo(){
    pos = 0;
    leggiRecord();
}

function ultimo(){
    pos = jsonDoc.length - 1;
    leggiRecord();
}

function avanti() {
    if(pos < jsnDoc.length - 1){
        pos++;
        leggiRecord();
    }
    else{
        alert("Ultima posizione raggiunta!!");
    }
}
function indietro(){
    if(pos >0){
        pos--;
        leggiRecord();
    }
}