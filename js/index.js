var na = 0;
var txt = "EZEQUIEL_GATICA";
var speed = 150;
function tW() {
    if (na < txt.length) {
        var txtPrint = txt.toUpperCase();
        document.getElementById("text").innerHTML += txtPrint.charAt(na);
        na++;
        setTimeout(tW, speed);
    }
}
setTimeout(() => {
    // console.log("Pasaron 4 segundos")
    $('#redes').show();
    $('#navbar').show();
    $('#espacio').hide();
}, 2500);