<template>
  <div>
    <h2>this is aa</h2>
    <button @click.stop="$router.push({path: '/b'})">to b</button>
  </div>
</template>
<script>
export default {
  name: 'aa'
}
</script>
