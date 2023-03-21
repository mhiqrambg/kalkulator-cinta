function hitungCinta() {
  // Menonaktifkan tombol "Hitung"
  document.getElementById("btnHitung").disabled = true;

  var nama1 = document.getElementById("nama1").value;
  var nama2 = document.getElementById("nama2").value;

  if (nama1 == "" || nama2 == "") {
    Swal.fire("Error", "Mohon masukkan nama kedua pasangan", "error");
    return false;
  }

  Swal.fire({
    title: "Menghitung...",
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
    }
  }).then((result) => {
    var persentase = Math.floor(Math.random() * 100) + 1;
    var pesan = "";

    if (persentase <= 20) {
      pesan = "Sepertinya kamu dan pasanganmu tidak cocok, coba cari yang lain!";
    } else if (persentase <= 50) {
      pesan = "Kamu dan pasanganmu mungkin memiliki beberapa perbedaan, tapi tetap bisa diperbaiki";
    } else if (persentase <= 80) {
      pesan = "Kamu dan pasanganmu adalah pasangan yang cocok, tetap jaga hubunganmu!";
    } else {
      pesan = "Kamu dan pasanganmu adalah pasangan yang sempurna, selamat!";
    }

    document.getElementById("persentase").innerHTML = "Persentase Cinta: " + persentase + "%";
    document.getElementById("pesan").innerHTML = pesan;
    document.getElementById("result").style.display = "block";
  });

  return false;
}
