<?php

namespace App\Http\Controllers;

use App\Models\Mahasiswa;
use App\Models\Prodi;
use Illuminate\Http\Request;
use Carbon\Carbon;

class DashboardController extends Controller
{
    public function index()
    {
        $totalMahasiswa = Mahasiswa::count();
        $totalProdi = Prodi::count();

        $now = Carbon::now();
        $currYearStart = $now->copy()->startOfYear();
        $currYearEnd = $now->copy()->endOfYear();

        $prevYearStart = $now->copy()->subYear()->startOfYear();
        $prevYearEnd = $now->copy()->subYear()->endOfYear();

        $calculatePercentage = function ($current, $previous) {
            if ($previous > 0) {
                return (($current - $previous) / $previous) * 100;
            }
            return $current > 0 ? 100 : 0;
        };

        // Total Mahasiswa (Tahunan)
        $mhsTahunIni = Mahasiswa::whereBetween('created_at', [$currYearStart, $currYearEnd])->count();
        $mhsTahunLalu = Mahasiswa::whereBetween('created_at', [$prevYearStart, $prevYearEnd])->count();
        $persenMhs = $calculatePercentage($mhsTahunIni, $mhsTahunLalu);

        // Statistik Per Prodi (Tahunan)
        $listProdi = Prodi::withCount('mahasiswas')->get();
        $prodiStats = [];

        foreach ($listProdi as $prodi) {
            $prodiTahunIni = Mahasiswa::where('prodi_id', $prodi->id)
                ->whereBetween('created_at', [$currYearStart, $currYearEnd])
                ->count();

            $prodiTahunLalu = Mahasiswa::where('prodi_id', $prodi->id)
                ->whereBetween('created_at', [$prevYearStart, $prevYearEnd])
                ->count();

            $persenProdi = $calculatePercentage($prodiTahunIni, $prodiTahunLalu);

            $prodiStats[] = [
                'nama' => $prodi->nama_prodi,
                'kode' => $prodi->kode_prodi,
                'total' => $prodi->mahasiswas_count,
                'persen' => $persenProdi
            ];
        }

        // Data untuk Chart Jenis Kelamin
        $totalLakiLaki = Mahasiswa::where('jenis_kelamin', 'Laki-laki')->count();
        $totalPerempuan = Mahasiswa::where('jenis_kelamin', 'Perempuan')->count();

        $mahasiswaTerbaru = Mahasiswa::with('prodi')->latest()->take(5)->get();
        $mahasiswaPerProdi = $listProdi->sortByDesc('mahasiswas_count');

        return view('dashboard', compact(
            'totalMahasiswa',
            'totalProdi',
            'persenMhs',
            'prodiStats',
            'totalLakiLaki',
            'totalPerempuan',
            'mahasiswaTerbaru',
            'mahasiswaPerProdi'
        ));
    }
}