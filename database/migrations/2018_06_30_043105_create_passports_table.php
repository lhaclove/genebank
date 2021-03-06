<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePassportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('passports', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('vegetable_id')->unsigned();
            $table->timestamp('collecting_date')->nullable();
            $table->integer('donor_number')->nullable();
            $table->string('country')->nullable();
            $table->string('location')->nullable();
            $table->string('season')->nullable();
            $table->string('collecting_institute')->nullable();
            $table->string('collector')->nullable();
            $table->integer('collecting_number')->nullable();
            $table->string('latitide')->nullable();
            $table->string('longitude')->nullable();
            $table->string('altitude')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('passports');
    }
}
