// Dapatkan tombolnya
var mybutton = document.getElementById("myBtn");

// Saat pengguna menggulir ke bawah 20px dari atas dokumen, perlihatkan tombol
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Ketika pengguna mengklik tombol, gulir ke atas dokumen
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}