<template>
  <div>
    {{ $route.params.id }}
    {{ getPost.title }}
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      post: "",
    };
  },
  async asyncData({ store }) {
    let { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    // return {posts:data}
    store.dispatch("setPost", data);
  },
  computed: {
    getPost() {
      return this.$store.getters["getsinglePost"](this.$route.params.id);
    },

    // ...mapGetters(["getsinglePost"]),
    // getPost() {
    //   return this.getsinglePost(this.$route.params.id);
    // },
  },
  //   head() {
  //     return {
  //       title: this.post.title,
  //     };
  //   },
};
</script>