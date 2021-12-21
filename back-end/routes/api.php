<?php

use App\Models\Graphic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('projects', 'App\Http\Controllers\ProjectController@get');
Route::get('projects/{id}', 'App\Http\Controllers\ProjectController@getById');
Route::post('projects/create', 'App\Http\Controllers\ProjectController@createProject');
Route::put('projects/edit/{id}', 'App\Http\Controllers\ProjectController@editProject');
Route::post('projects/delete/{id}', 'App\Http\Controllers\ProjectController@delete');
Route::get('graphics', 'App\Http\Controllers\GraphicController@get');
Route::get('graphics/{id}', 'App\Http\Controllers\GraphicController@getById');
Route::post('graphics/create', 'App\Http\Controllers\GraphicController@createGraphic');
Route::put('graphics/edit/{id}', 'App\Http\Controllers\GraphicController@editGraphic');
Route::post('graphics/delete/{id}', 'App\Http\Controllers\GraphicController@delete');


