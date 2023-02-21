<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AdminLoginController;
use App\Http\Controllers\Admin\DashboardController;


Route::prefix("admin")->name("admin.")->group( function() {
	Route::group(['middleware' => 'admin.guest'], function(){
		// Route::view('/login','admin.login')->name('admin.login');
		Route::get('/login',[AdminLoginController::class, 'index'])->name('login');
		Route::post('/login',[AdminLoginController::class, 'authenticate'])->name('auth');
	});

	Route::group(['middleware' => 'admin.auth'], function(){

        Route::get('/dashboard',[DashboardController::class, 'index'])->name('dashboard');
		Route::post('/logout',[AdminLoginController::class, 'logout'])->name('logout');

	});
});
