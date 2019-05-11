<template>
  <div :id="this.$options.name" class="card p-2">
    <div class="card-body">
      <h5 class="card-title">Email</h5>
      <p class="card-text">
        <a href="mailto:columbia.quant.group@gmail.com"
          >columbia.quant.group@gmail.com</a
        >
      </p>
      <br />
      <h5 class="card-title">Address</h5>
      <p class="card-text">
        70 Morningside Drive
        <br />602 Hamilton Hall <br />New York, NY 10027
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactCard"
};
</script>

<style></style>
