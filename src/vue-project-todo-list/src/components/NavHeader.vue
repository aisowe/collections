<template>
  <header class="nav-container">
    <!-- <a-icon class="home-icon" type="home" /> -->
    <h1 class="title">
      My Bucket List
    </h1>
  </header>
</template>

<script>

export default {
  name: 'nav-header'
}
</script>

<style scoped>
.nav-container {
  height: 64px;
  line-height: 64px;
  padding: 0 20px;
}
.home-icon {
  display: inline-block;
}
.title {
  display: inline-block;
  font-size: 30px;
  color: #054e8b;
  line-height: 64px;
}
</style>
