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

    public function getById($id)
    {
        $graphics = Graphic::find($id);
        return response()->json($graphics);
        //function to get the objects by id and returns it to json
    }

    function createGraphic(Request $req){

        Graphic::create([
            'graphicImage' => $req->graphicImage,
        ]);
        //creates the object

        //
        return response()->json('Succesfully created a new object');
    }

    function editGraphic(Request $req, $id){
        Graphic::find($id)
        ->update([
            'graphicImage' => $req->graphicImage,
        ]);
        //updates the variables
        return response()->json('it worked');
    }

    function delete($id)
    {
        $graphics = Graphic::find($id);
        $graphics->delete();
        return response()->json('deleted');
        //delete the object by id
    }
}
