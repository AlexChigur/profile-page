<template>
  <div class="profile">
    <div class="user" v-if="userInfo.name">
      <div class="user__pic">
        <img src="public/favicon.ico">
      </div>
      <div class="user__fullname">{{ userInfo.name }}</div>
      <div class="user__email">{{ userInfo.username }} ({{ userInfo.email }})</div>
      <div class="user__address">
        <div class="user__city">
          {{ userInfo.address.city }}
        </div>
        <div class="user__street">
          {{ userInfo.address.street }}
        </div>
        <div class="user__suite">
          {{ userInfo.address.suite }}
        </div>
      </div>
    </div>
    <div class="posts">
      <PostsList :posts="userPosts"/>
    </div>
  </div>
</template>

<script>
import PostsList from '@/components/PostsList'
export default {
  name: 'Profile',

  components: { PostsList },

  computed: {
    userInfo () {
      return this.$store.getters.userInfo
    },
    userPosts () {
      return this.$store.getters.userPosts
    }
  },

  created () {
    this.$store.dispatch('setUser', this.$route.params.id || 1)
  }
}
</script>

<style lang="scss" scoped>

.profile {
  height: 100%;
  display: flex;
  border: 1px solid black;

  @include screen-sm {
    flex-direction: column;
  }
}

.user {
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @include screen-sm {
    justify-content: center;
    width: 100%;
  }

}

.user__pic {
  margin-top: 40px;
  width: 100px;
  height: 100px;
  border: 1px solid black;
}

.user__address {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.user__fullname,
.user__email,
.user__city,
.user__street,
.user__suite {
  margin-top: 10px;
  word-break: break-word;
  text-align: center;
}

.posts {
  padding: 20px;
  border-left: 1px solid black;

  @include screen-sm {
    border: none;
  }
}

</style>
