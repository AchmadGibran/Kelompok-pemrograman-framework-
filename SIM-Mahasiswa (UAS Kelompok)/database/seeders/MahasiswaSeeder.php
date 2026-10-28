<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Mahasiswa;
use App\Models\Prodi;
use Carbon\Carbon;

class MahasiswaSeeder extends Seeder
{
    public function run(): void
    {
        $prodiList = Prodi::all();
        if ($prodiList->isEmpty()) {
            return;
        }

        $daftarNama = [
            'Achmad Gibran', 'Siti Rahma', 'Budi Santoso', 'Dewi Lestari', 
            'Ahmad Fauzi', 'Putri Indah', 'Rizky Pratama', 'Nurul Hidayah', 
            'Eko Prasetyo', 'Sri Wahyuni', 'Muhammad Rizki', 'Annisa Fitri', 
            'Dimas Anggara', 'Rina Marlina', 'Fajar Sidik', 'Lestari Puspita', 
            'Bayu Segara', 'Fitri Handayani', 'Hendra Gunawan', 'Mega Mustika', 
            'Yoga Pratama', 'Siti Aminah', 'Reza Pahlevi', 'Intan Permata', 
            'Rian Hidayat', 'Wulan Dari', 'Doni Setiawan', 'Sari Mulyani', 
            'Joko Widodo', 'Ratna Sari', 'Gilang Ramadhan', 'Indah Permatasari',
            'Fauzan Al-Ghifari', 'Nadia Safitri', 'Dedi Kurniawan', 'Rika Amelia',
            'Aldi Taher', 'Sinta Bella', 'Vina Panduwinata', 'Andi Mallarangeng'
        ];

        $counter = 0;

        foreach ($prodiList as $index => $prodi) {
            // Skenario Perbandingan Tahunan per Prodi:
            if ($index === 0) {
                // Prodi 1: Tahun lalu 5 orang, Tahun ini 15 orang -> NAIK (+200.0%)
                $jmlTahunLalu = 5;
                $jmlTahunIni = 15;
            } elseif ($index === 1) {
                // Prodi 2: Tahun lalu 15 orang, Tahun ini 8 orang -> TURUN (-46.7%)
                $jmlTahunLalu = 15;
                $jmlTahunIni = 8;
            } else {
                // Prodi 3: Tahun lalu 10 orang, Tahun ini 14 orang -> NAIK (+40.0%)
                $jmlTahunLalu = 10;
                $jmlTahunIni = 14;
            }

            // 1. Buat data untuk TAHUN LALU (subYear)
            for ($i = 0; $i < $jmlTahunLalu; $i++) {
                $counter++;
                $createdAt = Carbon::now()->subYear()->startOfYear()->addDays(rand(0, 350));
                
                Mahasiswa::create([
                    'nim' => '2025' . str_pad($counter, 3, '0', STR_PAD_LEFT),
                    'nama' => $daftarNama[array_rand($daftarNama)],
                    'prodi_id' => $prodi->id,
                    'jenis_kelamin' => ($counter % 2 == 0) ? 'Laki-laki' : 'Perempuan',
                    'created_at' => $createdAt,
                    'updated_at' => $createdAt,
                ]);
            }

            // 2. Buat data untuk TAHUN INI
            for ($i = 0; $i < $jmlTahunIni; $i++) {
                $counter++;
                $createdAt = Carbon::now()->startOfYear()->addDays(rand(0, 150));
                
                Mahasiswa::create([
                    'nim' => '2026' . str_pad($counter, 3, '0', STR_PAD_LEFT),
                    'nama' => $daftarNama[array_rand($daftarNama)],
                    'prodi_id' => $prodi->id,
                    'jenis_kelamin' => ($counter % 2 == 0) ? 'Laki-laki' : 'Perempuan',
                    'created_at' => $createdAt,
                    'updated_at' => $createdAt,
                ]);
            }
        }
    }
}