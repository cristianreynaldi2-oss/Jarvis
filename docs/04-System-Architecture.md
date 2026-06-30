# System Architecture

## Overview

Sistem arsitektur Project Jarvis dirancang dengan pendekatan modular tinggi agar setiap komponen (Frontend, Backend, DB, AI Engine) terisolasi dan mudah di-upgrade secara independen[cite: 7].

## Goals

Menjalankan alur kerja AI yang analitis (_AI Workflow_)[cite: 7]. Ketika user memberikan input, AI tidak langsung menjawab, melainkan berpikir apakah memerlukan tools[cite: 7]. Jika butuh (misal: "Buat folder React"), backend Node.js akan mengeksekusi tool tersebut terlebih dahulu sebelum AI memberikan jawaban akhir[cite: 7].

## Specifications

Struktur Besar Komponen:

- **Frontend:** React + Tailwind[cite: 7].
- **Backend:** Node + Express[cite: 7].
- **AI Engine:** Lapisan abstraksi _Brain_ penyambung ke model AI lokal[cite: 5, 7].
- **Data & Storage:** SQLite + Prisma ORM dan Storage Lokal[cite: 7, 8].
- **Tools:** Modul File, Folder, dan Terminal[cite: 7, 9].

## Notes

Model AI dianggap murni sebagai "otak" di dalam sistem[cite: 5]. Dengan arsitektur ini, jika suatu hari ada model AI yang lebih bagus, kita cukup meng-upgrade modelnya saja tanpa perlu mengubah sisi frontend maupun backend[cite: 5].
