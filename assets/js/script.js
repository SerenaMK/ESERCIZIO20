// VARIABILI GENERALI
var nome = document.getElementById("nome");
var cognome = document.getElementById("cognome");
var nascita = document.getElementById("data");
var btn = document.getElementById("button");

// DATA OGGI
var dataOggi = new Date;
var meseOggi = dataOggi.getMonth() + 1;
var giornoOggi = dataOggi.getDate();

// CLASSE
function Persona(_nome, _cognome, _nascita) {
    this.nome = _nome;
    this.cognome = _cognome;
    this.nascita = _nascita;

    this.calcoloEta = function(){
        var eta = dataOggi.getFullYear() - nascita.value.slice(0, 4);
        var meseNascita = nascita.value.slice(5, 7);
        var giornoNascita = nascita.value.slice(9, 11);

        if(meseNascita == meseOggi && giornoNascita > giornoOggi) {
            eta = eta - 1;
        }
        
        if(meseNascita > meseOggi) {
            eta = eta - 1;
        }

        return eta;
    };
}

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
