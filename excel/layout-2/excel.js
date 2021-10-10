// Dapatkan tombolnya
var mybutton = document.getElementById("myBtn");
// Saat pengguna menggulir ke bawah 20px dari atas dokumen, perlihatkan tombol
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// Saat pengguna mengklik tombol, gulir ke atas dokumen
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}