<!DOCTYPE html>
<html lang="id" data-bs-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - SIM Mahasiswa</title>
    {{-- Bootstrap 5.3 CSS --}}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    {{-- Bootstrap Icons --}}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <style>
        :root {
            --primary-gradient: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%);
            --accent-glow: rgba(13, 110, 253, 0.25);
        }

        body {
            background-color: #0b132b;
            background-image: 
                radial-gradient(at 0% 0%, rgba(13, 110, 253, 0.25) 0px, transparent 50%),
                radial-gradient(at 100% 100%, rgba(10, 88, 202, 0.3) 0px, transparent 50%),
                radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
            background-size: 100% 100%, 100% 100%, 30px 30px;
            background-attachment: fixed;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem 1rem;
        }

        .auth-wrapper {
            max-width: 960px;
            width: 100%;
        }

        .card-auth {
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 1.5rem;
            box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
            overflow: hidden;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
        }

        .brand-panel {
            background: var(--primary-gradient);
            position: relative;
            overflow: hidden;
            display: flex;
            flex-column: column;
            justify-content: space-between;
        }

        /* Subtle Pattern Overlay pada Panel Kiri */
        .brand-panel::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: radial-gradient(rgba(255, 255, 255, 0.2) 2px, transparent 2px);
            background-size: 24px 24px;
            opacity: 0.6;
        }

        .brand-panel .content {
            position: relative;
            z-index: 2;
        }

        .glass-badge {
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 50rem;
            padding: 0.4rem 1rem;
        }

        .form-control:focus {
            border-color: #0d6efd;
            box-shadow: 0 0 0 0.25rem var(--accent-glow);
        }

        .input-group-text {
            border-right: none;
        }

        .input-group .form-control {
            border-left: none;
        }

        .btn-primary-custom {
            background: var(--primary-gradient);
            border: none;
            border-radius: 0.75rem;
            transition: all 0.3s ease;
        }

        .btn-primary-custom:hover {
            transform: translateY(-2px);
            box-shadow: 0 0.5rem 1.5rem var(--accent-glow);
        }
    </style>
</head>
<body>

    <div class="container auth-wrapper">
        <div class="card card-auth">
            <div class="row g-0">
                
                {{-- KANAN / KIRI: PANEL INFORMASI & FITUR UTAMA --}}
                <div class="col-lg-6 brand-panel p-5 text-white d-none d-lg-flex">
                    <div class="content w-100">
                        <div class="d-flex align-items-center mb-4">
                            <div class="bg-white text-primary rounded-circle d-flex align-items-center justify-content-center shadow-lg me-3" style="width: 50px; height: 50px; font-size: 24px;">
                                <i class="bi bi-mortarboard-fill"></i>
                            </div>
                            <span class="fs-4 fw-bold">SIM Mahasiswa</span>
                        </div>

                        <div class="my-5">
                            <span class="glass-badge small text-uppercase fw-bold text-white mb-3 d-inline-block">
                                <i class="bi bi-shield-check me-1"></i> Sistem Terintegrasi
                            </span>
                            <h2 class="fw-bold display-6 mb-3">Kelola Data Akademik Lebih Cepat & Mudah</h2>
                            <p class="text-white-50 leading-relaxed">
                                Akses statistik mahasiswa real-time, laporan visual interaktif, dan manajemen program studi dalam satu portal terpusat.
                            </p>
                        </div>

                        {{-- Feature List --}}
                        <div class="row g-3 text-white-50 pt-3 border-top border-white border-opacity-25">
                            <div class="col-6 d-flex align-items-center">
                                <i class="bi bi-check-circle-fill text-warning me-2 fs-5"></i>
                                <span class="small text-white">Dashboard Real-Time</span>
                            </div>
                            <div class="col-6 d-flex align-items-center">
                                <i class="bi bi-check-circle-fill text-warning me-2 fs-5"></i>
                                <span class="small text-white">Laporan Ekspor PDF</span>
                            </div>
                        </div>
                    </div>

                    <div class="content mt-auto pt-4 border-top border-white border-opacity-10">
                        <small class="text-white-50">&copy; 2026 SIM Mahasiswa • Kaltim</small>
                    </div>
                </div>

                {{-- KANAN: FORM LOGIN --}}
                <div class="col-lg-6 p-4 p-md-5 d-flex flex-column justify-content-center bg-white">
                    <div class="mb-4">
                        <h3 class="fw-bold text-dark mb-1">Selamat Datang Kembali!</h3>
                        <p class="text-muted small">Silakan masuk menggunakan akun terdaftar Anda.</p>
                    </div>

                    {{-- Session Status --}}
                    @if (session('status'))
                        <div class="alert alert-success alert-dismissible fade show small mb-4" role="alert">
                            <i class="bi bi-check-circle me-1"></i> {{ session('status') }}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    @endif

                    <form method="POST" action="{{ route('login') }}">
                        @csrf

                        {{-- Email --}}
                        <div class="mb-3">
                            <label for="email" class="form-label small fw-bold text-secondary">Alamat Email</label>
                            <div class="input-group">
                                <span class="input-group-text bg-light border-end-0"><i class="bi bi-envelope text-muted"></i></span>
                                <input type="email" class="form-control bg-light @error('email') is-invalid @enderror" id="email" name="email" value="{{ old('email') }}" required autofocus autocomplete="username" placeholder="nama@domain.com">
                            </div>
                            @error('email')
                                <div class="invalid-feedback d-block mt-1">{{ $message }}</div>
                            @enderror
                        </div>

                        {{-- Password --}}
                        <div class="mb-3">
                            <label for="password" class="form-label small fw-bold text-secondary">Password</label>
                            <div class="input-group">
                                <span class="input-group-text bg-light border-end-0"><i class="bi bi-lock text-muted"></i></span>
                                <input type="password" class="form-control bg-light @error('password') is-invalid @enderror" id="password" name="password" required autocomplete="current-password" placeholder="••••••••">
                            </div>
                            @error('password')
                                <div class="invalid-feedback d-block mt-1">{{ $message }}</div>
                            @enderror
                        </div>

                        {{-- Remember Me & Forgot Password --}}
                        <div class="d-flex justify-content-between align-items-center mb-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="remember" id="remember_me">
                                <label class="form-check-label small text-secondary" for="remember_me">
                                    Ingat Saya
                                </label>
                            </div>
                            @if (Route::has('password.request'))
                                <a class="small text-decoration-none text-primary fw-semibold" href="{{ route('password.request') }}">
                                    Lupa Password?
                                </a>
                            @endif
                        </div>

                        {{-- Submit Button --}}
                        <div class="d-grid mb-4">
                            <button type="submit" class="btn btn-primary btn-primary-custom py-2.5 text-white fw-bold shadow">
                                <i class="bi bi-box-arrow-in-right me-2"></i> Masuk Sekarang
                            </button>
                        </div>

                        {{-- Register Link --}}
                        @if (Route::has('register'))
                        <div class="text-center small text-secondary">
                            Belum memiliki akun? <a href="{{ route('register') }}" class="text-primary fw-bold text-decoration-none">Daftar Akun Baru</a>
                        </div>
                        @endif

                    </form>
                </div>

            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>