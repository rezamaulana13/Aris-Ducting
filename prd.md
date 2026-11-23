# PRODUCT REQUIREMENTS DOCUMENT (PRD)

# DUCTING COMPANY WEBSITE

**Project Type:** Corporate Website & Product Catalog  
**Version:** 1.0  
**Status:** Ready for Implementation Planning  
**Framework:** Bootstrap 5  
**Template Base:** Keystone – BootstrapMade  
**Architecture:** Static Website  
**Database:** None  
**Backend:** None

---

# 1. PROJECT OVERVIEW

## 1.1 Project Description

Ducting Company Website merupakan website profil perusahaan yang bergerak di bidang manufaktur ducting dan jasa instalasi sistem ducting.

Website dirancang sebagai media informasi dan pemasaran digital untuk memperkenalkan perusahaan, menampilkan katalog produk, menjelaskan layanan, memperlihatkan dokumentasi proyek, serta memudahkan calon pelanggan menghubungi perusahaan untuk konsultasi dan permintaan penawaran harga.

Website dibangun menggunakan Bootstrap 5 dengan mengadaptasi template Keystone dari BootstrapMade.

Website bersifat statis dan tidak menggunakan database maupun backend.

Seluruh konten seperti produk, spesifikasi, layanan, foto, dan informasi perusahaan dikelola secara manual melalui file HTML.

## 1.2 Business Background

Perusahaan membutuhkan media digital yang dapat menjelaskan kemampuan produksi ducting dan layanan instalasi kepada calon pelanggan.

Calon pelanggan membutuhkan informasi mengenai:

- Jenis produk ducting.
- Material yang digunakan.
- Spesifikasi produk.
- Kemampuan produksi.
- Jenis layanan instalasi.
- Dokumentasi proyek.
- Pengalaman perusahaan.
- Cara meminta penawaran harga.

Website harus mampu menyampaikan informasi tersebut secara terstruktur dan profesional.

## 1.3 Project Goals

Tujuan utama proyek:

1. Membangun website company profile perusahaan ducting.
2. Menampilkan produk hasil manufaktur perusahaan.
3. Memperkenalkan layanan instalasi ducting.
4. Menampilkan dokumentasi pekerjaan dan proyek.
5. Meningkatkan kepercayaan calon pelanggan.
6. Mempermudah calon pelanggan meminta penawaran harga.
7. Menyediakan informasi perusahaan yang mudah diakses.
8. Meningkatkan visibilitas perusahaan melalui mesin pencari.

## 1.4 Target Audience

Website ditujukan kepada:

- Perusahaan kontraktor.
- Perusahaan konstruksi.
- Kontraktor HVAC.
- Pengelola gedung.
- Industri manufaktur.
- Rumah sakit.
- Hotel.
- Perkantoran.
- Pengembang properti.
- Pemilik proyek komersial dan industri.
- Individu atau perusahaan yang membutuhkan produk ducting.

---

# 2. BUSINESS MODEL

## 2.1 Business Category

Perusahaan mempunyai dua aktivitas utama.

### A. Ducting Manufacturing

Kegiatan produksi berbagai kebutuhan ducting berdasarkan spesifikasi, ukuran, material, dan kebutuhan proyek pelanggan.

### B. Ducting Installation

Kegiatan pengerjaan instalasi sistem ducting di lokasi pelanggan atau proyek.

Cakupan pekerjaan dapat meliputi pengukuran, perencanaan, fabrikasi, pengiriman, instalasi, dan pengujian sesuai kesepakatan proyek.

Catatan: Setiap jenis pekerjaan harus dikonfirmasi berdasarkan kemampuan dan layanan aktual perusahaan.

## 2.2 Website Business Objectives

Website tidak berfungsi sebagai marketplace.

Website berfungsi sebagai:

- Company profile.
- Product catalog.
- Service information.
- Project portfolio.
- Lead generation.
- Request quotation platform.

## 2.3 Conversion Goals

Konversi utama yang diharapkan:

1. Pengunjung menghubungi perusahaan melalui WhatsApp.
2. Pengunjung meminta informasi produk.
3. Pengunjung meminta penawaran harga.
4. Pengunjung mengajukan konsultasi proyek.
5. Pengunjung mengirimkan kebutuhan instalasi ducting.

---

# 3. PROJECT SCOPE

## 3.1 In Scope

Fitur yang termasuk dalam pengembangan:

- Responsive website.
- Company profile.
- Product catalog.
- Product category.
- Product detail.
- Service catalog.
- Service detail.
- Project portfolio.
- Project detail.
- Contact information.
- WhatsApp integration.
- Request quotation form.
- FAQ.
- SEO basic implementation.
- Sitemap XML.
- Robots.txt.
- Structured data.
- Responsive navigation.
- Static content management through HTML.
- Basic JavaScript interactions.

## 3.2 Out of Scope

Fitur yang tidak termasuk dalam pengembangan:

- Database.
- Backend.
- Login dan registrasi.
- Admin dashboard.
- CMS.
- Manajemen stok produk.
- Sistem inventaris.
- Shopping cart.
- Online checkout.
- Payment gateway.
- Transaksi otomatis.
- Order management.
- Customer dashboard.
- Employee dashboard.
- Online quotation calculation.
- Upload file ke server.
- Penyimpanan formulir ke database.
- Real-time notification.
- Sistem tracking proyek.

## 3.3 Important Technical Limitation

Karena website tidak menggunakan backend dan database:

1. Data produk ditulis langsung dalam HTML.
2. Perubahan informasi dilakukan dengan mengedit file.
3. Formulir tidak menyimpan data di server.
4. Permintaan penawaran diteruskan melalui WhatsApp.
5. Tidak ada dashboard untuk mengelola konten.
6. Tidak ada sistem otomatis untuk menghitung harga.
7. Tidak ada autentikasi pengguna.

---

# 4. WEBSITE INFORMATION ARCHITECTURE

## 4.1 Main Navigation

Navigasi utama:

1. Beranda
2. Tentang Kami
3. Produk
4. Layanan
5. Proyek
6. Kontak

CTA utama:

**Konsultasi Sekarang**

CTA diarahkan ke WhatsApp perusahaan.

## 4.2 Website Pages

| No. | Page           | File                 |
| --- | -------------- | -------------------- |
| 1   | Beranda        | index.html           |
| 2   | Tentang Kami   | about.html           |
| 3   | Produk         | products.html        |
| 4   | Detail Produk  | product-details.html |
| 5   | Layanan        | services.html        |
| 6   | Detail Layanan | service-details.html |
| 7   | Proyek         | projects.html        |
| 8   | Detail Proyek  | project-details.html |
| 9   | FAQ            | faq.html             |
| 10  | Kontak         | contact.html         |
| 11  | Error Page     | 404.html             |

---

# 5. FUNCTIONAL REQUIREMENTS

## 5.1 Homepage

**File:** index.html

### Objective

Memperkenalkan perusahaan dan mengarahkan pengunjung menuju produk, layanan, proyek, dan kontak.

### Required Sections

#### A. Header & Navigation

Menampilkan:

- Logo perusahaan.
- Nama perusahaan.
- Navigasi utama.
- Tombol konsultasi.
- Mobile navigation.

Ketentuan:

- Header responsif.
- Navigasi mudah digunakan.
- Logo mengarah ke halaman beranda.
- CTA WhatsApp dapat digunakan pada desktop dan mobile.

#### B. Hero Section

Menampilkan:

- Headline utama.
- Deskripsi singkat perusahaan.
- Background image industri atau instalasi ducting.
- CTA Lihat Produk.
- CTA Konsultasi Proyek.

Contoh headline:

"Solusi Manufaktur dan Instalasi Ducting untuk Kebutuhan Industri dan Komersial."

Contoh deskripsi:

"Kami menyediakan solusi pembuatan dan instalasi ducting untuk mendukung kebutuhan sistem distribusi udara pada berbagai proyek industri dan komersial."

#### C. Company Introduction

Menampilkan:

- Foto perusahaan atau aktivitas produksi.
- Deskripsi singkat perusahaan.
- Keunggulan perusahaan.
- Link menuju Tentang Kami.

#### D. Product Categories

Menampilkan kategori produk unggulan.

Setiap kategori memiliki:

- Foto produk.
- Nama kategori.
- Deskripsi singkat.
- Tombol Lihat Produk.

#### E. Featured Products

Menampilkan beberapa produk pilihan.

Informasi setiap produk:

- Foto.
- Nama produk.
- Kategori.
- Deskripsi singkat.
- Tombol Detail Produk.
- Tombol Tanya Produk.

#### F. Services Overview

Menampilkan layanan utama perusahaan.

Setiap layanan memiliki:

- Ikon atau foto.
- Nama layanan.
- Deskripsi.
- Tombol Detail Layanan.

#### G. Why Choose Us

Menampilkan alasan pelanggan memilih perusahaan.

Contoh poin:

- Produksi berdasarkan kebutuhan proyek.
- Pemilihan material sesuai spesifikasi.
- Pengerjaan terencana.
- Dukungan tenaga teknis.
- Fokus pada kualitas hasil pekerjaan.

Semua klaim harus disesuaikan dengan kondisi perusahaan.

#### H. Industries We Serve

Menampilkan sektor industri yang menjadi target pasar.

Contoh:

- Industrial Facilities.
- Commercial Buildings.
- Offices.
- Hospitals.
- Hotels.
- Warehouses.

#### I. Project Portfolio

Menampilkan dokumentasi proyek pilihan.

Informasi:

- Foto proyek.
- Nama proyek.
- Lokasi.
- Jenis pekerjaan.
- Tombol Lihat Proyek.

#### J. Work Process

Menampilkan proses pengerjaan secara berurutan:

1. Konsultasi kebutuhan.
2. Survei dan pengukuran.
3. Perencanaan dan penawaran.
4. Fabrikasi ducting.
5. Pengiriman dan instalasi.
6. Pemeriksaan hasil pekerjaan.
7. Serah terima.

Tahapan aktual dapat disesuaikan dengan prosedur perusahaan.

#### K. FAQ Preview

Menampilkan beberapa pertanyaan umum.

#### L. CTA Section

Headline:

"Butuh Solusi Ducting untuk Proyek Anda?"

Deskripsi:

"Konsultasikan kebutuhan produk maupun instalasi ducting bersama tim kami."

CTA:

- Konsultasi WhatsApp.
- Hubungi Kami.

#### M. Footer

Menampilkan:

- Logo.
- Deskripsi perusahaan.
- Navigasi.
- Link produk.
- Link layanan.
- Alamat.
- Nomor WhatsApp.
- Email.
- Media sosial.
- Copyright.

---

## 5.2 About Us

**File:** about.html

### Objective

Menjelaskan identitas dan kredibilitas perusahaan.

### Required Sections

1. Page Hero / Breadcrumb.
2. Company Overview.
3. Company History.
4. Vision & Mission.
5. Company Values.
6. Manufacturing Capabilities.
7. Installation Capabilities.
8. Quality Commitment.
9. CTA Contact.

### Company Overview

Konten meliputi:

- Nama perusahaan.
- Tahun berdiri.
- Bidang usaha.
- Lokasi perusahaan.
- Area layanan.
- Penjelasan kegiatan manufaktur.
- Penjelasan layanan instalasi.

### Vision & Mission

Konten diambil dari informasi resmi perusahaan.

Jangan membuat visi dan misi fiktif.

### Manufacturing Capabilities

Menampilkan:

- Dokumentasi fasilitas produksi.
- Mesin atau peralatan.
- Proses fabrikasi.
- Material yang digunakan.
- Kemampuan produksi.

Hanya informasi yang telah dikonfirmasi yang boleh ditampilkan.

---

## 5.3 Product Catalog

**File:** products.html

### Objective

Menampilkan seluruh kategori dan produk yang benar-benar tersedia dari perusahaan.

### Product Categories – Proposed

Kategori berikut merupakan kandidat awal yang perlu dikonfirmasi.

#### 1. Rectangular Duct

Deskripsi:

Saluran udara berbentuk persegi atau persegi panjang yang digunakan dalam sistem distribusi udara HVAC.

#### 2. Spiral / Round Duct

Deskripsi:

Saluran udara berbentuk bulat untuk kebutuhan distribusi udara.

#### 3. Flexible Duct

Deskripsi:

Saluran udara fleksibel untuk kebutuhan koneksi tertentu dalam instalasi HVAC.

#### 4. Duct Fittings

Contoh:

- Elbow.
- Reducer.
- Transition.
- Tee.
- Branch.
- Offset.

#### 5. Air Grille & Diffuser

Contoh:

- Supply Air Grille.
- Return Air Grille.
- Ceiling Diffuser.
- Linear Diffuser.

#### 6. Damper

Contoh:

- Volume Control Damper.
- Fire Damper.
- Backdraft Damper.

#### 7. Duct Insulation

Contoh:

- Fiberglass Insulation.
- Glasswool Insulation.
- Elastomeric Insulation.
- Aluminum Foil Facing.

**Penting:** Kategori tersebut tidak otomatis menjadi katalog final. Produk yang tidak diproduksi atau tidak dijual perusahaan tidak boleh ditampilkan sebagai produk perusahaan.

### Product Listing Requirements

Setiap kartu produk menampilkan:

- Foto produk.
- Nama produk.
- Kategori.
- Deskripsi pendek.
- Tombol Detail.
- Tombol Tanya Produk.

### Product Filter

Fitur filter kategori dapat dibuat menggunakan JavaScript.

Ketentuan:

- Filter berjalan tanpa backend.
- Data produk tersedia dalam HTML.
- Tidak memerlukan database.
- Tidak memerlukan API.

### Product Search

Opsional.

Jika diterapkan, pencarian hanya bekerja terhadap produk yang sudah dimuat pada halaman.

### Product Display

Gunakan grid responsif:

- Desktop: 3 kolom.
- Tablet: 2 kolom.
- Mobile: 1 kolom.

Jumlah kolom dapat menyesuaikan ukuran layar.

---

## 5.4 Product Detail

**File:** product-details.html

### Objective

Memberikan informasi produk secara lengkap.

### Required Information

Setiap halaman detail produk dapat memuat:

1. Nama produk.
2. Foto utama.
3. Galeri foto.
4. Kategori produk.
5. Deskripsi.
6. Fungsi produk.
7. Material.
8. Spesifikasi teknis.
9. Ukuran atau dimensi.
10. Pilihan custom jika tersedia.
11. Aplikasi penggunaan.
12. Produk terkait.
13. CTA WhatsApp.

### Example Product Specification

| Specification | Example                |
| ------------- | ---------------------- |
| Product Name  | Rectangular Duct       |
| Material      | Galvanized Steel       |
| Shape         | Rectangular            |
| Application   | HVAC Air Distribution  |
| Dimensions    | Custom                 |
| Thickness     | Based on Specification |
| Finishing     | Based on Requirement   |

Contoh ini merupakan ilustrasi struktur spesifikasi, bukan spesifikasi resmi perusahaan.

### Product Inquiry

Tombol:

"Tanyakan Produk Ini"

Ketika diklik, website membuka WhatsApp dengan pesan yang telah terisi.

Contoh:

Halo, saya ingin bertanya mengenai produk Rectangular Duct.

Mohon informasi spesifikasi, material, ukuran, dan penawaran harganya.

---

## 5.5 Services

**File:** services.html

### Objective

Menampilkan jasa yang disediakan perusahaan.

### Proposed Services

#### A. Ducting Fabrication

Produksi ducting berdasarkan ukuran, gambar kerja, material, dan spesifikasi kebutuhan proyek.

#### B. Ducting Installation

Pemasangan sistem ducting pada lokasi proyek.

#### C. HVAC Ducting System

Pengerjaan sistem distribusi udara untuk kebutuhan HVAC.

#### D. Custom Ducting

Produksi ducting berdasarkan kebutuhan dan desain pelanggan.

#### E. Ducting Design & Planning

Perencanaan dan gambar kerja ducting apabila layanan ini tersedia.

#### F. Ducting Maintenance

Perawatan atau perbaikan ducting apabila layanan ini tersedia.

### Service Card

Setiap layanan menampilkan:

- Foto atau ikon.
- Nama layanan.
- Deskripsi.
- Link detail.
- CTA konsultasi.

---

## 5.6 Service Detail

**File:** service-details.html

### Objective

Memberikan penjelasan lengkap mengenai setiap layanan.

### Required Sections

1. Service Hero.
2. Service Overview.
3. Service Benefits.
4. Work Scope.
5. Work Process.
6. Supporting Equipment / Capabilities.
7. Related Projects.
8. FAQ.
9. CTA Consultation.

Konten harus sesuai dengan kemampuan aktual perusahaan.

---

## 5.7 Project Portfolio

**File:** projects.html

### Objective

Menampilkan hasil pekerjaan dan dokumentasi proyek perusahaan.

### Project Information

Setiap proyek dapat menampilkan:

- Nama proyek.
- Foto proyek.
- Lokasi.
- Jenis bangunan.
- Jenis pekerjaan.
- Tahun pengerjaan.
- Deskripsi pekerjaan.

Informasi proyek hanya ditampilkan jika sudah tersedia dan mendapatkan izin publikasi.

### Project Categories

Contoh kategori:

- Industrial Project.
- Commercial Building.
- Office Building.
- Hospital Project.
- Hotel Project.
- Warehouse Project.

### Project Filter

Pengunjung dapat melakukan filter berdasarkan kategori proyek menggunakan JavaScript.

Tidak menggunakan database.

---

## 5.8 Project Detail

**File:** project-details.html

### Required Sections

1. Project Hero.
2. Project Overview.
3. Project Gallery.
4. Project Location.
5. Scope of Work.
6. Products Used.
7. Project Description.
8. Related Projects.
9. CTA Consultation.

---

## 5.9 Contact

**File:** contact.html

### Objective

Mempermudah pengunjung menghubungi perusahaan.

### Required Information

- Alamat perusahaan.
- Nomor telepon.
- WhatsApp.
- Email.
- Jam operasional.
- Area layanan.
- Google Maps jika tersedia.

### Contact Form

Formulir memiliki field:

| Field           | Requirement |
| --------------- | ----------- |
| Nama            | Required    |
| Nama Perusahaan | Optional    |
| WhatsApp        | Required    |
| Email           | Optional    |
| Kebutuhan       | Required    |
| Lokasi Proyek   | Optional    |
| Pesan           | Required    |

### Form Behavior

1. Pengunjung mengisi formulir.
2. JavaScript melakukan validasi dasar.
3. JavaScript menyusun pesan WhatsApp.
4. Browser membuka WhatsApp.
5. Pengunjung mengirim pesan secara manual.

### Example WhatsApp Message

Halo, saya ingin berkonsultasi mengenai kebutuhan ducting.

Nama: [Nama]  
Perusahaan: [Perusahaan]  
WhatsApp: [Nomor]  
Kebutuhan: [Kebutuhan]  
Lokasi Proyek: [Lokasi]

Pesan:
[Isi Pesan]

Mohon informasi lebih lanjut. Terima kasih.

### Important

Formulir tidak menyimpan informasi pelanggan.

Website tidak boleh menampilkan notifikasi seolah-olah data sudah berhasil disimpan ke server.

---

## 5.10 FAQ

**File:** faq.html

### Proposed Questions

1. Apa itu ducting?
2. Apa fungsi ducting dalam sistem HVAC?
3. Apa saja jenis produk ducting yang tersedia?
4. Apakah perusahaan menerima pesanan custom?
5. Apakah perusahaan melayani instalasi ducting?
6. Apakah pelanggan dapat menentukan ukuran ducting?
7. Material apa yang digunakan?
8. Bagaimana cara meminta penawaran harga?
9. Apakah perusahaan melayani proyek luar kota?
10. Bagaimana proses pemesanan produk?
11. Apakah perusahaan menyediakan survei lokasi?
12. Bagaimana cara menghubungi perusahaan?

Jawaban harus berdasarkan kebijakan dan kemampuan aktual perusahaan.

---

# 6. WHATSAPP INTEGRATION

## 6.1 Objective

WhatsApp menjadi saluran utama komunikasi antara calon pelanggan dan perusahaan.

## 6.2 WhatsApp Entry Points

Integrasi WhatsApp tersedia pada:

- Header.
- Hero homepage.
- Product cards.
- Product detail.
- Service detail.
- Project detail.
- Contact page.
- Floating WhatsApp button.
- Footer.

## 6.3 WhatsApp URL

Gunakan format:

https://wa.me/628xxxxxxxxxx?text=...

Nomor harus menggunakan format internasional tanpa tanda plus, spasi, atau tanda hubung.

## 6.4 Dynamic Message

Pesan WhatsApp dapat dibuat berdasarkan:

- Nama produk.
- Nama layanan.
- Nama proyek.
- Informasi formulir.

Gunakan JavaScript `encodeURIComponent()` untuk mengamankan karakter pada pesan.

## 6.5 Configuration

Nomor WhatsApp perusahaan diletakkan dalam satu konfigurasi JavaScript agar mudah diperbarui.

Contoh:

```javascript
const SITE_CONFIG = {
  companyName: "Nama Perusahaan",
  whatsappNumber: "628xxxxxxxxxx",
  email: "email@perusahaan.com",
};
```

Gunakan placeholder sampai data perusahaan tersedia.

---

# 7. CONTENT MANAGEMENT

## 7.1 Static Content Management

Website tidak memiliki CMS.

Seluruh konten dikelola secara manual.

Contoh:

| Content            | Management Method             |
| ------------------ | ----------------------------- |
| Nama produk        | Edit HTML                     |
| Deskripsi produk   | Edit HTML                     |
| Foto produk        | Ganti file gambar             |
| Spesifikasi produk | Edit HTML                     |
| Layanan            | Edit HTML                     |
| Proyek             | Edit HTML                     |
| Kontak             | Edit HTML atau konfigurasi JS |
| FAQ                | Edit HTML                     |

## 7.2 Product Management Rules

Ketika menambah produk:

1. Siapkan foto produk.
2. Siapkan nama produk.
3. Siapkan deskripsi.
4. Siapkan spesifikasi.
5. Masukkan produk ke halaman katalog.
6. Buat atau sesuaikan halaman detail.
7. Pastikan tautan antarhalaman bekerja.
8. Pastikan tombol WhatsApp menggunakan nama produk yang benar.

## 7.3 Project Management Rules

Ketika menambah proyek:

1. Siapkan foto proyek.
2. Siapkan nama proyek.
3. Siapkan lokasi.
4. Siapkan jenis pekerjaan.
5. Siapkan deskripsi.
6. Masukkan proyek ke halaman portofolio.
7. Tambahkan detail proyek jika diperlukan.

---

# 8. DESIGN & UI REQUIREMENTS

Bagian ini merupakan persyaratan tampilan dan implementasi antarmuka, bukan dokumen DESIGN.md terpisah.

## 8.1 Design Direction

Karakter website:

- Professional.
- Industrial.
- Modern.
- Clean.
- Corporate.
- Technical.
- Trustworthy.

## 8.2 Template Requirements

Gunakan template Keystone dari BootstrapMade sebagai basis implementasi.

Pertahankan komponen yang relevan:

- Header.
- Navigation.
- Hero.
- About.
- Services.
- Product cards.
- Grid layout.
- Statistics.
- Process.
- Testimonials.
- Contact.
- Footer.

Hilangkan atau adaptasi komponen yang berhubungan dengan real estate.

Contohnya:

- Property listing.
- Broker profiles.
- Property details.
- Viewing request.
- Real estate availability.
- Property maps.

## 8.3 Visual Content

Gunakan gambar yang relevan dengan:

- Pabrik ducting.
- Proses fabrikasi.
- Sheet metal.
- Mesin produksi.
- HVAC installation.
- Ducting workshop.
- Produk ducting.
- Dokumentasi proyek.

Jangan menggunakan foto properti atau rumah sebagai gambar utama.

## 8.4 Responsive Requirements

Website harus berfungsi pada:

- Desktop.
- Laptop.
- Tablet.
- Smartphone.

Tidak boleh terdapat horizontal scrolling akibat layout yang tidak responsif.

---

# 9. TECHNICAL REQUIREMENTS

## 9.1 Technology Stack

| Technology      | Usage                   |
| --------------- | ----------------------- |
| HTML5           | Struktur halaman        |
| CSS3            | Styling                 |
| Bootstrap 5     | Layout dan komponen     |
| JavaScript      | Interaksi               |
| Bootstrap Icons | Ikon                    |
| AOS             | Animasi jika diperlukan |
| Swiper          | Slider jika diperlukan  |
| GLightbox       | Galeri jika diperlukan  |

Gunakan library yang sudah tersedia pada template jika memungkinkan.

Hindari menambahkan dependency yang tidak dibutuhkan.

## 9.2 No Backend Architecture

Website harus berjalan sebagai static website.

Dilarang menambahkan:

- PHP.
- Node.js backend.
- Express.
- Laravel.
- MySQL.
- PostgreSQL.
- Supabase.
- Firebase.
- API backend.
- Server-side database.
- Authentication system.

Tidak perlu instalasi npm jika semua kebutuhan sudah tersedia dalam template.

## 9.3 Browser Compatibility

Website harus diuji pada:

- Google Chrome.
- Microsoft Edge.
- Mozilla Firefox.
- Safari jika memungkinkan.

## 9.4 Asset Management

Semua aset harus tersimpan dalam folder lokal.

Jangan menggunakan nama file gambar yang tidak jelas.

Gunakan nama deskriptif seperti:

- rectangular-duct.jpg
- spiral-duct.jpg
- flexible-duct.jpg
- ducting-installation.jpg
- ducting-fabrication.jpg
- hvac-project.jpg

## 9.5 Performance

Persyaratan:

- Optimasi ukuran gambar.
- Gunakan format WebP jika memungkinkan.
- Gunakan lazy loading untuk gambar non-prioritas.
- Hindari JavaScript yang tidak diperlukan.
- Minimalkan CSS dan JavaScript produksi.
- Gunakan ukuran gambar yang sesuai.
- Hindari penggunaan gambar resolusi besar secara berlebihan.

---

# 10. SEO REQUIREMENTS

## 10.1 Basic SEO

Setiap halaman wajib memiliki:

- Unique title.
- Meta description.
- Canonical URL.
- Meta viewport.
- Open Graph.
- Descriptive heading.
- Image alt text.
- Internal links.

## 10.2 SEO Keyword Direction

Contoh keyword awal:

### Main Keywords

- Ducting HVAC.
- Jasa ducting.
- Produsen ducting.
- Pabrik ducting.
- Fabrikasi ducting.
- Instalasi ducting.
- Kontraktor ducting.

### Product Keywords

- Rectangular duct.
- Spiral duct.
- Flexible duct.
- Galvanized duct.
- HVAC ducting.
- Ducting fitting.

### Service Keywords

- Jasa instalasi ducting.
- Jasa fabrikasi ducting.
- Kontraktor HVAC.
- Pemasangan ducting gedung.
- Pembuatan ducting custom.

Keyword final ditentukan berdasarkan lokasi, target pasar, dan kemampuan perusahaan.

## 10.3 Structured Data

Gunakan Schema.org sesuai informasi aktual.

Rekomendasi:

- Organization.
- LocalBusiness jika memenuhi kriteria.
- Product untuk produk yang benar-benar ditawarkan.
- Service untuk layanan.
- BreadcrumbList.
- WebSite.

Jangan membuat rating, review, alamat, harga, atau klaim bisnis fiktif dalam structured data.

## 10.4 Technical SEO

Wajib tersedia:

- sitemap.xml.
- robots.txt.
- Canonical URL.
- HTTPS pada hosting.
- URL yang mudah dibaca.
- Internal linking.
- Image optimization.

---

# 11. NON-FUNCTIONAL REQUIREMENTS

## 11.1 Usability

Website harus:

- Mudah dipahami.
- Navigasi jelas.
- Informasi produk mudah ditemukan.
- Tombol CTA mudah terlihat.
- Formulir mudah digunakan.

## 11.2 Reliability

- Semua halaman dapat dibuka.
- Semua link internal berfungsi.
- Tidak ada gambar rusak.
- Tidak ada error JavaScript yang mengganggu.
- WhatsApp link dapat digunakan.

## 11.3 Maintainability

Struktur kode harus:

- Konsisten.
- Terorganisasi.
- Mudah dibaca.
- Tidak banyak duplikasi yang tidak diperlukan.
- Menggunakan penamaan file yang jelas.
- Mudah diperbarui oleh developer berikutnya.

## 11.4 Accessibility

Perhatikan:

- Kontras warna.
- Ukuran teks.
- Alt text.
- Label formulir.
- Keyboard navigation.
- Struktur heading yang benar.
- Focus state.

---

# 12. FOLDER STRUCTURE

Gunakan struktur berikut:

```text
ducting-company/
│
├── index.html
├── about.html
│
├── products.html
├── product-details.html
│
├── services.html
├── service-details.html
│
├── projects.html
├── project-details.html
│
├── faq.html
├── contact.html
├── 404.html
│
├── assets/
│   │
│   ├── css/
│   │   ├── bootstrap.min.css
│   │   └── main.css
│   │
│   ├── js/
│   │   ├── bootstrap.bundle.min.js
│   │   ├── main.js
│   │   └── quotation.js
│   │
│   ├── img/
│   │   ├── logo/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── products/
│   │   ├── services/
│   │   ├── projects/
│   │   └── icons/
│   │
│   ├── vendor/
│   │
│   └── webfonts/
│
├── sitemap.xml
├── robots.txt
├── favicon.ico
│
└── README.md
```

Struktur ini merupakan target pengorganisasian proyek. Aset Keystone yang sudah tersedia harus diperiksa terlebih dahulu dan digunakan kembali jika relevan.

---

# 13. ACCEPTANCE CRITERIA

Website dianggap memenuhi persyaratan apabila:

## Homepage

- [ ] Hero tampil dengan benar.
- [ ] Logo perusahaan tampil.
- [ ] Navigasi bekerja.
- [ ] Produk unggulan tampil.
- [ ] Layanan tampil.
- [ ] Proyek tampil.
- [ ] CTA WhatsApp berfungsi.
- [ ] Footer tampil.

## About

- [ ] Profil perusahaan tersedia.
- [ ] Informasi visi dan misi tersedia jika sudah diberikan.
- [ ] Dokumentasi perusahaan tampil.
- [ ] CTA berfungsi.

## Products

- [ ] Katalog produk dapat dibuka.
- [ ] Kategori produk ditampilkan dengan benar.
- [ ] Foto produk tampil.
- [ ] Filter kategori berfungsi jika diterapkan.
- [ ] Detail produk dapat dibuka.
- [ ] Tombol tanya produk berfungsi.

## Services

- [ ] Semua layanan yang tersedia ditampilkan.
- [ ] Detail layanan dapat dibuka.
- [ ] CTA konsultasi berfungsi.

## Projects

- [ ] Dokumentasi proyek tampil.
- [ ] Informasi proyek tersedia.
- [ ] Detail proyek dapat dibuka jika disediakan.
- [ ] Filter proyek berfungsi jika diterapkan.

## Contact

- [ ] Informasi kontak benar.
- [ ] Formulir memiliki validasi dasar.
- [ ] Pesan WhatsApp tersusun dengan benar.
- [ ] Nomor WhatsApp valid.
- [ ] Tidak ada klaim penyimpanan data ke server.

## Technical

- [ ] Website menggunakan Bootstrap 5.
- [ ] Website berjalan tanpa database.
- [ ] Tidak membutuhkan backend.
- [ ] Tidak membutuhkan instalasi npm.
- [ ] Tidak ada broken links.
- [ ] Tidak ada broken images.
- [ ] Tidak ada error JavaScript kritis.
- [ ] Tampilan responsif.
- [ ] SEO dasar diterapkan.

---

# 14. DEVELOPMENT PHASES

## Phase 1 – Project Preparation

- Ekstrak template Keystone.
- Periksa seluruh struktur template.
- Identifikasi aset dan library.
- Identifikasi komponen yang dapat digunakan.
- Buat struktur folder final.

Deliverable: struktur proyek siap dikembangkan.

## Phase 2 – Core Layout

- Implementasi header.
- Implementasi navigasi.
- Implementasi footer.
- Implementasi responsive layout.
- Implementasi tombol WhatsApp.

Deliverable: kerangka utama website.

## Phase 3 – Homepage

- Hero.
- Company introduction.
- Product categories.
- Featured products.
- Services.
- Advantages.
- Portfolio.
- Work process.
- FAQ preview.
- CTA.

Deliverable: homepage lengkap.

## Phase 4 – Product Catalog

- Product listing.
- Product category.
- Product detail.
- Product inquiry.
- Product filtering jika diperlukan.

Deliverable: katalog produk.

## Phase 5 – Services & Portfolio

- Service listing.
- Service detail.
- Project listing.
- Project detail.

Deliverable: halaman layanan dan proyek.

## Phase 6 – Company Information

- About.
- Contact.
- FAQ.
- 404.

Deliverable: seluruh halaman informasi.

## Phase 7 – Functional Integration

- WhatsApp integration.
- Form validation.
- Dynamic message generation.
- Internal navigation.
- JavaScript interactions.

Deliverable: fitur interaktif berjalan.

## Phase 8 – SEO & Optimization

- Meta tags.
- Open Graph.
- Structured data.
- Sitemap.
- Robots.
- Image optimization.
- Performance optimization.

Deliverable: website siap dipublikasikan.

## Phase 9 – Quality Assurance

- Responsive testing.
- Link testing.
- Form testing.
- WhatsApp testing.
- Browser testing.
- SEO checks.
- Final review.

Deliverable: website siap deployment.

---

# 15. CONTENT REQUIREMENTS FROM COMPANY

Sebelum website dipublikasikan, perusahaan perlu menyediakan informasi berikut.

## Company Information

- [ ] Nama perusahaan.
- [ ] Logo.
- [ ] Alamat.
- [ ] Nomor WhatsApp.
- [ ] Email.
- [ ] Tahun berdiri.
- [ ] Profil perusahaan.
- [ ] Visi dan misi.
- [ ] Area layanan.

## Product Information

- [ ] Daftar produk aktual.
- [ ] Kategori produk.
- [ ] Foto produk.
- [ ] Material.
- [ ] Spesifikasi teknis.
- [ ] Dimensi.
- [ ] Ketebalan material jika relevan.
- [ ] Pilihan custom jika tersedia.

## Service Information

- [ ] Daftar layanan aktual.
- [ ] Deskripsi layanan.
- [ ] Ruang lingkup pekerjaan.
- [ ] Proses pengerjaan.
- [ ] Area instalasi.
- [ ] Dokumentasi pekerjaan.

## Project Information

- [ ] Nama proyek.
- [ ] Foto proyek.
- [ ] Lokasi.
- [ ] Tahun pengerjaan.
- [ ] Jenis pekerjaan.
- [ ] Deskripsi proyek.

## Supporting Information

- [ ] Foto workshop.
- [ ] Foto mesin.
- [ ] Foto tim.
- [ ] Foto proses produksi.
- [ ] Sertifikasi jika tersedia.
- [ ] Legalitas perusahaan jika ingin ditampilkan.

Jika informasi belum tersedia, gunakan placeholder yang jelas untuk kebutuhan development. Jangan membuat data perusahaan fiktif.

---

# 16. FINAL IMPLEMENTATION RULES FOR ANTIGRAVITY

Instruksi wajib:

1. Gunakan template Keystone yang disediakan sebagai fondasi proyek.
2. Jangan mengganti template dengan desain atau framework lain tanpa persetujuan.
3. Pertahankan struktur Bootstrap 5.
4. Adaptasikan komponen real estate menjadi komponen industri ducting.
5. Gunakan HTML, CSS, dan JavaScript biasa.
6. Jangan membuat backend.
7. Jangan membuat database.
8. Jangan menggunakan PHP.
9. Jangan membuat admin dashboard.
10. Jangan membuat sistem login.
11. Jangan membuat fitur checkout.
12. Gunakan WhatsApp sebagai saluran komunikasi dan permintaan penawaran.
13. Semua konten harus mudah diedit secara manual.
14. Gunakan aset gambar yang relevan dengan industri ducting.
15. Pastikan seluruh halaman responsif.
16. Hindari dependency yang tidak diperlukan.
17. Jangan menghapus aset template sebelum memastikan aset tersebut tidak digunakan.
18. Jangan mengubah identitas perusahaan berdasarkan asumsi.
19. Jangan mengisi spesifikasi produk yang belum dikonfirmasi.
20. Lakukan pengujian setiap halaman sebelum menyatakan proyek selesai.

## Definition of Done

Proyek dinyatakan selesai apabila seluruh halaman utama telah dibuat, konten perusahaan dapat diperbarui melalui HTML, katalog produk berfungsi, halaman layanan dan proyek dapat diakses, integrasi WhatsApp bekerja, tampilan responsif, SEO dasar tersedia, dan seluruh website berjalan sebagai static website tanpa database maupun backend.

---

# 17. FINAL PROJECT SUMMARY

Ducting Company Website merupakan website perusahaan yang menggabungkan profil perusahaan, katalog produk manufaktur ducting, informasi layanan instalasi, dan portofolio proyek.

Website menggunakan Bootstrap 5 dengan template Keystone dari BootstrapMade sebagai fondasi desain dan struktur antarmuka.

Sistem dikembangkan menggunakan HTML, CSS, dan JavaScript tanpa database maupun backend.

Fokus utama pengembangan adalah:

- Company Branding.
- Product Presentation.
- Service Presentation.
- Project Portfolio.
- Customer Inquiry.
- WhatsApp Conversion.
- Responsive Experience.
- Search Engine Optimization.

**Final Architecture:**

Static Corporate Website + Product Catalog + Service Information + Project Portfolio + WhatsApp Integration.

**Tidak menggunakan CMS, database, backend, login, maupun dashboard admin.**
