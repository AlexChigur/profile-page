<template>
  <div v-if="isVisible" class="modal">
    <div class="header">
      <div class="header__new-post">New post</div>
      <div class="header__cross" @click="$emit('showModal')">
        <Cross/>
      </div>
    </div>
    <div class="creating-post">
      <div class="creating-post__title">Title
        <el-input
          v-model="title"
          class="creating-post__input"
        />
      </div>
      <div class="creating-post__body">Body
        <el-input
          @input="getUrl"
          v-model="body"
          class="creating-post__text-area"
          type="textarea"
          :rows="10"
          resize="none"
        />
      </div>
    </div>
    <div class="modal__separate"></div>
    <div class="preview">
      <div class="preview__image">
        <img :src="getPostImage.url">
      </div>
      <div class="preview__content">
        <div class="preview__title">{{ title || 'Title' }}</div>
        <div class="preview__body">
          {{ body }}
          <LinkPreview
            v-if="linkPreview"
            :image="linkPreview.image"
            :title="linkPreview.title"
            :description="linkPreview.description"
            :url="linkPreview.url"
          />
        </div>
      </div>
    </div>
    <div class="buttons">
      <el-button class="buttons__submit" @click="createNewPost">Submit</el-button>
      <el-button class="buttons__cancel" @click="$emit('showModal')">Cancel</el-button>
    </div>
  </div>
</template>

<script>

import Cross from '../assets/cancel-cross.svg'
import { getLinkPreview } from '../api/api'
import LinkPreview from '@/components/LinkPreview'

export default {
  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  components: {
    LinkPreview,
    Cross
  },
  data () {
    return {
      title: '',
      body: '',
      linkPreview: null
    }
  },
  methods: {
    createNewPost () {
      this.$store.dispatch('createNewPost', {
        body: this.body,
        title: this.title,
        id: this.userPosts[this.userPosts.length - 1].id + 1,
        userId: this.$route.params.id,
        linkPreview: {
          description: this.linkPreview?.description || null,
          image: this.linkPreview?.image || null,
          title: this.linkPreview?.title || null,
          url: this.linkPreview?.url || null
        }
      })
      this.title = ''
      this.body = ''
      this.$emit('showModal')
    },
    getUrl (event) {
      // eslint-disable-next-line
      const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
      const regex = new RegExp(expression)
      if (event.match(regex) && !this.linkPreview) {
        getLinkPreview(event.match(regex)[0])
          .then(res => {
            this.linkPreview = {
              description: res.description,
              image: res.image,
              title: res.title,
              url: res.url
            }
          })
      }
    }
  },
  computed: {
    userPosts () {
      return this.$store.getters.userPosts
    },
    getPostImage () {
      const photos = this.$store.getters.userPhotos
      return photos.find(({ id }) => id === this.userPosts.length)
    }
  }
}
</script>

<style lang="scss" scoped>

.modal {
  right: 0;
  left: 0;
  top: 0;
  position: absolute;
  transition: opacity .8s, transform .8s;
  z-index: 2;
  width: 100%;
  max-width: 640px;
  margin: 100px auto;
  font: normal 14px Rubik, sans-serif;
  background-color: #FFFFFF;
  box-shadow: 0px 6px 32px rgba(152, 169, 188, 0.24), 0px 4px 8px rgba(119, 140, 162, 0.08);
  border-radius: 4px;
  height: fit-content;
  padding: 20px;

  @include screen-sm {
    width: 70%;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  .header__cross {
    cursor: pointer;
  }
}

.creating-post {
  max-width: 500px;
  .creating-post__title,
  .creating-post__body {
    height: 100%;
    margin-top: 15px;
  }
}

.modal__separate {
  border: 1px solid black;
  margin: 20px 0;
}

.preview {
  display: flex;
  .preview__image {
    width: 120px;
    height: 80px;
    border: solid 1px black;
    margin-bottom: 15px;

    img {
      width: inherit;
      height: inherit;
    }

    @include screen-sm {
      width: 80px;
      height: 60px;
    }

  }

  .preview__content {
    display: flex;
    flex-direction: column;
    margin: 0 0 20px 20px;
    max-width: 500px;

  }
  .preview__body {
    height: fit-content;
    word-break: break-all;
  }

  .preview__title {
    margin-bottom: 15px;
  }
}

</style>
