<template>
  <div class="posts-list">
    <Modal
      @showModal="() => isVisible = !isVisible"
      :is-visible=isVisible
    />
    <el-button
      type="primary"
      class="posts-list__button"
      @click="isVisible = !isVisible"
    >
      Create new
    </el-button>
    <div class="posts-list__latest-post">Latest posts</div>
      <Post
        v-for="post in posts"
        :post="post"
        :key="post.id"
      />
  </div>
</template>

<script>
import Post from '@/components/Post'
import Modal from '@/components/Modal'
export default {
  name: 'PostsList',
  components: { Modal, Post },
  props: {
    posts: {
      type: Array
    }
  },
  data () {
    return {
      isVisible: false
    }
  }
}
</script>

<style lang="scss" scoped>

.posts-list {
  width: 100%;
}

.posts-list__latest-post {
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
}

.posts-list__button {
  @include screen-sm {
    width: 100%;
  }
}
</style>
