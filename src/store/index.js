import Vue from 'vue'
import Vuex from 'vuex'
import { getUsers, getUserPosts, getPhotos } from '../api/profile'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      info: {},
      posts: [],
      photos: []
    }
  },
  mutations: {
    setUser (state, data) {
      Vue.set(state.user, 'info', data)
    },

    setUserPosts (state, posts) {
      state.user.posts.push(...posts)
    },

    createNewPost (state, post) {
      state.user.posts.push(post)
    },

    setUserPhotos (state, photos) {
      state.user.photos.push(...photos)
    }
  },
  actions: {
    async setUser ({ commit, dispatch }, id) {
      const users = await getUsers()
      const currentUser = users.find(user => user.id === parseInt(id))

      dispatch('setUserPosts', id)
      dispatch('setUserPhotos', id)
      commit('setUser', currentUser)
    },

    async setUserPosts ({ commit }, id) {
      commit('setUserPosts', await getUserPosts(id))
    },

    async setUserPhotos ({ commit }, id) {
      commit('setUserPhotos', await getPhotos(id))
    },

    createNewPost ({ commit }, post) {
      commit('createNewPost', post)
    }
  },
  getters: {
    userInfo: state => {
      return state.user.info
    },
    userPosts: state => {
      return state.user.posts
    },
    userPhotos: state => {
      return state.user.photos
    }
  }
})
