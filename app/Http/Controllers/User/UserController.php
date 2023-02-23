<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function create()
    {
        return view("frontend.register");
    }

    public function store(Request $request)
    {
        $request->validate(
            [
                "email" => "required|email|unique:users,email",
                "username" => "required|unique:users,username|min:6",
                "password" => "required|min:6",
            ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'username' => $request->username,
        ]);

        if($user)
        {
            return redirect()->route("user.login");
        }
        else
        {
            throw ValidationException::withMessages([
                "email" => "Error user not created"
            ]);
        }
    }


    public function authenticate(Request $request)
    {

        if(Auth::attempt(["email" => $request->email, "password" => $request->password], $request->filled("remember")))
        {
            return redirect()->route("index");
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
        Auth::logout();
        return redirect()->route('user.login');
    }
}
