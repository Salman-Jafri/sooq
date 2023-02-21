<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class AdminLoginController
{
    public function index()
    {
        return view("admin.login");
    }

    public function authenticate(Request $request)
    {

        if(Auth::guard('admin')->attempt(["email" => $request->email, "password" => $request->password], $request->filled("remember")))
        {
            return redirect()->route("admin.dashboard");
        }
        else
        {
            throw ValidationException::withMessages([
                "email" => "Invalid Email/Password"
            ]);
        }

    }


    public function logout(Request $request)
    {
        Auth::guard('admin')->logout();
        return redirect()->route('admin.login');
    }
}
