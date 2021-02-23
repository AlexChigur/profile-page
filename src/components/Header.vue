<template>
  <header class="header">
    <div class="header__title"> PersonBook </div>
    <div class="header__profile">
      <div class="header__user-name">{{ userInfo.name }}</div>
      <div class="header__user-pic"></div>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    userInfo () {
      return this.$store.getters.userInfo
    }
  }
}
</script>

<style lang="scss" scoped>

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  border: 2px solid black;
  height: 60px;
}

.header__user-pic {
  width: 30px;
  height: 30px;
  border: 1px solid black;
  border-radius: 20px;
  margin-left: 20px;
}

.header__profile {
  display: flex;
  align-items: center;
}

</style>
