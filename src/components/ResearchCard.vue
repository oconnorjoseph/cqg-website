<template>
  <div :id="this.$options.name" class="card p-2">
    <div class="card-body">
      <h5 class="card-title text-primary">{{ project.title }}</h5>
      <p class="card-text">{{ project.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResearchCard",
  props: {
    project: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.card {
  height: 100%;
}
</style>
