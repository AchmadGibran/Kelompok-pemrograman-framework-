 

<?php $__env->startSection('title', 'Tambah Mahasiswa'); ?> 

<?php $__env->startSection('content'); ?> 
<div class="mb-4"> 
    <h2 class="fw-bold"> 
        Tambah Mahasiswa 
    </h2> 
    <p class="text-muted"> 
        Masukkan data mahasiswa baru. 
    </p> 
</div> 

<div class="card shadow-sm"> 
    <div class="card-body"> 
        <form action="<?php echo e(route('mahasiswa.store')); ?>" method="POST"> 
            <?php echo csrf_field(); ?> 

            <div class="row g-3"> 
                <div class="col-md-6"> 
                    <label class="form-label"> 
                        NIM 
                    </label> 
                    <input 
                        type="text" 
                        name="nim" 
                        class="form-control <?php $__errorArgs = ['nim'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>" 
                        value="<?php echo e(old('nim')); ?>" 
                    > 
                    <?php $__errorArgs = ['nim'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> 
                        <div class="invalid-feedback"> 
                            <?php echo e($message); ?> 
                        </div> 
                    <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?> 
                </div> 

                <div class="col-md-6"> 
                    <label class="form-label"> 
                        Nama 
                    </label> 
                    <input 
                        type="text" 
                        name="nama" 
                        class="form-control <?php $__errorArgs = ['nama'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>" 
                        value="<?php echo e(old('nama')); ?>" 
                    > 
                    <?php $__errorArgs = ['nama'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> 
                        <div class="invalid-feedback"> 
                            <?php echo e($message); ?> 
                        </div> 
                    <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?> 
                </div> 

                <div class="col-md-6"> 
                    <label class="form-label"> 
                        Program Studi 
                    </label> 
                    <select 
                        name="prodi_id" 
                        class="form-select <?php $__errorArgs = ['prodi_id'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>" 
                    > 
                        <option value=""> 
                            Pilih Program Studi 
                        </option> 

                        <?php $__currentLoopData = $prodis; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $prodi): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?> 
                            <option 
                                value="<?php echo e($prodi->id); ?>" 
                                <?php if(old('prodi_id') == $prodi->id): echo 'selected'; endif; ?> 
                            > 
                                <?php echo e($prodi->nama_prodi); ?> 
                            </option> 
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?> 
                    </select> 
                    <?php $__errorArgs = ['prodi_id'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> 
                        <div class="invalid-feedback"> 
                            <?php echo e($message); ?> 
                        </div> 
                    <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?> 
                </div> 

                <div class="col-md-6"> 
                    <label class="form-label"> 
                        Jenis Kelamin 
                    </label> 
                    <select name="jenis_kelamin" class="form-select"> 
                        <option value=""> 
                            Pilih 
                        </option> 
                        <option 
                            value="Laki-laki" 
                            <?php if(old('jenis_kelamin') == 'Laki-laki'): echo 'selected'; endif; ?> 
                        > 
                            Laki-laki 
                        </option> 
                        <option 
                            value="Perempuan" 
                            <?php if(old('jenis_kelamin') == 'Perempuan'): echo 'selected'; endif; ?> 
                        > 
                            Perempuan 
                        </option> 
                    </select> 
                </div> 

                <div class="col-md-6"> 
                    <label class="form-label"> 
                        Tanggal Lahir 
                    </label> 
                    <input 
                        type="date" 
                        name="tanggal_lahir" 
                        class="form-control" 
                        value="<?php echo e(old('tanggal_lahir')); ?>" 
                    > 
                </div> 

                <div class="col-md-6"> 
                    <label class="form-label"> 
                        Telepon 
                    </label> 
                    <input 
                        type="text" 
                        name="telepon" 
                        class="form-control" 
                        value="<?php echo e(old('telepon')); ?>" 
                    > 
                </div> 

                <div class="col-md-12"> 
                    <label class="form-label"> 
                        Email 
                    </label> 
                    <input 
                        type="email" 
                        name="email" 
                        class="form-control" 
                        value="<?php echo e(old('email')); ?>" 
                    > 
                </div> 

                <div class="col-md-12"> 
                    <label class="form-label"> 
                        Alamat 
                    </label> 
                    <textarea 
                        name="alamat" 
                        class="form-control" 
                        rows="4" 
                    ><?php echo e(old('alamat')); ?></textarea> 
                </div> 
            </div> 

            <div class="mt-4"> 
                <a href="<?php echo e(route('mahasiswa.index')); ?>" class="btn btn-secondary"> 
                    Batal 
                </a> 
                <button class="btn btn-primary"> 
                    <i class="bi bi-save me-1"></i> 
                    Simpan 
                </button> 
            </div> 
        </form> 
    </div> 
</div> 
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH C:\Users\ACER NITRO\Documents\STITEK\PBF Kelompok\Sim-Mahasiswa\resources\views/mahasiswa/create.blade.php ENDPATH**/ ?>