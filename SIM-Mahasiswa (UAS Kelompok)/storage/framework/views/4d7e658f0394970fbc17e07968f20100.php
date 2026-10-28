<!DOCTYPE html>
<html lang="id" data-bs-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register - SIM Mahasiswa</title>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
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
                radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px);
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
            background: rgba(255, 255, 255, 0.98);
        }

        .brand-panel {
            background: var(--primary-gradient);
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .brand-panel::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: radial-gradient(rgba(255, 255, 255, 0.15) 1.5px, transparent 1.5px);
            background-size: 20px 20px;
            opacity: 0.5;
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
            padding: 0.35rem 0.85rem;
            font-size: 0.75rem;
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
                
                
                <div class="col-lg-5 brand-panel p-4 p-xl-5 text-white d-none d-lg-flex">
                    <div class="content w-100">
                        
                        <div class="d-flex align-items-center mb-4">
                            <div class="bg-white text-primary rounded-circle d-flex align-items-center justify-content-center shadow-sm me-3" style="width: 44px; height: 44px; font-size: 20px;">
                                <i class="bi bi-mortarboard-fill"></i>
                            </div>
                            <span class="fs-5 fw-bold tracking-wide">SIM Mahasiswa</span>
                        </div>

                        
                        <div class="mb-4">
                            <span class="glass-badge fw-bold text-white mb-3 d-inline-block">
                                <i class="bi bi-person-plus-fill me-1"></i> AKUN BARU
                            </span>
                            <h3 class="fw-bold fs-4 mb-2 lh-base">Mulai Perjalanan Manajemen Akademik</h3>
                            <p class="text-white-50 small mb-0 lh-relaxed">
                                Buat akun administrator baru untuk mengelola data mahasiswa, statistik program studi, serta pemantauan akademik secara terstruktur.
                            </p>
                        </div>

                        
                        <div class="p-3 rounded-3 bg-white bg-opacity-10 border border-white border-opacity-25">
                            <div class="d-flex align-items-start">
                                <i class="bi bi-shield-check text-warning fs-5 me-2.5 lh-1 mt-1"></i>
                                <div>
                                    <h6 class="fw-bold mb-1 text-white small">Akses Aman & Terenkripsi</h6>
                                    <small class="text-white-50 d-block" style="font-size: 11px; line-height: 1.4;">
                                        Seluruh data kredensial Anda dilindungi oleh standar sistem keamanan terenkripsi Laravel.
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div class="content pt-3 border-top border-white border-opacity-15 mt-4">
                        <small class="text-white-50" style="font-size: 11px;">&copy; 2026 SIM Mahasiswa • Kaltim</small>
                    </div>
                </div>

                
                <div class="col-lg-7 p-4 p-md-5 d-flex flex-column justify-content-center bg-white">
                    <div class="mb-4">
                        <h3 class="fw-bold text-dark mb-1">Pendaftaran Akun Baru </h3>
                        <p class="text-muted small mb-0">Lengkapi data di bawah ini untuk membuat akun baru.</p>
                    </div>

                    <form method="POST" action="<?php echo e(route('register')); ?>">
                        <?php echo csrf_field(); ?>

                        <div class="row">
                            
                            <div class="col-12 mb-3">
                                <label for="name" class="form-label small fw-bold text-secondary">Nama Lengkap</label>
                                <div class="input-group">
                                    <span class="input-group-text bg-light border-end-0"><i class="bi bi-person text-muted"></i></span>
                                    <input type="text" class="form-control bg-light <?php $__errorArgs = ['name'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>" id="name" name="name" value="<?php echo e(old('name')); ?>" required autofocus autocomplete="name" placeholder="Nama Lengkap Anda">
                                </div>
                                <?php $__errorArgs = ['name'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                    <div class="invalid-feedback d-block mt-1"><?php echo e($message); ?></div>
                                <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                            </div>

                            
                            <div class="col-12 mb-3">
                                <label for="email" class="form-label small fw-bold text-secondary">Alamat Email</label>
                                <div class="input-group">
                                    <span class="input-group-text bg-light border-end-0"><i class="bi bi-envelope text-muted"></i></span>
                                    <input type="email" class="form-control bg-light <?php $__errorArgs = ['email'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>" id="email" name="email" value="<?php echo e(old('email')); ?>" required autocomplete="username" placeholder="nama@domain.com">
                                </div>
                                <?php $__errorArgs = ['email'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                    <div class="invalid-feedback d-block mt-1"><?php echo e($message); ?></div>
                                <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                            </div>

                            
                            <div class="col-md-6 mb-3">
                                <label for="password" class="form-label small fw-bold text-secondary">Password</label>
                                <div class="input-group">
                                    <span class="input-group-text bg-light border-end-0"><i class="bi bi-lock text-muted"></i></span>
                                    <input type="password" class="form-control bg-light <?php $__errorArgs = ['password'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>" id="password" name="password" required autocomplete="new-password" placeholder="••••••••">
                                </div>
                                <?php $__errorArgs = ['password'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                    <div class="invalid-feedback d-block mt-1"><?php echo e($message); ?></div>
                                <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                            </div>

                            
                            <div class="col-md-6 mb-4">
                                <label for="password_confirmation" class="form-label small fw-bold text-secondary">Konfirmasi Password</label>
                                <div class="input-group">
                                    <span class="input-group-text bg-light border-end-0"><i class="bi bi-shield-check text-muted"></i></span>
                                    <input type="password" class="form-control bg-light" id="password_confirmation" name="password_confirmation" required autocomplete="new-password" placeholder="••••••••">
                                </div>
                            </div>
                        </div>

                        
                        <div class="d-grid mb-4">
                            <button type="submit" class="btn btn-primary btn-primary-custom py-2.5 text-white fw-bold shadow-sm">
                                <i class="bi bi-person-plus-fill me-2"></i> Buat Akun Sekarang
                            </button>
                        </div>

                        
                        <div class="text-center small text-secondary">
                            Sudah memiliki akun? <a href="<?php echo e(route('login')); ?>" class="text-primary fw-bold text-decoration-none">Masuk Di Sini</a>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html><?php /**PATH C:\Users\ACER NITRO\Documents\STITEK\PBF Kelompok\Sim-Mahasiswa\resources\views/auth/register.blade.php ENDPATH**/ ?>