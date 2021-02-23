import { apiRequest } from './api'

export const getUsers = async () => {
  return await apiRequest({
    method: 'GET',
    endpoint: '/users'
  })
}

export const getPosts = async () => {
  return await apiRequest({
    method: 'GET',
    endpoint: '/posts',
    params: {
      userId: 1
    }
  })
}

export const getUserPosts = async (id) => {
  return await apiRequest({
    method: 'GET',
    endpoint: `/users/${id}/posts`
  })
}

export const getPhotos = async () => {
  return await apiRequest({
    method: 'GET',
    endpoint: '/albums/1/photos'
  })
}
