UNDANGAN DIGITAL BASIC - GITHUB PAGES

1. Buka GitHub dan buat repository baru, misalnya: undangan-andi-sarah
2. Upload semua file dan folder dari paket ini ke repository.
3. Buka Settings > Pages.
4. Pada Build and deployment, pilih Deploy from a branch.
5. Pilih branch main dan folder /(root), lalu Save.
6. Tunggu GitHub Pages menerbitkan website.

CONTOH LINK:
https://USERNAME.github.io/undangan-andi-sarah/?to=ahmad
https://USERNAME.github.io/undangan-andi-sarah/?to=siti
https://USERNAME.github.io/undangan-andi-sarah/?to=rahman

MENGUBAH NAMA TAMU:
Edit file js/guests.js. Tambahkan kode dan nama:
  budi: "Bapak Budi",

Lalu bagikan link:
  https://USERNAME.github.io/undangan-andi-sarah/?to=budi

CATATAN:
- Ganti USERNAME dengan username GitHub milik Anda.
- Ganti data pengantin, tanggal, lokasi, dan teks di index.html.
- Foto masih berupa placeholder; ganti dengan foto sendiri dan sesuaikan HTML/CSS.
- Versi ini tidak memakai database, Apps Script, atau Google Sheets.
- Nama tamu pada daftar ini tersimpan di file JavaScript publik. Jangan masukkan data pribadi atau sensitif.
- RSVP belum tersimpan otomatis; versi awal dapat menggunakan tombol WhatsApp atau ditambahkan backend nanti.
