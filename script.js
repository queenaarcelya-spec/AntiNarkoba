// MEMUAT FOOTER
document.addEventListener("DOMContentLoaded", function () {

  const footerContainer = document.getElementById("footer-container");

  fetch("footer.html")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Footer gagal dimuat.");
      }

      return response.text();
    })
    .then(function (data) {
      footerContainer.innerHTML = data;
    })
    .catch(function (error) {
      console.error(error);

      footerContainer.innerHTML =
        "<footer class='site-footer'>" +
        "<div class='container'>" +
        "<p class='footer-slogan'>GENERASI BERSIH</p>" +
        "<p class='footer-copyright'>© 2026 Generasi Bersih.</p>" +
        "</div></footer>";
    });

});

// FORM KONTAK
const contactForm = document.getElementById("contactForm");

if (contactForm) {

  contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const nama = document.getElementById("nama").value;

    alert(
      "Terima kasih, " + nama +
      "! Pesan kamu berhasil diterima."
    );

    contactForm.reset();

  });

}

// MENU NAVBAR MOBILE
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

navLinks.forEach(function (link) {

  link.addEventListener("click", function () {

    const menu = document.querySelector(".navbar-collapse");

    if (menu && menu.classList.contains("show")) {

      const collapse =
        bootstrap.Collapse.getOrCreateInstance(menu);

      collapse.hide();

    }

  });

});
