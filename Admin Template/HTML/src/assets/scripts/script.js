document
  .querySelector(".btn-close-topbar")
  .addEventListener("click", function () {
    if (document.querySelector(".sidebar").classList.contains("active")) {
      document.querySelector(".topbar").classList.remove("active");
      document.querySelector(".sidebar").classList.remove("active");
      document
        .querySelector(".content-wrapper")
        .classList.replace("pl-60", "pl-0");
      document
        .querySelector(".sidebar .wrapper")
        .classList.replace("flex", "hidden");
    } else {
      document.querySelector(".topbar").classList.add("active");
      document.querySelector(".sidebar").classList.add("active");
      document
        .querySelector(".content-wrapper")
        .classList.replace("pl-0", "pl-60");
      document
        .querySelector(".sidebar .wrapper")
        .classList.replace("hidden", "flex");
    }
  });
document.addEventListener("click", function (event) {
  const dropdown = document.querySelector(".dropdown");
  const userInfo = document.querySelector(".user-info");

  // Jika yang diklik bukan bagian dari dropdown atau user-info
  if (!dropdown.contains(event.target) && !userInfo.contains(event.target)) {
    dropdown.classList.remove("active");
  }
});

document.querySelector(".user-info").addEventListener("click", function () {
  const dropdown = document.querySelector(".dropdown");
  dropdown.classList.toggle("active");
});

// document.querySelectorAll(".dropdown-sidebar").forEach(function (element) {
//   element.addEventListener("click", function () {
//     const dropdownContent = this.nextElementSibling;
//     dropdownContent.classList.toggle("active");
//   });
// });

// Daftar breadcrumb yang akan ditampilkan
const breadcrumbItems = ["Components", "Blank Page"]; // Anda bisa mengubah array ini sesuai dengan kebutuhan

// Ambil elemen breadcrumb
const breadcrumbContainer = document.getElementById("breadcrumb");

// Buat dan tambahkan elemen breadcrumb secara dinamis
breadcrumbItems.forEach((item, index) => {
  const breadcrumbItem = document.createElement("div");

  // Tambahkan teks dan class
  breadcrumbItem.textContent = item;

  // Jika bukan item terakhir, tambahkan tanda "/"
  if (index < breadcrumbItems.length && index != 0) {
    const separator = document.createElement("div");
    separator.textContent = "/";
    breadcrumbContainer.appendChild(separator);
  }

  breadcrumbContainer.appendChild(breadcrumbItem);
});

$(document).ready(function () {
  // Menambahkan event listener untuk semua elemen dengan data-toggle="modal"
  $('[data-toggle="modal"]').click(function () {
    var targetModal = $(this).attr("data-target"); // Mendapatkan nilai dari atribut data-target yang diklik
    $(targetModal).addClass("active"); // Menampilkan modal
    $("body").addClass("modal-open"); // Menambahkan class untuk mencegah scrolling background
  });

  $('[data-dismiss="modal"]').click(function () {
    // Menemukan modal yang sedang aktif dan menutupnya
    $(this).closest(".modal").removeClass("active");
    $("body").removeClass("modal-open"); // Menambahkan class untuk mencegah scrolling background
  });

  // Fungsi untuk modal
  $.fn.modal = function (type) {
    if (type === "show") {
      $(this).addClass("active");
      $("body").addClass("modal-open"); // Menambahkan class untuk mencegah scrolling background
    } else if (type === "hide") {
      $(this).removeClass("active");
      $("body").removeClass("modal-open"); // Menambahkan class untuk mencegah scrolling background
    }
  };

  $("#loading-screen").click(function () {
    $(".loading-screen.wrapper").toggleClass("active");
  });
  $("#disable-loading").click(function () {
    $(".loading-screen.wrapper").toggleClass("active");
  });

  // Menambahkan event listener untuk semua elemen dengan data-toggle="modal"
  $('[data-toggle="collapse"]').click(function () {
    var targetCollapse = $(this).attr("data-target"); // Mendapatkan nilai dari atribut data-target yang diklik
    $(targetCollapse).toggleClass("active"); // Menampilkan collapse
  });
});
