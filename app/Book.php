<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $fillable = [
        'weekday',
        'program',
        'name',
        'nca',
        'ncb',
        'ncc',
        'func',
        'startTime',
        'duration',
        'endTime',
        'blink',
        'isValid',
        'msg1',
        'msg2',
        'msg3',
        'bgColor',
        'textColor',
        'isDone',
        'isShow',
    ];
}
