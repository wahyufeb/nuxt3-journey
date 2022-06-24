<template>
  <h1>Route path: {{ $route.path }}</h1>
  <p>In this page have 2 route params, the params are role params & access params.</p>
  <p>Catch the value of <i>role param</i> is <strong>{{$route.params.role}}</strong></p>
  <p>Catch the value of <i>access param</i> is <strong>{{$route.params.access}}</strong></p>
</template>