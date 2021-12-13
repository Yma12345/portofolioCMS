<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Graphic extends Model
{
    use HasFactory;
    protected $fillable = [
              'id',
              'graphicImage',
              'created_at',
              'updated_at',
    ];
    //this are the editable functions
}
