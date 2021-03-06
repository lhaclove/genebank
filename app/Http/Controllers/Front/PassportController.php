<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PassportController extends Controller
{
    public function index(Request $request)
    {
        return view('passport.index');
    }
    
    public function show(Request $request, $pin)
    {
        return view('passport.show', compact('pin'));
    }
}
