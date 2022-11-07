// VARIABILI GENERALI
var nome = document.getElementById("nome");
var cognome = document.getElementById("cognome");
var nascita = document.getElementById("data");
var btn = document.getElementById("button");

// DATA OGGI
var dataOggi = new Date;
var meseOggi = dataOggi.getMonth();
var giornoOggi = dataOggi.getDate();

// CLASSE
function Persona(_nome, _cognome, _nascita) {
    this.nome = _nome;
    this.cognome = _cognome;
    this.nascita = _nascita;

    this.calcoloEta = function(){
        var dataNascita = new Date(document.getElementById("data").value);
        var eta = dataOggi.getFullYear() - dataNascita.getFullYear();
        var meseNascita = dataNascita.getMonth();
        var giornoNascita = dataNascita.getDate();
        
        if(meseNascita > meseOggi || (meseNascita == meseOggi && giornoNascita > giornoOggi)) {
            eta = eta - 1;
        };
        
        return eta;
    };
}

console.log(26 < 07);

// BUTTON CLICK
btn.addEventListener("click", function() {

    const nuovaPersona = new Persona(nome.value, cognome.value, nascita.value);
    
    // STAMPA
    document.getElementById("lista").innerHTML += `
    <tr>
    <td>${nuovaPersona.nome} ${nuovaPersona.cognome}</td>
    <td>${nuovaPersona.calcoloEta()}</td>
    </tr>
    `;

});
