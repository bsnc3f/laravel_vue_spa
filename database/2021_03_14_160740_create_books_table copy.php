<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
            // id, dow,	program, nca, ncb, ncc, func, startTime, duration, endTime, valid, msg1, msg2, msg3, bgColor, textColor
            $table->increments('id');
            $table->integer('weekday');
            $table->string('program', 32);
            $table->string('name', 32);
            $table->boolean('nca');
            $table->boolean('ncb');
            $table->boolean('ncc');
            $table->string('func');
            $table->time('startTime');
            $table->integer('duration');
            $table->time('endTime');
            $table->integer('blink');
            $table->boolean('isValid');
            $table->string('msg1');
            $table->string('msg2');
            $table->string('msg3');
            $table->string('bgColor', 8);
            $table->string('textColor', 8);
            $table->boolean('isDone');
            $table->boolean('isShow');
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
        Schema::dropIfExists('books');
    }
}
