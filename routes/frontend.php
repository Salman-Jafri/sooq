<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AdminLoginController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Frontend\FrontendController;
use App\Http\Controllers\User\UserController;


//Front end routes

Route::get('/', [FrontendController::class, 'index'])->name('index');

// User routes
Route::name("user.")->group( function()
{
    // all guest routes
	Route::group(['middleware' => 'guest'], function()
    {
		// Route::view('/login','admin.login')->name('admin.login');
		Route::get('/login',[FrontendController::class, 'login'])->name('login');
		Route::post('/login',[UserController::class, 'authenticate'])->name('auth');

        Route::get('/user/register',[UserController::class, 'create'])->name('create');
        Route::post('/user/store',[UserController::class, 'store'])->name('store');

	});

    //all authenticated routes

	Route::group(['middleware' => 'auth'], function(){

        // Route::get('/dashboard',[DashboardController::class, 'index'])->name('dashboard');
		Route::post('/logout',[UserController::class, 'logout'])->name('logout');

	});
});
