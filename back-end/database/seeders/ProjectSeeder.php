<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Project;
use DB;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('projects')->delete();
        $json = Storage::disk('local')->get('projects.json');
        $data = json_decode($json);
        foreach($data as $project)
        {
            Project::create(array(
              'id' => $project->id,
              'projectName' => $project->projectName,
              'projectDescription' => $project->projectDescription,
              'projectImage' => $project->projectImage,
              'projectImageTwo' => $project->projectImageTwo,
              'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
              'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ));
            //inserts data in the database
        }
    }
}
