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

Current Sprint

✅ Sprint 1 Completed

Current Phase

Frontend Foundation

Project Status

Frontend UI ██████████ 100%
Backend API ░░░░░░░░░░ 0%
AI Integration ░░░░░░░░░░ 0%
Database ░░░░░░░░░░ 0%
Desktop ░░░░░░░░░░ 0%

---

# Tech Stack

Frontend

- React
- Vite
- TailwindCSS

Backend

- Express.js (Planned)

Database

- SQLite (Planned)

AI

- Ollama (Planned)

Desktop

- Electron (Planned)

---

# Current Architecture

Frontend (React)

↓

Chat Components

↓

Fake AI

↓

Next

↓

Express API

↓

Ollama

↓

LLM

---

# Folder Structure

Current Frontend

src/

- assets/
- components/
  - chat/
  - common/
  - conversation/
  - layout/
  - sidebar/
- constants/
- pages/
- styles/

---

# Sprint History

## Sprint 1

### Theme

Frontend Foundation

### Objective

Membangun pondasi frontend Jarvis sebelum backend dan AI.

### Completed

- Initialize Git
- React + Vite
- TailwindCSS
- Folder Structure
- Sidebar
- Header
- Welcome Screen
- Chat Area
- Chat Input
- Conversation
- User Bubble
- Assistant Bubble
- Fake AI
- Typing Indicator
- Auto Scroll

### Bugs Fixed

- Duplicate ChatInput
- Layout Scroll
- isTyping Props
- Chat Input keluar dari viewport
- Auto Scroll Conversation

### Lessons Learned

- React Component
- Props
- State
- useState
- useEffect
- useRef
- Conditional Rendering
- Component Architecture
- Tailwind Layout
- Flexbox
- Git Conventional Commit
- Debugging Workflow

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

# Development Rules

- Gunakan Conventional Commit
- Dokumentasi diperbarui setiap Sprint selesai
- Debug sebelum menambah fitur
- Fokus menyelesaikan satu milestone sebelum lanjut

---

# Next Sprint

## Sprint 2

Theme

Backend Foundation

Objective

Membangun backend pertama Jarvis.

Target

- Setup Express
- Struktur Backend
- REST API
- React ↔ Express
- Menghapus Fake AI
- Menghubungkan AI melalui API
