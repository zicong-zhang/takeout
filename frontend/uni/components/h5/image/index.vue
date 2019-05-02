<template>
  <img :src="src" />
</template>

<script>
export default {
  name: 'h5-img',
  inject: ['src']
}
</script>
