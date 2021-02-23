<template>
    <div class="link-preview" @click="redirect">
      <div class="link-preview__image">
        <img :src="getImage">
      </div>
      <div class="link-preview__content">
        <div class="link-preview__title">{{ title }}</div>
        <div class="link-preview__description">{{ description }}</div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    image: {
      type: String
    },
    description: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    }
  },
  methods: {
    redirect () {
      window.location.href = this.url
    }
  },
  computed: {
    getImage () {
      return !this.image ? '@/assets/default.png' : this.image
    }
  }
}
</script>

<style lang="scss" scoped>

.link-preview {
  display: flex;
  cursor: pointer;
}

.link-preview__content {
  display: flex;
  flex-direction: column;
  background-color: wheat;
}

.link-preview__image {
  width: 40px;
  margin-right: 20px;
  img {
    width: 100px;
    height: 100%;
  }
}

</style>
