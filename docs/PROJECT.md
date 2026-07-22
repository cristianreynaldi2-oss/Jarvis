# Jarvis

## Project Overview

Jarvis adalah proyek pribadi jangka panjang untuk mengembangkan sebuah AI Desktop Assistant berbasis AI lokal.

Nama "Jarvis" digunakan sebagai konsep dan referensi pengembangan, bukan sebagai identitas AI.

AI Assistant yang dikembangkan dalam proyek ini memiliki identitas bernama **Nat**.

Target utama proyek:

- AI Chat
- Voice Assistant
- Vision
- File Analysis
- Memory
- Desktop Automation
- Offline AI

---

# Current Status

Current Sprint: 🏁 Sprint 3 Paused
Current Phase: AI Foundation

Project Status:

Frontend UI ██████████ 100%
Backend API ██████████ 100%
AI Integration ████████░░ 80%
Database ░░░░░░░░░░ 0%
Desktop ░░░░░░░░░░ 0%

Development Status:

> Development paused due to local device limitations.

---

# Completed Foundation

### Frontend

- Frontend dibangun menggunakan React + Vite.
- Styling menggunakan TailwindCSS.
- UI Chat telah selesai.
- Chat dapat menerima input pengguna dan menampilkan respons AI.

### Backend

- Backend terpisah menggunakan Node.js + Express.
- Backend menyediakan endpoint `GET /api/health`.
- Backend menyediakan endpoint `POST /api/chat`.
- Frontend telah terhubung ke backend menggunakan Fetch API.

### AI Integration

- Ollama digunakan sebagai local AI engine.
- Model yang digunakan selama pengembangan adalah `llama3.2:3b`.
- Backend telah berhasil berkomunikasi dengan Ollama.
- Respons dari model AI berhasil dikirim kembali ke frontend.
- Fake AI pada frontend telah dihapus.
- System Prompt telah ditambahkan untuk membentuk identitas dan perilaku AI.

### AI Identity

AI Assistant memiliki identitas:

**Nama:** Nat

Nat adalah AI Assistant lokal yang dikembangkan dalam proyek dengan nama dan konsep Jarvis.

Jarvis bukan identitas Nat.

Nat dapat dipanggil oleh pengguna dengan berbagai panggilan seperti:

- Nat
- Bro
- Bos
- Bang
- Mas
- Kak
- Sis
- AI

Namun identitas AI tetap Nat.

---

# Current Architecture

Frontend (React)
↕
HTTP Request
↕
Express API
↕
Ollama
↕
Local LLM

---

# Tech Stack

Frontend:

- React
- Vite
- TailwindCSS

Backend:

- Node.js
- Express.js

AI:

- Ollama
- `llama3.2:3b`

Database:

- SQLite (Planned)

Desktop:

- Electron (Planned)

---

# Folder Structure

Jarvis/
├── client/
│ └── # Frontend Web Application (React + Vite)
│
└── server/
├── src/
│ ├── config/
│ ├── controllers/
│ ├── routes/
│ └── app.js
└── package.json

---

# Important Decisions

### D-001

Frontend menggunakan React + Vite.

Status:
Accepted

---

### D-002

Styling menggunakan TailwindCSS.

Status:
Accepted

---

### D-003

Backend menggunakan Express.

Status:
Accepted

---

### D-004

AI menggunakan Ollama.

Status:
Accepted

---

### D-005

Database menggunakan SQLite.

Status:
Accepted

---

### D-006

Selesaikan UI terlebih dahulu menggunakan Fake AI sebelum backend.

Status:
Accepted

---

### D-007

ChatInput menjadi bagian dari ChatArea, bukan Home.

Status:
Accepted

---

### D-008

Pemisahan arsitektur menjadi Decoupled Client-Server (Multi-package Monorepo) untuk memisahkan runtime environment browser dan server Node.js.

Status:
Accepted

---

### D-009

Pemindahan simulasi AI Engine dari Frontend lokal ke Backend Controller sebelum migrasi penuh ke LLM Lokal.

Status:
Accepted

---

### D-010

AI Assistant memiliki identitas bernama Nat. Nama Jarvis digunakan sebagai nama dan konsep proyek, bukan sebagai identitas AI.

Status:
Accepted

---

### D-011

System Prompt digunakan untuk mengatur identitas, perilaku, gaya komunikasi, dan kemampuan mengikuti instruksi dari AI Assistant.

Status:
Accepted

---

# Known Limitations

### Hardware Limitation

Pengembangan AI lokal mengalami keterbatasan pada perangkat yang digunakan.

Model `llama3.2:3b` membutuhkan resource yang cukup besar saat dijalankan secara lokal. Pada perangkat dengan RAM 8 GB, proses pemuatan model dapat mengalami kegagalan alokasi memori dan menyebabkan koneksi backend dengan Ollama terputus.

Akibat keterbatasan tersebut, pengembangan lokal proyek untuk sementara dihentikan.

---

### Current Development Pause

Proyek berada dalam kondisi:

**Development Paused**

Pause dilakukan karena keterbatasan perangkat lokal, bukan karena kegagalan arsitektur atau integrasi utama.

### Local Environment

Environment Ollama dan model AI lokal telah dihapus dari perangkat pengembangan sebagai bagian dari proses pembersihan environment.

Source code dan konfigurasi dependency Ollama tetap dipertahankan di repository sebagai bagian dari checkpoint terakhir proyek.

Untuk melanjutkan pengembangan, environment Ollama dan dependency yang diperlukan perlu di-install kembali.

Checkpoint terakhir proyek mencakup:

- Frontend selesai.
- Backend API selesai.
- Frontend berhasil berkomunikasi dengan backend.
- Backend berhasil terintegrasi dengan Ollama.
- Local LLM berhasil memberikan respons ke frontend.
- Identitas dan perilaku dasar Nat telah dibentuk melalui System Prompt.

Pengembangan dapat dilanjutkan kembali dari checkpoint ini ketika perangkat yang digunakan sudah lebih memadai.

---

# Planned Features

Fitur berikut belum diimplementasikan:

- Database / Memory
- Voice Assistant
- Vision
- File Analysis
- Desktop Automation
- Electron Desktop Application
- Advanced AI Contexts
