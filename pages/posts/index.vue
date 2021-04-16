<template>
  <div>
    <h1>This is Post View</h1>
    <div class="container">
      <div class="row">
        <post v-for="(post, index) in getPosts" :key="index" :post="post" />
      </div>
      <button v-scroll-to="'body'">Click Me!</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import post from "@/components/Post";
import { mapGetters } from "vuex";
export default {
  components: {
    post,
  },
  data() {
    return {
      posts: [],
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
    ...mapGetters(["getPosts"]),
    // allpost() {
    //   // return this.$store.getters["getPosts"];
    //   return this.getPosts;
    // },
  },
  head: {
    title: "List Of Post",
  },
};
</script>