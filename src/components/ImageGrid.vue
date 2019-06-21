<template>
  <div :id="this.$options.name" class="row">
    <div
      v-for="imageURL in imageURLs"
      :key="imageURL"
      class="col-xs-12 col-sm p-2"
    >
      <img :src="imageURL" :style="'width:' + imageWidth + 'px;'" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageGrid",
  props: {
    imageWidth: {
      type: Number,
      default: 170
    },
    imageURLs: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
img {
  display: block;
  margin: auto;
}
@media screen and (max-width: 335px) {
  img {
    margin: 0;
  }
}
</style>
