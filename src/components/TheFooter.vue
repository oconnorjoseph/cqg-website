<template>
  <footer :id="this.$options.name" class="fixed-bottom">
    <div class="container-fluid bg-dark">
      <div class="row py-4 text-center">
        <div class="col">
          <a
            class="text-light"
            href="https://www.facebook.com/columbiaquantgroup/"
            >Facebook</a
          >
        </div>
        <div class="col">
          <a class="text-light" href="https://www.linkedin.com/company/14006842"
            >LinkedIn</a
          >
        </div>
        <div class="col">
          <a
            class="text-light"
            href="https://www.instagram.com/columbia.quant.group/"
            >Instagram</a
          >
        </div>
        <div class="col">
          <a class="text-light" href="mailto:columbia.quant.group@columbia.edu"
            >columbia.quant.group@columbia.edu</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter"
};
</script>

<style scoped>
h4 {
  overflow: hidden;
  white-space: nowrap;
}
</style>
