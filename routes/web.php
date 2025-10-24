<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\PhotoController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    //productos
    Route::get('products', [ProductController::class,'index'])->name('products.index');
    Route::get('products/create', [ProductController::class,'create'])->name('products.create');
    Route::post('products', [ProductController::class,'store'])->name('products.store');
    Route::get('products/show/{product}', [ProductController::class,'show'])->name('products.show');
    Route::get('products/edit/{product}', [ProductController::class,'edit'])->name('products.edit');
    Route::put('products/{product}', [ProductController::class, 'update'])->name('products.update');
    Route::delete('products/{product}', [ProductController::class,'delete'])->name('products.destroy');
    
    //photos
    Route::delete('photos/{photo}', [PhotoController::class,'destroy'])->name('photos.destroy');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

