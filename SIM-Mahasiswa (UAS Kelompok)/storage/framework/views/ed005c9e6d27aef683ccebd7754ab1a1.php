<?php $__env->startSection('title', 'Dashboard'); ?>
<?php $__env->startSection('page-title', 'Dashboard'); ?>

<?php $__env->startSection('content'); ?>


<div class="d-flex justify-content-between align-items-center mb-4">
    <div>
        <h2 class="fw-bold mb-1">Dashboard</h2>
        <p class="text-muted mb-0">
            Selamat datang kembali, <?php echo e(auth()->user()->name ?? 'Administrator'); ?>

        </p>
    </div>
    <div>
        <a href="<?php echo e(route('mahasiswa.create')); ?>" class="btn btn-primary shadow-sm">
            <i class="bi bi-plus-circle me-1"></i> Tambah Mahasiswa
        </a>
    </div>
</div>


<div class="row g-4 mb-4">
    
    
    <div class="col-xl-3 col-md-6">
        <div class="card shadow-sm border-0 bg-body-tertiary h-100">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <span class="text-muted fw-semibold small text-uppercase">Total Mahasiswa</span>
                    <div class="icon-shape bg-primary bg-opacity-10 text-primary rounded-3 p-2">
                        <i class="bi bi-people fs-5"></i>
                    </div>
                </div>
                <h3 class="fw-bold mb-2"><?php echo e($totalMahasiswa); ?></h3>
                <div class="d-flex align-items-center gap-2">
                    <?php if($persenMhs >= 0): ?>
                        <span class="badge bg-success bg-opacity-10 text-success fw-bold px-2 py-1">
                            <i class="bi bi-arrow-up-right me-1"></i>+<?php echo e(number_format($persenMhs, 1)); ?>%
                        </span>
                    <?php else: ?>
                        <span class="badge bg-danger bg-opacity-10 text-danger fw-bold px-2 py-1">
                            <i class="bi bi-arrow-down-right me-1"></i><?php echo e(number_format($persenMhs, 1)); ?>%
                        </span>
                    <?php endif; ?>
                    <span class="text-muted small">vs tahun lalu</span>
                </div>
            </div>
        </div>
    </div>

    
    <?php $__currentLoopData = $prodiStats; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $stat): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
    <div class="col-xl-3 col-md-6">
        <div class="card shadow-sm border-0 bg-body-tertiary h-100">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <span class="text-muted fw-semibold small text-uppercase text-truncate" style="max-width: 150px;" title="<?php echo e($stat['nama']); ?>">
                        <?php echo e($stat['nama']); ?>

                    </span>
                    <div class="icon-shape bg-success bg-opacity-10 text-success rounded-3 p-2">
                        <i class="bi bi-building fs-5"></i>
                    </div>
                </div>
                <h3 class="fw-bold mb-2 text-success"><?php echo e($stat['total']); ?></h3>
                <div class="d-flex align-items-center gap-2">
                    <?php if($stat['persen'] >= 0): ?>
                        <span class="badge bg-success bg-opacity-10 text-success fw-bold px-2 py-1">
                            <i class="bi bi-arrow-up-right me-1"></i>+<?php echo e(number_format($stat['persen'], 1)); ?>%
                        </span>
                    <?php else: ?>
                        <span class="badge bg-danger bg-opacity-10 text-danger fw-bold px-2 py-1">
                            <i class="bi bi-arrow-down-right me-1"></i><?php echo e(number_format($stat['persen'], 1)); ?>%
                        </span>
                    <?php endif; ?>
                    <span class="text-muted small">vs tahun lalu</span>
                </div>
            </div>
        </div>
    </div>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

</div>


<div class="row g-4 mb-4">
    
    
    <div class="col-lg-8">
        <div class="card shadow-sm border-0 h-100 bg-body-tertiary">
            <div class="card-header border-bottom bg-transparent py-3">
                <h5 class="fw-bold mb-0">
                    <i class="bi bi-bar-chart-fill me-2 text-primary"></i>
                    Statistik Mahasiswa per Program Studi (Bar Chart)
                </h5>
            </div>
            <div class="card-body d-flex align-items-center justify-content-center">
                <div style="width: 100%; height: 280px;">
                    <canvas id="chartBarProdi"></canvas>
                </div>
            </div>
        </div>
    </div>

    
    <div class="col-lg-4">
        <div class="card shadow-sm border-0 h-100 bg-body-tertiary">
            <div class="card-header border-bottom bg-transparent py-3">
                <h5 class="fw-bold mb-0">
                    <i class="bi bi-pie-chart-fill me-2 text-success"></i>
                    Persentase Prodi
                </h5>
            </div>
            <div class="card-body d-flex flex-column justify-content-center">
                <?php $__empty_1 = true; $__currentLoopData = $mahasiswaPerProdi; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $p): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                    <?php
                        $persenProdi = $totalMahasiswa > 0 ? ($p->mahasiswas_count / $totalMahasiswa) * 100 : 0;
                        $colors = ['bg-primary', 'bg-success', 'bg-warning', 'bg-danger', 'bg-info', 'bg-purple'];
                        $colorClass = $colors[$loop->index % count($colors)];
                    ?>

                    <div class="mb-3">
                        <div class="d-flex justify-content-between align-items-center mb-1">
                            <span class="fw-semibold small text-truncate" style="max-width: 180px;" title="<?php echo e($p->nama_prodi); ?>">
                                <?php echo e($p->nama_prodi); ?>

                            </span>
                            <span class="small fw-bold text-muted">
                                <?php echo e($p->mahasiswas_count); ?> Mhs (<?php echo e(number_format($persenProdi, 1)); ?>%)
                            </span>
                        </div>
                        <div class="progress" style="height: 10px; border-radius: 5px;">
                            <div class="progress-bar <?php echo e($colorClass); ?>" 
                                 role="progressbar" 
                                 style="width: <?php echo e($persenProdi); ?>%; transition: width 1s ease-in-out;" 
                                 aria-valuenow="<?php echo e($persenProdi); ?>" 
                                 aria-valuemin="0" 
                                 aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                    <p class="text-muted text-center my-3">Belum ada prodi.</p>
                <?php endif; ?>
            </div>
        </div>
    </div>

</div>


<div class="row g-4 mb-4">
    <div class="col-lg-5">
        <div class="card shadow-sm border-0 h-100 bg-body-tertiary">
            <div class="card-header border-bottom bg-transparent py-3">
                <h5 class="fw-bold mb-0">
                    <i class="bi bi-pie-chart-fill me-2 text-info"></i>
                    Jenis Kelamin (Donut Chart)
                </h5>
            </div>
            <div class="card-body d-flex align-items-center justify-content-center">
                <div style="width: 100%; height: 260px;">
                    <canvas id="chartDoughnutGender"></canvas>
                </div>
            </div>
        </div>
    </div>

    
    <div class="col-lg-7">
        <div class="card shadow-sm border-0 h-100 bg-body-tertiary">
            <div class="card-header border-bottom bg-transparent py-3">
                <h5 class="fw-bold mb-0">
                    <i class="bi bi-info-circle-fill me-2 text-primary"></i>
                    Informasi Sistem Akademik
                </h5>
            </div>
            <div class="card-body d-flex flex-column justify-content-center">
                <div class="p-3 bg-secondary bg-opacity-10 rounded-3 border border-secondary border-opacity-25 mb-3">
                    <h6 class="fw-bold text-secondary mb-1"><i class="bi bi-journal-text me-2"></i>Ringkasan Data</h6>
                    <p class="text-muted small mb-0">
                        Halaman ini menyajikan rekapitulasi data mahasiswa dan program studi yang terdaftar di dalam sistem pengelolaan akademik.
                    </p>
                </div>
                <div class="row text-center g-3">
                    <div class="col-6">
                        <div class="p-3 border rounded-3 bg-body">
                            <span class="text-muted small d-block">Total Program Studi</span>
                            <h4 class="fw-bold mb-0 text-dark"><?php echo e($totalProdi); ?> Prodi</h4>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="p-3 border rounded-3 bg-body">
                            <span class="text-muted small d-block">Status Zona Waktu</span>
                            <h6 class="fw-bold mb-0 text-success mt-1">WITA (Kaltim)</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<div class="card shadow-sm border-0 bg-body-tertiary">
    <div class="card-header border-bottom bg-transparent py-3">
        <h5 class="fw-bold mb-0">
            <i class="bi bi-clock-history me-2 text-warning"></i>
            Daftar Mahasiswa Terbaru
        </h5>
    </div>
    <div class="card-body p-0">
        <div class="table-responsive">
            <table class="table table-hover align-middle mb-0">
                <thead>
                    <tr>
                        <th class="px-4 py-3">NIM</th>
                        <th class="py-3">Nama</th>
                        <th class="py-3">Program Studi</th>
                        <th class="py-3">Jenis Kelamin</th>
                    </tr>
                </thead>
                <tbody>
                    <?php $__empty_1 = true; $__currentLoopData = $mahasiswaTerbaru; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $mahasiswa): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
                        <tr>
                            <td class="px-4 fw-medium"><?php echo e($mahasiswa->nim); ?></td>
                            <td class="fw-semibold"><?php echo e($mahasiswa->nama); ?></td>
                            <td>
                                <span class="badge bg-primary bg-opacity-10 text-primary">
                                    <?php echo e($mahasiswa->prodi->nama_prodi ?? '-'); ?>

                                </span>
                            </td>
                            <td>
                                <?php if($mahasiswa->jenis_kelamin === 'Laki-laki'): ?>
                                    <span class="badge rounded-pill bg-info bg-opacity-10 text-info px-3">
                                        <i class="bi bi-person-fill me-1"></i> Laki-laki
                                    </span>
                                <?php else: ?>
                                    <span class="badge rounded-pill bg-danger bg-opacity-10 text-danger px-3">
                                        <i class="bi bi-person-heart me-1"></i> Perempuan
                                    </span>
                                <?php endif; ?>
                            </td>
                        </tr>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
                        <tr>
                            <td colspan="4" class="text-center text-muted py-4">
                                Belum ada data mahasiswa.
                            </td>
                        </tr>
                    <?php endif; ?>
                </tbody>
            </table>
        </div>
    </div>
</div>

<?php $__env->stopSection(); ?>

<?php $__env->startPush('scripts'); ?>
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function () {
    const isDark = document.documentElement.getAttribute('data-bs-theme') === 'dark';
    const textColor = isDark ? '#f8f9fa' : '#212529';
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';

    // 1. Bar Chart: Mahasiswa per Program Studi
    const canvasBar = document.getElementById('chartBarProdi');
    if (canvasBar) {
        new Chart(canvasBar, {
            type: 'bar',
            data: {
                labels: <?php echo json_encode($mahasiswaPerProdi->pluck('nama_prodi'), 15, 512) ?>,
                datasets: [{
                    label: 'Jumlah Mahasiswa',
                    data: <?php echo json_encode($mahasiswaPerProdi->pluck('mahasiswas_count'), 15, 512) ?>,
                    backgroundColor: ['#0d6efd', '#198754', '#ffc107', '#dc3545', '#6f42c1'],
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: {
                        ticks: { color: textColor },
                        grid: { display: false }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: { color: textColor, precision: 0 },
                        grid: { color: gridColor }
                    }
                }
            }
        });
    }

    // 2. Doughnut Chart: Jenis Kelamin
    const canvasDoughnut = document.getElementById('chartDoughnutGender');
    if (canvasDoughnut) {
        new Chart(canvasDoughnut, {
            type: 'doughnut',
            data: {
                labels: ['Laki-laki', 'Perempuan'],
                datasets: [{
                    data: [<?php echo e($totalLakiLaki); ?>, <?php echo e($totalPerempuan); ?>],
                    backgroundColor: ['#0dcaf0', '#dc3545'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { 
                            padding: 15, 
                            font: { size: 12, family: 'inherit' },
                            color: textColor
                        }
                    }
                }
            }
        });
    }
});
</script>
<?php $__env->stopPush(); ?>
<?php echo $__env->make('layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\Users\ACER NITRO\Documents\STITEK\PBF Kelompok\Sim-Mahasiswa\resources\views/dashboard.blade.php ENDPATH**/ ?>