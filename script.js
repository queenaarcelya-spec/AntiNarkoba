/* =====================================
   GENERASI BERSIH - SCRIPT.JS
===================================== */

// MEMUAT FOOTER DARI FILE footer.html
document.addEventListener("DOMContentLoaded", function () {

    const footerContainer = document.getElementById("footer-container");

    fetch("footer.html")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Footer tidak ditemukan");
            }

            return response.text();
        })
        .then(function (data) {
            footerContainer.innerHTML = data;
        })
        .catch(function () {
            footerContainer.innerHTML = `
                <footer class="site-footer">
                    <h3>GENERASI BERSIH</h3>
                    <p>Sehat, Jujur, Kreatif, dan Berintegritas.</p>
                    <p>SMKN 9 Medan | XI RPL-4</p>
                    <p>&copy; 2026 Generasi Bersih.</p>
                </footer>
            `;
        });


    // FORM KONTAK
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            alert("Terima kasih! Pesan kamu berhasil disiapkan.");

            contactForm.reset();
        });
    }


    // MENUTUP MENU NAVBAR SETELAH LINK DIKLIK DI HP
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navbarMenu = document.getElementById("menuNavbar");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (
                navbarMenu &&
                navbarMenu.classList.contains("show")
            ) {
                const menu = bootstrap.Collapse.getOrCreateInstance(navbarMenu);
                menu.hide();
            }
        });
    });

});
