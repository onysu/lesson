// script tombol kembali keatas
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

// cari dengan nama video
$(document).ready(function() {
    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myList article").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

// autoplay dengan mouse
// const clip = document.querySelectorAll('.clip');
// for (let i = 0; i < clip.length; i++) {
//     clip[i].addEventListener('mouseenter', function (e) {
//         clip[i].play()
//     });
//     clip[i].addEventListener('mouseout', function (e) {
//         clip[i].pause()
//     });
// }

// Fancybox Config
$('[data-fancybox="video-gallery"]').fancybox({
    buttons: [
        "thumbs",
        "close"
        // "slideShow",
        // "zoom",
        // "fullScreen",
        // "share",
    ],
    loop: false,
    protect: true
});