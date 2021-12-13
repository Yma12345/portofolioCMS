<?php

namespace App\Http\Controllers;

use App\Models\Graphic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class GraphicController extends Controller
{
    public function get()
    {
        $graphics = Graphic::get();
        return response()->json($graphics);
        //function to get the objects and returns it to json
    }
}
