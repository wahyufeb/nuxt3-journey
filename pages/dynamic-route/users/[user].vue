<script setup>
const route = useRoute()
console.error(route.params.user)
</script>

<template>
  <h1>Route path: {{ $route.path }}</h1>
  <p>Catch the value of <i>user param</i> is <strong>{{$route.params.user}}</strong></p>
</template>