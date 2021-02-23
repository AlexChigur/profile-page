<template>
  <div class="post">
    <div class="content">
      <div class="content__image" v-if="getPostImage">
        <img :src="getPostImage.url"/>
      </div>
      <div class="content__description">{{ post.body }}</div>
      <LinkPreview
        v-if="post.linkPreview && post.linkPreview.description "
        :title="post.linkPreview.title"
        :url="post.linkPreview.url"
        :description="post.linkPreview.description"
        :image="post.linkPreview.image"
      />
    </div>
  </div>
</template>

<script>
import LinkPreview from '@/components/LinkPreview'
export default {
  components: { LinkPreview },
  props: {
    post: {
      type: Object,
      default: null
    }
  },
  computed: {
    getPostImage () {
      const photos = this.$store.getters.userPhotos
      return photos.find(({ id }) => id === this.post.id)
    }
  }
}
</script>

<style scoped>
  .post {
    display: flex;
    flex-direction: column;
  }

  .post:nth-of-type(3)::before {
    content: "advertising";
    text-align: center;
    margin-top: 30px;
    width: 100%;
    height: 60px;
    border: solid 1px black;
    background-color: darkgray;
    background-image: url("https://via.placeholder.com/600/92c952");
  }

  .content {
    padding: 20px;
    margin-top: 50px;
    border: solid 1px black;
  }

  .content__image {
    width: 100%;
    height: 150px;
    border: 1px solid black;
  }

  img {
    width: inherit;
    height: inherit;
  }

  .content__description {
    word-break: break-all;
    margin: 20px 0;
  }
</style>
