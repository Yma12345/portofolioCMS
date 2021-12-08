<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('projects', 'App\Http\Controllers\ProjectController@get');
Route::get('projects/{id}', 'App\Http\Controllers\ProjectController@getById');


