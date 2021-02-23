<template>
  <div class="app">
    <Header/>
    <div class="content">
      <Profile/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Profile from '@/components/Profile'

export default {
  components: { Profile, Header }
}
</script>

<style lang="scss">
 body {
   margin: 0;
   height: 100vh;
 }
 .app {
   height: 100%;
 }
 .content {
   padding: 20px 120px;

   @include screen-xs {
     padding: 10px 40px;
   }
 }
</style>
