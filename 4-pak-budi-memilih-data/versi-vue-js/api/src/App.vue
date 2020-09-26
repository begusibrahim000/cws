<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1>
            <div class="alert alert-success" role="alert">
              4. Pak Budi Memilih Data - Vue.js
            </div>
          </h1>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Author</th>
                <th scope="col">Description</th>
                <th scope="col">Language</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="data in datas" :key="data">
                <td>{{ data.author }}</td>
                <td>{{ data.description }}</td>
                <td>{{ data.language }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      datas: "",
    };
  },

  mounted() {
    this.load();
  },

  methods: {
    load() {
      axios
        .get("https://github-trending-api.now.sh/repositories")
        .then((response) => {
          console.log(response.data[0].author);
          this.datas = response.data;
        })
        .catch((error) => {
          alert(error);
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>
