
export const state = () => ({
  posts: []
})

export const getters = {
  getPosts: (state) => {
    return state.posts
  },
  getsinglePost: (state) => (id) => {
    // console.log(id);
    // console.log(posts);
    return state.posts.find(function (post) {
      if (post.id === id) {
        return post;
      }
    });
  }
}

export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts;
  }
}

export const actions = {
  setPost({ commit }, posts) {
    commit("SET_POSTS", posts)
  }
}