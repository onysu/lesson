'use strict';

var numberOfItems = $('#page .list-group').length; // Dapatkan jumlah total item yang harus diberi halaman
var limitPerPage = 6; // Batas item per setiap halaman
$('#page .list-group:gt(' + (limitPerPage - 1) + ')').hide(); // Sembunyikan semua item melebihi batas halaman (mis., item ke-5, item ke-6, dll.)
var totalPages = Math.round(numberOfItems / limitPerPage); // Dapatkan jumlah halaman
$(".pagination").append("<li class='page-item current-page active'><a class='page-link' href='javascript:void(0)'>" + 1 + "</a></li>"); // Tambahkan penanda halaman pertama

// Loop untuk memasukkan nomor halaman untuk setiap set item sama dengan batas halaman (misalnya, batas 4 dengan 20 item total = sisipkan 5 halaman)
for (var i = 2; i <= totalPages; i++) {
    $(".pagination").append("<li class='page-item current-page'><a class='page-link' href='javascript:void(0)'>" + i + "</a></li>"); // Masukkan nomor halaman ke dalam tab pagination
}

// Tambahkan tombol berikutnya setelah semua nomor halaman
$(".pagination").append("<li id='next-page' class='page-item'><a class='page-link' href='javascript:void(0)' aria-label=Next><span aria-hidden=true>&raquo;</span></a></li>");

// Fungsi yang menampilkan item baru berdasarkan nomor halaman yang diklik
$(".pagination li.current-page").on("click", function() {
    // Periksa apakah nomor halaman yang diklik adalah halaman yang sedang ditampilkan
    if ($(this).hasClass('active')) {
        return false; // Kembali salah (yaitu, tidak ada hubungannya, karena pengguna mengklik nomor halaman yang sudah ditampilkan)
    } else {
        var currentPage = $(this).index(); // Dapatkan nomor halaman saat ini
        $(".pagination li").removeClass('active'); // Hapus status kelas 'aktif' dari halaman yang sedang ditampilkan
        $(this).addClass('active'); // Tambahkan status kelas 'aktif' ke halaman yang diklik
        $("#page .list-group").hide(); // Sembunyikan semua item dalam lingkaran, dalam hal ini, semua grup daftar
        var grandTotal = limitPerPage * currentPage; // Dapatkan jumlah item hingga nomor halaman yang diklik

        // Ulangi total item, pilih satu set item baru berdasarkan nomor halaman
        for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
            $("#page .list-group:eq(" + i + ")").show(); // Tampilkan item dari halaman baru yang dipilih
        }
    }

});

// Berfungsi untuk menavigasi ke halaman berikutnya ketika pengguna mengklik id halaman berikutnya (tombol halaman berikutnya)
$("#next-page").on("click", function() {
    var currentPage = $(".pagination li.active").index(); // Identifikasi halaman aktif saat ini
    // Periksa untuk memastikan bahwa menavigasi ke halaman berikutnya tidak akan melebihi jumlah total halaman
    if (currentPage === totalPages) {
        return false; // Kembali salah (yaitu, tidak dapat menavigasi lebih jauh, karena akan melebihi jumlah halaman maksimum)
    } else {
        currentPage++; // Tingkatkan halaman satu per satu
        $(".pagination li").removeClass('active'); // Hapus status kelas 'aktif' dari halaman saat ini
        $("#page .list-group").hide(); // Sembunyikan semua item di loop pagination
        var grandTotal = limitPerPage * currentPage; // Dapatkan jumlah total item hingga halaman yang dipilih

        // Ulangi total item, pilih satu set item baru berdasarkan nomor halaman
        for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
            $("#page .list-group:eq(" + i + ")").show(); // Tampilkan item dari halaman baru yang dipilih
        }

        $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass('active'); // Jadikan nomor halaman baru sebagai halaman 'aktif'
    }
});

// Berfungsi untuk menavigasi ke halaman sebelumnya ketika pengguna mengklik id halaman sebelumnya (tombol halaman sebelumnya)
$("#previous-page").on("click", function() {
    var currentPage = $(".pagination li.active").index(); // Identifikasi halaman aktif saat ini
    // Periksa untuk memastikan bahwa pengguna tidak berada di halaman 1 dan mencoba menavigasi ke halaman sebelumnya
    if (currentPage === 1) {
        return false; // Kembali salah (yaitu, tidak dapat menavigasi ke halaman sebelumnya karena halaman saat ini adalah halaman 1)
    } else {
        currentPage--; // Kurangi halaman satu per satu
        $(".pagination li").removeClass('active'); // Hapus kelas status 'aktifkan' dari nomor halaman aktif sebelumnya
        $("#page .list-group").hide(); // Sembunyikan semua item di loop pagination
        var grandTotal = limitPerPage * currentPage; // Dapatkan jumlah total item hingga halaman yang dipilih

        // Ulangi total item, pilih satu set item baru berdasarkan nomor halaman
        for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
            $("#page .list-group:eq(" + i + ")").show(); // Tampilkan item dari halaman baru yang dipilih
        }

        $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass('active'); // Jadikan nomor halaman baru sebagai halaman 'aktif'
    }
});