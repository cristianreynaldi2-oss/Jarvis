# Changelog

## [Sprint 1] - Frontend Foundation

### Added

- Menginisialisasi project frontend menggunakan React + Vite.
- Menggunakan TailwindCSS sebagai framework styling.
- Membuat struktur dasar antarmuka AI Chat.
- Membuat komponen utama Chat Area.
- Membuat Chat Input sebagai bagian dari Chat Area.
- Membuat tampilan pesan pengguna dan assistant.
- Menambahkan typing indicator sebagai indikator ketika AI sedang memproses respons.
- Menyelesaikan fondasi UI frontend untuk aplikasi AI Assistant.

### Changed

- Menetapkan ChatInput sebagai bagian dari ChatArea, bukan Home.
- Menyelesaikan pengembangan UI frontend sebelum integrasi backend dan AI lokal.

### Removed

- Tidak ada.

---

## [Sprint 2] - Backend & Local AI Integration

### Added

- Menginisialisasi project backend terpisah menggunakan Node.js dan Express.js.
- Menambahkan middleware `cors` dan `express.json` pada entry point server.
- Membuat endpoint pemeriksaan kesehatan server (`GET /api/health`).
- Membuat struktur backend modular dengan folder `routes/`, `controllers/`, dan `config/`.
- Membuat endpoint chat utama (`POST /api/chat`).
- Menghubungkan frontend dengan backend menggunakan Fetch API.
- Mengintegrasikan Ollama sebagai local AI engine.
- Menggunakan model `llama3.2:3b` untuk pengembangan AI lokal.
- Menambahkan System Prompt untuk mengatur identitas dan perilaku AI Assistant.
- Menetapkan identitas AI Assistant sebagai **Nat**.
- Menetapkan bahwa Jarvis merupakan nama dan konsep proyek, bukan identitas AI.
- Menambahkan aturan dasar mengenai identitas, gaya komunikasi, dan interaksi Nat.
- Menguji kemampuan Nat dalam mengikuti instruksi format jawaban dan bahasa pengguna.

### Changed

- Mengubah fungsi `handleSendMessage` pada frontend dari penggunaan Fake AI menjadi request asynchronous menggunakan Fetch API menuju backend.
- Memindahkan proses AI dari frontend ke backend sebelum integrasi penuh dengan local LLM.
- Mengubah identitas AI Assistant dari konsep awal "Jarvis" menjadi **Nat**.
- Menyesuaikan System Prompt agar Nat tidak mengaku sebagai ChatGPT, Llama, Jarvis dari Marvel, atau karakter fiksi lainnya.
- Menyesuaikan System Prompt agar pengguna dapat memanggil AI dengan berbagai panggilan, sementara identitas AI tetap Nat.
- Menambahkan aturan prioritas instruksi agar AI lebih konsisten mengikuti format jawaban yang diminta pengguna.
- Menambahkan aturan konteks percakapan agar penyebutan nama "Nat" dipahami sebagai panggilan kepada AI.

### Removed

- Menghapus fungsi simulasi `getFakeReply` lokal yang berada di komponen React Frontend.
- Menghapus ketergantungan terhadap Fake AI sebagai sumber respons chat.

---

## [Sprint 3] - AI Foundation

### Added

- Mengembangkan identitas dan karakter dasar AI Assistant melalui System Prompt.
- Menetapkan Nat sebagai identitas utama AI Assistant.
- Menetapkan Jarvis sebagai nama dan konsep proyek pengembangan AI.
- Menambahkan aturan agar Nat dapat mengikuti instruksi pengguna mengenai format dan bahasa respons.
- Melakukan pengujian terhadap kemampuan Nat dalam:
  - Menjawab dengan jumlah kata tertentu.
  - Menjawab dalam jumlah poin tertentu.
  - Menjawab dalam satu kalimat.
  - Mengikuti bahasa pengguna.
  - Menghasilkan format JSON.
  - Menjelaskan identitas dan dirinya sendiri.
- Melakukan pengujian interaksi menggunakan berbagai panggilan seperti "Nat", "Bos", dan "Bro".

### Changed

- Memperbaiki System Prompt agar identitas Nat lebih konsisten.
- Memperjelas hubungan antara identitas Nat dan proyek Jarvis.
- Mengarahkan Nat agar tetap mempertahankan identitas Nat meskipun pengguna menggunakan panggilan lain.

### Known Issues

- Respons AI lokal memiliki waktu respons yang relatif lama pada perangkat dengan RAM 8 GB.
- Proses pemuatan model `llama3.2:3b` dapat mengalami kegagalan alokasi memori.
- Backend dapat kehilangan koneksi dengan Ollama ketika model gagal dimuat akibat keterbatasan memori.
- Fitur New Session pada frontend belum berfungsi.
- Pengiriman beberapa pesan secara bersamaan ketika AI masih memproses respons belum memiliki penanganan UI yang optimal.
- Loading indicator belum menangani beberapa request AI secara independen.
- Respons dari beberapa request yang berjalan bersamaan dapat muncul dengan urutan yang tidak konsisten pada UI.
- Pengembangan lanjutan AI Foundation belum sepenuhnya diselesaikan.

---

## [Development Paused] - Hardware Limitation

### Status

Pengembangan proyek dihentikan sementara karena keterbatasan perangkat lokal.

### Reason

Perangkat yang digunakan memiliki RAM 8 GB sehingga menjalankan local LLM secara konsisten membutuhkan resource yang cukup besar dan dapat menyebabkan kegagalan pemuatan model.

### Last Known Stable State

- Frontend UI telah selesai.
- Backend API telah selesai.
- Frontend berhasil terhubung ke backend.
- Backend berhasil terhubung dengan Ollama.
- Model `llama3.2:3b` telah digunakan untuk menjalankan AI lokal.
- Nat berhasil memberikan respons AI dan menampilkannya kembali pada frontend.
- Identitas dan perilaku dasar Nat telah dibentuk melalui System Prompt.
- Fake AI telah sepenuhnya dihapus dari frontend.

### Next Development

Pengembangan dapat dilanjutkan kembali dari checkpoint terakhir apabila perangkat yang digunakan sudah memiliki resource yang lebih memadai.

Fitur yang masih direncanakan:

- Database / Memory
- Voice Assistant
- Vision
- File Analysis
- Desktop Automation
- Electron Desktop Application
- Advanced AI Context
