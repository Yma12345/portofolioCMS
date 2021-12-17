<?php

use App\Models\Graphic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\GraphicController;
use App\Http\Controllers\ProjectController;

Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);
Route::get('projects', 'App\Http\Controllers\ProjectController@get');
Route::get('projects/{id}', 'App\Http\Controllers\ProjectController@getById');
Route::post('projects/create', 'App\Http\Controllers\ProjectController@createProject');
Route::post('projects/edit/{id}', 'App\Http\Controllers\ProjectController@editProject');
Route::post('projects/delete/{id}', 'App\Http\Controllers\ProjectController@delete');
Route::get('graphics', 'App\Http\Controllers\GraphicController@get');
Route::get('graphics/{id}', 'App\Http\Controllers\GraphicController@getById');
Route::post('graphics/create', 'App\Http\Controllers\GraphicController@createGraphic');
Route::post('graphics/edit/{id}', 'App\Http\Controllers\GraphicController@editGraphic');
Route::post('graphics/delete/{id}', 'App\Http\Controllers\GraphicController@delete');
Route::group(['middleware' => ['auth:sanctum']], function () {

    Route::post('logout', [UserController::class, 'logout']);
});


