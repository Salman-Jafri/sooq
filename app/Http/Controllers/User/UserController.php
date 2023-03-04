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
                "username" => "required|unique:users,username|min:6",
                "password" => "required|min:6",
            ]);

        $user = User::create([
            'name' => $request->name,
            'member_contact' => $request->contact,
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
        // Value For store In Sessions After User Login
        // $this->session->rwtech_member_loggedin=TRUE;
        // $this->session->member_username = $this->input->post('username');
        // $this->session->rwtech_member_id = $r->uid;
        // $this->session->rwtech_sub_member_id = 'none';
        // $this->session->userrole = 'member';

        if(Auth::attempt(["username" => $request->username, "password" => $request->password], $request->filled("remember")))
        {
            $user = Auth::user();
            //using qrstatus just for testing purpose
            $permissions = ["dashboard"=> $user->qr_status, "dashboard1"=> $user->qr_status];
            session(['permissions' => $permissions]);
            return redirect()->route("index");
        }
        else
        {
            throw ValidationException::withMessages([
                "email" => "Invalid Usename/Password"
            ]);
        }

    }



    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        return redirect()->route('user.login');
    }
}
