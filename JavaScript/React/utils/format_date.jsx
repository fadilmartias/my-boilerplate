export function formatDate(dateString) {
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const date = new Date(dateString);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${day} ${months[monthIndex]} ${year}`;
}

export function formatdmY(dateString) {
  // Membuat objek Date dari string tanggal
  var date = new Date(dateString);

  // Mengambil komponen tanggal, bulan, dan tahun dari objek Date
  var day = date.getDate();
  var month = date.getMonth() + 1; // Ingat: Januari dimulai dari 0
  var year = date.getFullYear();

  // Format tanggal dalam format "d-m-Y"
  var formattedDate = day + "-" + month + "-" + year;

  // Menampilkan tanggal dalam format yang diinginkan
  return formattedDate;
}
