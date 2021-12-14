<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('projects', 'App\Http\Controllers\ProjectController@get');
Route::get('projects/{id}', 'App\Http\Controllers\ProjectController@getById');
Route::post('projects/create', 'App\Http\Controllers\ProjectController@createProject');

Route::get('graphics', 'App\Http\Controllers\GraphicController@get');
Route::get('graphics/{id}', 'App\Http\Controllers\GraphicController@getById');
Route::post('graphics/create', 'App\Http\Controllers\GraphicController@createGraphic');

Route::post("user-signup", "UserController@userSignUp");

Route::post("user-login", "UserController@userLogin");

Route::get("user/{email}", "UserController@userDetail");


