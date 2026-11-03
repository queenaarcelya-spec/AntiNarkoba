
/* MEMUAT FOOTER DARI FILE footer.html */
fetch("footer.html")
  .then(response => {
    if (!response.ok) {
      throw new Error("Footer tidak ditemukan");
    }
    return response.text();
  })
  .then(data => {
    document.getElementById("footer-container").innerHTML = data;
  })
  .catch(error => {
    console.error("Gagal memuat footer:", error);
  });

/* FUNGSI FORM KONTAK */
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  alert("Terima kasih! Pesan Anda berhasil dikirim.");

  this.reset();
});
