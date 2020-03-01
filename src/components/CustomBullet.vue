<template>
  <div
    :id="this.$options.name"
    class="row align-items-center mb-2"
    @mouseenter="onHoverOn()"
    @mouseleave="onHoverOut()"
  >
    <div class="col-auto p-0" style="min-width: 50px;">
      <slot name="bullet" v-bind="{ colorHoverable }" />
    </div>
    <div class="col pl-1">
      <p class="text-primary text-left mb-0 text-highlight">
        <slot />
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "CustomBullet",
  data() {
    return {
      color: "#7088a0",
      colorHover: "#003366",
      colorHoverable: "#7088a0"
    };
  },
  methods: {
    onHoverOn() {
      this.colorHoverable = this.colorHover;
    },
    onHoverOut() {
      this.colorHoverable = this.color;
    }
  }
};
</script>
