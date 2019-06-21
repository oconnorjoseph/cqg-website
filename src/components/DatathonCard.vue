<template>
  <div :id="this.$options.name" class="card p-2 m-4">
    <div class="card-body pb-0">
      <h1 class="display-4 card-title text-primary text-center mb-0">
        {{ datathon.title }}
      </h1>
      <div class="row">
        <div class="col p-2 align-self-center">
          <h4 class="card-text text-center text-nowrap">
            {{ datathon.startDate }} - {{ datathon.endDate }}
          </h4>
        </div>
      </div>
      <div class="row">
        <div class="col p-2 align-self-center">
          <h5 class="card-text text-center">{{ datathon.location }}</h5>
        </div>
      </div>
      <div class="row">
        <div class="col p-2">
          <p class="card-text">{{ datathon.description }}</p>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col p-2">
          <h3 class="card-text text-center">
            Supported by our gracious sponsors:
          </h3>
        </div>
      </div>
      <image-grid :imageURLs="sponsorLogoURLs" class="pb-0 pt-2" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { fetchLogoURL } from "../util/firebase/datathon.js";

export default {
  name: "DatathonCard",
  components: {
    ImageGrid: () => import(/* webpackPreload: true */ "./ImageGrid.vue")
  },
  props: {
    datathon: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      sponsorLogoURLs: []
    };
  },
  computed: mapState(["firebaseStorage"]),
  created: function() {
    this.datathon.sponsorLogos.forEach(sponsorLogo =>
      fetchLogoURL(this.firebaseStorage, sponsorLogo).then(url =>
        this.sponsorLogoURLs.push(url)
      )
    );
  }
};
</script>

<style scoped>
.card {
  height: 100%;
}
</style>
