<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="UTF-8">
  <title>SPAサンプル</title>
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <meta name=”viewport” content=”width=device-width, initial-scale=1”>
  <script src="{{ asset('js/app.js') }}" defer></script>
</head>

<body>
  <div id="app">
    <router-link to="/">home</router-link>
    <router-link to="/index">index</router-link>
    <router-link to="/book">book</router-link>

    <router-view />
  </div>
</body>

</html>
