<template>
  <div class="contents">
    <h1 class="page-header">Edit post</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title:</label>
          <input id="title" type="text" v-model="title" />
        </div>
        <div>
          <label for="contents">Contents:</label>
          <textarea id="contents" type="text" rows="5" v-model="contents" />
          <p v-if="!isContentsValid" class="validation-text warning">
            Contents length must be less than 200.
          </p>
        </div>
        <button type="submit" class="btn">Edit</button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { fetchPost, editPost } from "../../api/posts";

export default {
  data() {
    return {
      title: "",
      contents: "",
      logMessage: ""
    };
  },
  computed: {
    isContentsValid() {
      return this.contents.length < 200;
    }
  },
  methods: {
    async submitForm() {
      const id = this.$route.params.id;
      try {
        await editPost(id, {
          title: this.title,
          contents: this.contents
        });
        // TODO remember: push할때는 router, 주소값 가져 올때는 route임
        this.$router.push("/main");
      } catch (error) {
        console.log(error);
        this.logMessage = error;
      }
    }
  },
  async created() {
    const id = this.$route.params.id;
    const { data } = await fetchPost(id);
    this.title = data.title;
    this.contents = data.contents;
  }
};
</script>

<style>
.form-wrapper .form {
  width: 100%;
}
.btn {
  color: white;
}
</style>