$(document).ready(function () {
  // Daftar breadcrumb yang akan ditampilkan
  const breadcrumbItems = ["Components", "Blank Page"]; // Anda bisa mengubah array ini sesuai dengan kebutuhan

  // Ambil elemen breadcrumb
  const breadcrumbContainer = $("#breadcrumb");

  // Buat dan tambahkan elemen breadcrumb secara dinamis
  breadcrumbItems.forEach((item, index) => {
    const breadcrumbItem = $("<div></div>");

    // Tambahkan teks dan class
    breadcrumbItem.text(item);

    // Jika bukan item terakhir, tambahkan tanda "/"
    if (index < breadcrumbItems.length && index != 0) {
      const separator = $("<div>/</div>");
      breadcrumbContainer.append(separator);
    }

    breadcrumbContainer.append(breadcrumbItem);
  });

  $(".btn-close-topbar").click(function () {
    if ($(".sidebar").hasClass("active")) {
      $(".topbar, .sidebar").removeClass("active");
      $(".sidebar-icon")
        .removeClass("icon-[solar--hamburger-menu-linear]")
        .addClass("icon-[formkit--arrowright]");
      if ($(".sidebar").hasClass("can-minimize")) {
        $(".topbar").addClass("pl-28");
      }
        // Ubah atribut data-toggle menjadi dropdown jika tidak aktif
        $('.item-collapse .collapse-sidebar').attr('data-toggle', 'dropdown');
      // $(".sidebar .wrapper").removeClass("flex").addClass("hidden");
    } else {
      $(".topbar, .sidebar").addClass("active");
      $(".sidebar-icon")
        .removeClass("icon-[formkit--arrowright]")
        .addClass("icon-[solar--hamburger-menu-linear]");
        if ($(".sidebar").hasClass("can-minimize")) {
          $(".topbar").removeClass("pl-28");
        }
        $('.item-collapse .collapse-sidebar').attr('data-toggle', 'collapse');
      // $(".sidebar .wrapper").removeClass("hidden").addClass("flex");
    }
  });

  // Menambahkan event listener untuk semua elemen dengan data-toggle="modal"
  $('[data-toggle="modal"]').click(function () {
    const targetModal = $(this).attr("data-target"); // Mendapatkan nilai dari atribut data-target yang diklik
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
    const targetCollapse = $(this).attr("data-target"); // Mendapatkan nilai dari atribut data-target yang diklik
    $(targetCollapse).toggleClass("active"); // Menampilkan collapse
  });

  // $(".sidebar .item").on("click", function () {
  //   const link = $(this).find("a").attr("href");
  //   window.location.href = link;
  // });

  $('[data-toggle="dropdown"]').click(function (event) {
    event.stopPropagation(); // Menghentikan propagasi event agar tidak memicu event document click
    // const dropdown = $(this).next(".dropdown");
    // dropdown.toggleClass("active");
    const dropdown = $(this).data("target");
    $(dropdown).toggleClass("active");
  });

  $(document).click(function (event) {
    const dropdown = $(".dropdown.active");
    if (
      !dropdown.is(event.target) &&
      dropdown.has(event.target).length === 0 &&
      $('[data-toggle="dropdown"]').has(event.target).length === 0
    ) {
      dropdown.removeClass("active");
    }
  });

});
