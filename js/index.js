var na = 0;
var txt = "EZEQUIEL_GATICA";
var speed = 150;
var redes = document.getElementById("redes");
var espacio = document.getElementById("espacio");
var navbar = document.getElementById("navbar");

function tW() {
    // redes.style.display = 'none';
    // navbar.style.display = 'none';

    if (na < txt.length) {
        var txtPrint = txt.toUpperCase();
        document.getElementById("text").innerHTML += txtPrint.charAt(na);
        na++;
        setTimeout(tW, speed);
    }
    setTimeout(() => {
        showRedes()
    }, 2500);
}
function showRedes() {
    redes.style.display = 'block';
    navbar.style.display = 'block';
    espacio.style.display = 'none';
}