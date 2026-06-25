# SkinMatch - Panduan Prototype Capstone Project

SkinMatch adalah web interaktif untuk rekomendasi skincare. Cara kerja sistem:

1. Halaman Utama (index.html)
   Menampilkan katalog produk secara dinamis menggunakan data dari js/products.js.

2. Skin Quiz (quiz.html & js/quiz.js)
   Pertanyaan interaktif untuk menganalisis tipe kulit (Oily, Dry, Sensitive, Combination). Menghitung skor lalu mengarahkan ke produk yang cocok.

- Tambahan fitur karena belum ada QR/flyer

3. Detail Produk (product.html)
   Menampilkan info produk, spanduk rekomendasi kuis, dan tab info (Deskripsi, Kandungan, Manfaat, Cara Pakai).

4. Data Produk (js/products.js)
   Menyimpan semua data produk skincare.

5. Logika Navigasi (js/main.js)
   Mengatur efek scroll header dan status menu aktif.

6. Tampilan (css/style.css)
   Mengatur tema gelap dan desain web.

Cara Menjalankan Prototype:

1. Buka folder Prototype Capstone di VS Code.
2. Instal ekstensi Live Server jika belum ada.
3. Buka file index.html.
4. Klik tombol Go Live di bagian kanan bawah VS Code (atau klik kanan index.html lalu pilih Open with Live Server).
5. Aplikasi akan terbuka di browser secara otomatis.

Tambahan:

1. Masih dalam fase prototipe
   Access ke website akan diganti seiring penambahan fitur QR sehingga setiap product memiliki halaman tersendiri.
2. Akan menggunakan Database untuk menyimpan data setiap produk skincare(bukan hardcode) agar tidak berat di bagian user(Data produk berserta asset yang berhubungan dengan produk)
3. QR dan flyer dalam proses design
