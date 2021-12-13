<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Graphic;
use DB;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;

class GraphicSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('graphics')->delete();
        $json = Storage::disk('local')->get('graphic.json');
        $data = json_decode($json);
        foreach($data as $graphic)
        {
            Graphic::create(array(
              'id' => $graphic->id,
              'graphicImage' => $graphic->graphicImage,
              'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
              'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ));
            //inserts data in the database
        }
    }
}
