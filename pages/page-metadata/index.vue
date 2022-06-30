<script setup>
import { title, description } from "@/constants/meta"
definePageMeta({
  title,
  description
})
const route = useRoute()
</script>

<template>
  <div>
    <h1>Welcome to Page Metadata</h1>
    <p>Meta title : {{route.meta.title}}</p>
    <p>Meta description : {{route.meta.title}}</p>
  </div>
</template>