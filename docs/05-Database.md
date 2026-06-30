# Database

## Overview

Sistem penyimpanan data Project Jarvis menggunakan pendekatan minimalis berbasis file lokal yang ringan namun tetap terstruktur dengan baik[cite: 8].

## Goals

- Menyimpan seluruh data sesi obrolan, riwayat pesan, dan metadata aktivitas secara lokal[cite: 6].
- Mempermudah interaksi query database tanpa perlu menulis sintaks SQL manual yang rumit[cite: 8].
- Menyediakan jalur migrasi yang mudah (misal ke PostgreSQL) jika suatu hari nanti aplikasi dikembangkan menjadi multi-user[cite: 8].

## Specifications

- **Database Engine:** SQLite (ringan, tanpa server, berupa satu file berkas `.db`)[cite: 8].
- **Abstraksi Data:** Prisma ORM[cite: 8].
- **Contoh Query Abstraksi:**
  Dibanding menggunakan `SELECT * FROM chats`, query dipersingkat menggunakan fungsi objek JavaScript: `prisma.chat.findMany()`[cite: 8].

## Notes

Skema awal database akan difokuskan pada dua entitas utama terlebih dahulu: tabel `Session` (untuk memisahkan konteks obrolan) dan tabel `Message` (untuk menyimpan teks riwayat chat)[cite: 5, 6].
