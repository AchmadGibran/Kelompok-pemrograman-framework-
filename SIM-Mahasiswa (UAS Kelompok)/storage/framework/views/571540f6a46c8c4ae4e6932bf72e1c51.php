<!DOCTYPE html>
<html lang="id" data-bs-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $__env->yieldContent('title', 'Dashboard'); ?> - SIM Mahasiswa</title>

    
    <script>
        (function() {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                document.documentElement.setAttribute('data-bs-theme', savedTheme);
            } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.documentElement.setAttribute('data-bs-theme', 'dark');
            }
        })();
    </script>

    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <?php echo $__env->yieldPushContent('styles'); ?>
    <style>
        body {
            background-color: var(--bs-body-bg);
            color: var(--bs-body-color);
        }
        .sidebar {
            width: 260px;
            min-height: 100vh;
            background: var(--bs-tertiary-bg);
            border-right: 1px solid var(--bs-border-color);
            position: fixed;
            top: 0;
            left: 0;
            z-index: 100;
            transition: transform .3s ease;
        }
        .main-content {
            margin-left: 260px;
            padding: 2rem;
            transition: margin .3s ease;
        }
        .sidebar-toggle {
            display: none;
            border: 0;
            background: transparent;
            font-size: 26px;
            color: var(--bs-body-color);
            margin-right: 12px;
        }
        .sidebar-overlay {
            display: none;
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,.45);
            z-index: 99;
        }
        .sidebar-overlay.show {
            display: block;
        }
        @media (max-width: 991px) {
            .sidebar {
                transform: translateX(-100%);
            }
            .sidebar.show {
                transform: translateX(0);
            }
            .main-content {
                margin-left: 0;
                padding: 1rem;
            }
            .sidebar-toggle {
                display: block;
            }
        }
    </style>
</head>
<body>

    
    <div id="sidebar" class="sidebar d-flex flex-column p-3">
        <a href="<?php echo e(route('dashboard')); ?>" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
            <span class="fs-4 fw-bold text-primary">
                <i class="bi bi-mortarboard-fill me-2"></i>SIM Mahasiswa
            </span>
        </a>
        <hr>
        <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item mb-1">
                <span class="text-uppercase text-muted fw-bold px-3 mb-2 d-block" style="font-size: 0.75rem;">MENU UTAMA</span>
            </li>
            <li class="nav-item mb-1">
                <a href="<?php echo e(route('dashboard')); ?>" class="nav-link <?php echo e(request()->routeIs('dashboard') ? 'active' : 'text-body'); ?>">
                    <i class="bi bi-speedometer2 me-2"></i> Dashboard
                </a>
            </li>
            <li class="nav-item mb-1">
                <a href="<?php echo e(route('mahasiswa.index')); ?>" class="nav-link <?php echo e(request()->routeIs('mahasiswa.*') ? 'active' : 'text-body'); ?>">
                    <i class="bi bi-people-fill me-2"></i> Data Mahasiswa
                </a>
            </li>
            <li class="nav-item mb-1">
                <a href="<?php echo e(route('prodi.index')); ?>" class="nav-link <?php echo e(request()->routeIs('prodi.*') ? 'active' : 'text-body'); ?>">
                    <i class="bi bi-journal-bookmark-fill me-2"></i> Program Studi
                </a>
            </li>

            <li class="nav-item mt-4 mb-1">
                <span class="text-uppercase text-muted fw-bold px-3 mb-2 d-block" style="font-size: 0.75rem;">PENGATURAN</span>
            </li>
            <li class="nav-item mb-1">
                
                <a href="#" data-bs-toggle="modal" data-bs-target="#profileModal" class="nav-link <?php echo e(request()->routeIs('profile.*') ? 'active' : 'text-body'); ?>">
                    <i class="bi bi-person-circle me-2"></i> Profile
                </a>
            </li>
            <li class="nav-item">
                <form action="<?php echo e(route('logout')); ?>" method="POST">
                    <?php echo csrf_field(); ?>
                    <button type="submit" class="nav-link link-danger border-0 bg-transparent w-100 text-start">
                        <i class="bi bi-box-arrow-right me-2"></i> Logout
                    </button>
                </form>
            </li>
        </ul>
    </div>

    <div id="sidebarOverlay" class="sidebar-overlay"></div>

    
    <div class="main-content">
        
        <nav class="navbar navbar-expand-lg bg-body-tertiary rounded shadow-sm px-4 mb-4">
            <div class="container-fluid px-0">
                <div class="d-flex align-items-center">
                    <button id="sidebarToggle" class="sidebar-toggle" type="button" aria-label="Toggle Sidebar">
                        <i class="bi bi-list"></i>
                    </button>
                    <div>
                        <h4 class="mb-0 fw-bold"><?php echo $__env->yieldContent('page-title', 'Dashboard'); ?></h4>
                        <small class="text-muted">Sistem Informasi Data Mahasiswa</small>
                    </div>
                </div>

                <div class="d-flex align-items-center gap-3">
                    <button id="themeToggleBtn" class="btn btn-outline-secondary btn-sm rounded-circle d-flex align-items-center justify-content-center" style="width: 35px; height: 35px;" type="button" title="Ganti Tema">
                        <i id="themeIcon" class="bi bi-moon-fill"></i>
                    </button>

                    
                    <a href="#" data-bs-toggle="modal" data-bs-target="#profileModal" class="d-flex align-items-center text-decoration-none text-body p-1 rounded">
                        <div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-2 shadow-sm" style="width: 35px; height: 35px; font-weight: bold;">
                            <?php echo e(strtoupper(substr(auth()->user()->name ?? 'A', 0, 1))); ?>

                        </div>
                        <div class="d-none d-md-block text-start">
                            <div class="fw-semibold lh-1"><?php echo e(auth()->user()->name ?? 'Administrator'); ?></div>
                            <small class="text-muted" style="font-size: 0.75rem;">Administrator</small>
                        </div>
                    </a>
                </div>
            </div>
        </nav>

        
        <div class="container-fluid px-0">
            <?php if(session('success')): ?>
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <i class="bi bi-check-circle-fill me-2"></i><?php echo e(session('success')); ?>

                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <?php endif; ?>

            <?php if(session('error')): ?>
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <i class="bi bi-exclamation-triangle-fill me-2"></i><?php echo e(session('error')); ?>

                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <?php endif; ?>

            <?php echo $__env->yieldContent('content'); ?>
        </div>
    </div>

    
    <div class="modal fade" id="profileModal" tabindex="-1" aria-labelledby="profileModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content shadow-lg border-0">
                <div class="modal-header bg-primary text-white">
                    <h5 class="modal-title fw-bold" id="profileModalLabel">
                        <i class="bi bi-person-gear me-2"></i> Pengaturan Profil & Keamanan
                    </h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-4">
                    
                    
                    <div class="mb-4 pb-3 border-bottom">
                        <h6 class="fw-bold text-primary mb-3">Informasi Profil</h6>
                        <form method="post" action="<?php echo e(route('profile.update')); ?>">
                            <?php echo csrf_field(); ?>
                            <?php echo method_field('patch'); ?>

                            <div class="mb-3">
                                <label for="modal_name" class="form-label small fw-semibold">Nama</label>
                                <input type="text" class="form-control" id="modal_name" name="name" value="<?php echo e(old('name', auth()->user()->name)); ?>" required>
                            </div>

                            <div class="mb-3">
                                <label for="modal_email" class="form-label small fw-semibold">Email</label>
                                <input type="email" class="form-control" id="modal_email" name="email" value="<?php echo e(old('email', auth()->user()->email)); ?>" required>
                            </div>

                            <div class="text-end">
                                <button type="submit" class="btn btn-primary btn-sm px-4">Simpan Perubahan</button>
                            </div>
                        </form>
                    </div>

                    
                    <div>
                        <h6 class="fw-bold text-warning mb-3">Perbarui Password</h6>
                        <form method="post" action="<?php echo e(route('password.update')); ?>">
                            <?php echo csrf_field(); ?>
                            <?php echo method_field('put'); ?>

                            <div class="mb-3">
                                <label for="current_password" class="form-label small fw-semibold">Password Saat Ini</label>
                                <input type="password" class="form-control" id="current_password" name="current_password" required>
                            </div>

                            <div class="mb-3">
                                <label for="password" class="form-label small fw-semibold">Password Baru</label>
                                <input type="password" class="form-control" id="password" name="password" required>
                            </div>

                            <div class="mb-3">
                                <label for="password_confirmation" class="form-label small fw-semibold">Konfirmasi Password Baru</label>
                                <input type="password" class="form-control" id="password_confirmation" name="password_confirmation" required>
                            </div>

                            <div class="text-end">
                                <button type="submit" class="btn btn-warning btn-sm px-4 text-white">Ubah Password</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>

    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            // TOGGLE SIDEBAR MOBILE
            const sidebar = document.getElementById('sidebar');
            const toggle  = document.getElementById('sidebarToggle');
            const overlay = document.getElementById('sidebarOverlay');

            toggle?.addEventListener('click', function () {
                sidebar.classList.toggle('show');
                overlay.classList.toggle('show');
            });

            overlay?.addEventListener('click', function () {
                sidebar.classList.remove('show');
                overlay.classList.remove('show');
            });

            // LOGIKA TOGGLE DARK MODE
            const themeToggleBtn = document.getElementById('themeToggleBtn');
            const themeIcon = document.getElementById('themeIcon');
            const htmlElement = document.documentElement;

            function updateIcon(theme) {
                if (theme === 'dark') {
                    themeIcon.classList.remove('bi-moon-fill');
                    themeIcon.classList.add('bi-sun-fill');
                } else {
                    themeIcon.classList.remove('bi-sun-fill');
                    themeIcon.classList.add('bi-moon-fill');
                }
            }

            updateIcon(htmlElement.getAttribute('data-bs-theme'));

            themeToggleBtn?.addEventListener('click', function () {
                const currentTheme = htmlElement.getAttribute('data-bs-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

                htmlElement.setAttribute('data-bs-theme', newTheme);
                localStorage.setItem('theme', newTheme);
                updateIcon(newTheme);
            });
        });
    </script>

    <?php echo $__env->yieldPushContent('scripts'); ?>
</body>
</html><?php /**PATH C:\Users\ACER NITRO\Documents\STITEK\PBF Kelompok\Sim-Mahasiswa\resources\views/layouts/app.blade.php ENDPATH**/ ?>