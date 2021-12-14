<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProjectController extends Controller
{
    public function get()
    {
        $projects = Project::get();
        return response()->json($projects);
        //function to get the objects and returns it to json
    }
    public function getById($id)
    {
        $projects = Project::find($id);
        return response()->json($projects);
        //function to get the objects by id and returns it to json
    }
    function createProject(Request $req){

        Project::create([
            'projectName' => $req->projectName,
            'projectImage' => $req->projectImage,
            'projectImageTwo' => $req->projectImageTwo,
        ]);
        //creates the object

        //
        return response()->json('Succesfully created a new object');
    }
}
