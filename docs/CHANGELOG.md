# Changelog

## Sprint 1

### Added

- Initialize Git
- React + Vite
- TailwindCSS
- Sidebar
- Header
- Welcome Screen
- Chat Area
- Chat Input
- Conversation
- User Message
- Assistant Message
- Fake AI
- Typing Indicator
- Auto Scroll

### Changed

- Folder Structure
- Component Structure
- Chat Layout
- ChatInput dipindahkan ke ChatArea

### Fixed

- Duplicate ChatInput
- Layout Scroll
- isTyping Props
- Chat Input Position
- Conversation Auto Scroll

## [Sprint 2] - 2026-07-16

### Added

- Menginisialisasi project backend terpisah menggunakan Node.js dan Express.js.
- Menambahkan middleware `cors` dan `express.json` pada entry point server.
- Membuat endpoint pemeriksaan kesehatan server (`GET /api/health`).
- Membuat struktur backend modular dengan folder `routes/` dan `controllers/`.
- Membuat endpoint chat utama (`POST /api/chat`) di sisi backend.
- Menginstal library resmi SDK `@ollama/ollama` pada environment backend.

### Changed

- Mengubah fungsi `handleSendMessage` di `ChatArea.jsx` frontend menjadi `async/await` fetch request mengarah ke port backend 5000.

### Removed

- Menghapus fungsi simulasi `getFakeReply` lokal yang berada di komponen React Frontend.
