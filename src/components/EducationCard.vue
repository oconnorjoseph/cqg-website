<template>
  <div :id="this.$options.name" class="card p-2">
    <div class="card-body">
      <h5 class="card-title text-dark">{{ initiative.title }}</h5>
      <p class="card-text">{{ initiative.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "EducationCard",
  props: {
    initiative: {
      type: Object,
      required: true
    }
  }
};
</script>

<style></style>
