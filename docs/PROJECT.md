# Jarvis

## Project Overview

Jarvis adalah AI Desktop Assistant berbasis AI lokal yang dikembangkan sebagai proyek pribadi jangka panjang.

Target utama:

- AI Chat
- Voice Assistant
- Vision
- File Analysis
- Memory
- Desktop Automation
- Offline AI

---

# Current Status

Current Sprint: 🏆 Sprint 2 Completed (Foundation Phase)
Current Phase: Backend API Foundation

Project Status
Frontend UI ██████████ 100%
Backend API ██████████ 100% (Foundation Ready)
AI Integration ░░░░░░░░░░ 10% (SDK Prepared, Setup Ollama Engine)
Database ░░░░░░░░░░ 0%
Desktop ░░░░░░░░░░ 0%

---

# Tech Stack

Frontend: React, Vite, TailwindCSS
Backend: Express.js, Node.js
AI: Ollama (In Progress)
Database: SQLite (Planned)
Desktop: Electron (Planned)

---

# Current Architecture

Frontend (React) ↔ HTTP POST ↔ Express API ↔ Ollama SDK (Local)

---

# Folder Structure

Jarvis/
├── client/ # Frontend Web Application (React + Vite)
└── server/ # Backend API Service (Express.js)
├── src/
│ ├── controllers/
│ ├── routes/
│ └── app.js
└── package.json

---

# Important Decisions

... (Keputusan D-001 sampai D-007 tetap dipertahankan) ...

### D-008

Pemisahan arsitektur menjadi Decoupled Client-Server (Multi-package Monorepo) untuk memisahkan runtime environment browser dan server Node.js.
Status: Accepted

### D-009

Pemindahan simulasi AI Engine dari Frontend lokal ke Backend Controller sebelum migrasi penuh ke LLM Lokal.
Status: Accepted
