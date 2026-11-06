# Kantin Kontainer FakDa - POS System

Sebuah proyek sistem *Point-of-Sale* (POS) dan antarmuka *Checkout* sederhana berbasis web untuk "Kantin Kontainer FakDa". Proyek ini dibangun sepenuhnya menggunakan Vanilla HTML, CSS, dan JavaScript tanpa framework tambahan (sesuai standar *frontend* murni).

## 🚀 Fitur Utama
- **Estetika Premium-Elegant**: Menggunakan pendekatan *Dark Mode*, *Glassmorphism* (kartu transparan dengan *backdrop blur*), dan aksen warna *Soft Gold*.
- **State Management Sederhana**: Keranjang belanja berjalan di sisi klien (browser) untuk menangani kalkulasi item dan total secara *real-time*.
- **WhatsApp Dispatching Order**: Meneruskan rincian pesanan langsung ke nomor WhatsApp penjual.
- **Opsi Pembayaran**: Dilengkapi pesan *template* yang otomatis menyesuaikan apakah pelanggan memilih pembayaran "Tunai" atau melampirkan bukti "QRIS".

## 📂 Struktur File
- `index.html` - Struktur utama dari antarmuka POS Kantin.
- `style.css` - Lembar gaya utama yang menyimpan variabel warna, desain *glassmorphism*, dan transisi tombol.
- `script.js` - Logika penambahan produk, kalkulasi total, format mata uang, dan *routing* pesanan ke WhatsApp.
- `README.md` - Dokumentasi proyek ini.

## 🛠️ Cara Penggunaan & Konfigurasi
1. *Clone* atau unduh repositori ini.
2. Buka folder proyek, lalu buka file `script.js` menggunakan *text editor* atau IDE favorit Anda (VSCode, Pydroid 3, Termux/nano, dll).
3. Cari variabel `adminPhoneNumber` di dalam fungsi `checkoutWhatsApp` (sekitar baris ke-49).
4. Ubah valuenya dari `"628XXXXXXXXXX"` menjadi nomor WhatsApp penjual/kantin yang sebenarnya. (Gunakan kode negara `62` tanpa tanda `+` atau angka `0` di depan).
5. Klik ganda `index.html` untuk membukanya di peramban web (browser).
6. Untuk menambahkan gambar produk (misal: `fotoproduk/Bakso.jpg` atau `Qris.jpeg`), cukup modifikasi div produk di dalam file `index.html` dengan menambahkan tag `<img src="path/to/image">`.

## 💻 Tech Stack
- HTML5
- CSS3 (Vanilla / Custom Variables)
- JavaScript (ES6)

---
*Dibuat untuk melengkapi sistem manajemen kantin dengan alur yang ringan, cepat, dan mudah di-*host* (misal via GitHub Pages atau Vercel).*
