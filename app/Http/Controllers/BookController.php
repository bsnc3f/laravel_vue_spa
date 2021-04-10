<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Book;
use App\Http\Requests\StoreBook;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // ソートしてから取得
        return Book::orderBy('weekday', 'asc')->orderBy('startTime', 'asc')->get();
        // 全取得
        // return Book::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreBook $request)
    {
        Book::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Book::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(StoreBook $request, $id)
    {
        $update = [
            'weekday' => $request->weekday,
            'program' => $request->program,
            'name' => $request->name,
            'nca' => $request->nca,
            'ncb' => $request->ncb,
            'ncc' => $request->ncc,
            'func' => $request->func,
            'startTime' => $request->startTime,
            'duration' => $request->duration,
            'endTime' => $request->endTime,
            'blink' => $request->blink,
            'isValid' => $request->isValid,
            'msg1' => $request->msg1,
            'msg2' => $request->msg2,
            'msg3' => $request->msg3,
            'bgColor' => $request->bgColor,
            'textColor' => $request->textColor,
            'isDone' => $request->isDone,
            'isShow' => $request->isShow,

        ];
        Book::where('id', $id)->update($update);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Book::where('id', $id)->delete();
    }
}
