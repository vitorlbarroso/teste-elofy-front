<script>
export default {
  data() {
    return {
      apiReturn: "",
      loader: true,
    }
  },
  created() {
    this.$axios.get('/hello_world')
    .then(res => {
      this.apiReturn = res.data.message;
      this.loader = false;
    })
  }
}
</script>

<template>
  <div class="home">
    {{ loader ? 'Carregando...' : apiReturn }}
  </div>
</template>

<style scoped>
.home {
  width: 100%;
}
</style>