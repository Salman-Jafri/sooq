<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Permissions
{

    private $actions = [
        "user" => [
            "dashboard" => "dashboard",
            "dashboard1" => "dashboard1"
        ],
        "admins" => [

        ]
    ];
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if (Auth::check())
        {
            $action = str_replace('user.', '', $request->route()->getName());
            if (isset($this->actions['user'][$action]) && in_array($this->actions['user'][$action], session('permissions'))) {
                return $next($request);
            }
            else {
                return redirect()->route('access_denied');
            }
        }
        else
        {
            return $next($request);
        }
    }
}
