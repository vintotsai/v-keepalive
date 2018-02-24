<template>
  <div>
    <h2>this is cc</h2>
    <button @click.stop="$router.push({name: 'detail1'})">to detail1</button>
  </div>
</template>
<script>
export default {
  name: 'cc'
}
</script>
