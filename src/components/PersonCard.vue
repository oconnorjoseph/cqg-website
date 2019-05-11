<template>
  <div :id="this.$options.name" class="card text-center p-2">
    <img
      class="card-img-top rounded-circle mx-auto"
      :src="headshotUrl"
      :alt="name"
    />
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">{{ role }}</p>
      <p class="card-text">{{ description }}</p>
      <span>
        <p class="card-text">
          Email:
          <a :href="'mailto:' + email">{{ email }}</a>
        </p>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonCard",
  props: {
    headshotUrl: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    role: {
      type: String
    },
    description: {
      type: String
    },
    email: {
      type: String
    }
  }
};
</script>

<style>
img {
  max-width: 50%;
}
.card {
  border: none;
}
</style>
