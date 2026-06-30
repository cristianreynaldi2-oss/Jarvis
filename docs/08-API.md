# API

## Overview

Dokumentasi antarmuka pemrograman aplikasi (API) berbasis REST yang digunakan untuk menjembatani komunikasi data antara Frontend React dengan Backend Express.js[cite: 3, 8].

## Goals

- Menyediakan jalur komunikasi yang bersih untuk mengontrol manajemen sesi obrolan[cite: 3].
- Mengirimkan pesan instruksi dari user menuju AI Engine dan mengembalikan respons teks atau tool-call ke antarmuka[cite: 3, 7].

## Specifications

Rancangan Endpoint Awal (Fase v0.2):

- `GET /api/sessions` - Mengambil semua daftar riwayat sesi obrolan untuk sidebar[cite: 3].
- `POST /api/sessions` - Membuat token identitas sesi obrolan baru[cite: 3].
- `DELETE /api/sessions/:id` - Menghapus sesi obrolan tertentu beserta riwayat di dalamnya[cite: 3].
- `GET /api/sessions/:id/messages` - Mengambil seluruh pesan lama dalam satu sesi[cite: 3].
- `POST /api/messages` - Mengirim pesan baru dari user, memicu proses berpikir AI, dan mengambil respons akhir[cite: 3, 7].

## Notes

Struktur detail skema payload request dan response berformat JSON akan diperbarui secara berkala langsung di dokumen ini seiring dengan implementasi kode backend[cite: 3].
