<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/', function ()
{
    return view('index');
});

Route::get('/news', function ()
{
    return view('news.index');
})->name('news.index');

Route::get('/gallery', function ()
{
    return view('gallery.index');
})->name('gallery.index');

Route::get('/about', function ()
{
    return view('about.index');
})->name('about.index');

Route::group(['prefix' => 'search/characterization'], function(){
    Route::get('/', 'Front\CharController@index')->name('characterization.index');
    Route::get('/{genus}', 'Front\CharController@show')->name('characterization.show');
    Route::get('/{genus}/{pin}', 'Front\CharController@detail')->name('characterization.detail');
});
Route::group(['prefix' => 'search/evaluation'], function(){
    Route::get('/', 'Front\EvaluationController@index')->name('evaluation.index');
    Route::get('/{pin}', 'Front\EvaluationController@show')->name('evaluation.show');
});
Route::group(['prefix' => 'search'], function(){
    Route::get('/passport', 'Front\PassportController@index')->name('passport.index');
    Route::get('/passport/{pin}', 'Front\PassportController@show')->name('passport.show');
});

