/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function comprobar() {
    var usuario = [];
    var maquina = [];
    var serepite = false;
    var coinciden = 0;

    usuario = numerousuario();

    serepite = serepiten(usuario);

    if (serepite) {
        alert("Número repetido, porfavor introduzca otro");
    } else {

        maquina = generarmaquina();

        maquina.sort();
        usuario.sort();

        //Se comprueba cuantos números coinciden
        for (var i = 0; i < usuario.length; i++) {
            for (var j = 0; j < maquina.length; j++) {
                if (parseInt(usuario[i]) === parseInt(maquina[j])) {

                    coinciden++;
                }
            }

        }
        document.write("Tus números: " + usuario.toString() + "<br>");
        document.write("Números de la máquina: " + maquina.toString() + "<br>");
        document.write("Coinciden " + coinciden + " números");


    }




}

function numerousuario() {
    var arraynum = [""];


    for (var i = 0; i < 7; i++) {
        arraynum[i] = document.getElementById("n" + i).value;
    }

    return arraynum;
}

/* function comprobar(){
 var number;
 var arraypersona = [];
 
 for (var i = 0; i < 6; i++) {
 number = document.getElementById("n" + i).value;
 arraypersona[i] = number;
 }
 
 for (var i = 0; i < 6; i++) {
 if(parseInt(arraypersona[i]) >)
 }
 } */

/**
 * Método para comprobar si el número está entre los valores permitidos
 * Actua en el onblur del html en las casillas de los números
 * @param {type} num
 * @return {undefined}
 */
function estabien(num) {


    if (document.getElementById(num).value > 49 || document.getElementById(num).value < 1) {
        do {
            document.getElementById(num).value = prompt("Introduce un número entre 1 y 49");
        } while (document.getElementById(num).value > 49 || document.getElementById(num).value < 1);
    }
}

function serepiten(numusuario) {
    var soniguales = false;

    for (var i = 0; i < 5; i++) {
        for (var j = i + 1; j < 6; j++) {
            if (numusuario[i] === numusuario[j]) {
                soniguales = true;
            }
        }
    }
    return soniguales;
}
/**
 * Método para comprobar si el número está entre los valores permitidos
 * Actua en el onblur del html en la casilla del reintegro
 * @param {type} num
 * @return {undefined}
 */
function estabienreintegro(num) {


    if (document.getElementById(num).value > 9 || document.getElementById(num).value < 0) {
        do {
            document.getElementById(num).value = prompt("Introduce un número entre 0 y 9");
        } while (document.getElementById(num).value > 9 || document.getElementById(num).value < 0);
    }
}
/**
 * Método para generar el número premiado
 * @return {Array|generarmaquina.arraymachine}
 */
function generarmaquina() {
    var arraymachine = new Array(7);
    var soniguales = true;


    while (soniguales) {

        soniguales = false;
        
        for (var i = 0; i < arraymachine.length - 1; i++) {
            arraymachine[i] = parseInt((Math.random() * 49) + 1);
        }
        //Aquí utilizo el mismo código de function serepiten()
        for (var i = 0; i < 5; i++) {
            for (var j = i + 1; j < 6; j++) {
                if (arraymachine[i] === arraymachine[j]) {
                    soniguales = true;
                }
            }
        }

    }
    arraymachine[arraymachine.length - 1] = parseInt((Math.random() * 10));

    return arraymachine;
}