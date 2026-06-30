# AI Engine

## Overview

Lapisan kecerdasan buatan Project Jarvis yang mengandalkan pemrosesan lokal dan menerapkan pemisahan logika antara aplikasi utama dengan model AI yang digunakan[cite: 5, 10].

## Goals

- Mengintegrasikan **Ollama** sebagai runtime utama untuk menjalankan model AI lokal (seperti Qwen)[cite: 5, 9].
- Menerapkan konsep **Brain Abstraction**, di mana Jarvis tidak peduli model AI apa yang digunakan; Jarvis hanya bertukar data teks lewat interface yang seragam[cite: 5].

## Specifications

Manajemen memori dibagi menjadi dua:

1. **Session Memory (v0.1):** Memori yang hanya berlaku untuk satu chat aktif[cite: 5, 9]. Saat membuat chat baru, memori dimulai dari kosong agar context window tetap ringan, hemat RAM/VRAM, dan AI tetap fokus[cite: 5].
2. **Global Memory (Masa Depan):** Memori lintas sesi untuk mengingat informasi permanen seperti nama user, preferensi, dan bahasa favorit[cite: 5].

## Notes

Pemilihan model utama seperti Qwen dapat disesuaikan sewaktu-waktu via Ollama tanpa perlu melakukan perombakan pada baris kode program backend maupun frontend[cite: 5, 9].
