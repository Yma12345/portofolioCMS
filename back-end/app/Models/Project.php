<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    protected $fillable = [
              'id',
              'projectName',
              'projectDescription',
              'projectImage',
              'projectImageTwo',
              'created_at',
              'updated_at',
    ];
    //this are the editable functions
}
