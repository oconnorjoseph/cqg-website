<template>
  <div id="app">
    <div class="container-fluid m-0">
      <div class="row">
        <div class="col p-0">
          <the-navigation-bar />
        </div>
      </div>
      <div class="content">
        <div class="row">
          <div class="col">
            <router-view />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col p-0">
          <the-footer />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { subscribeAlerts, unsubscribeAlerts } from "./util/firebase/alert.js";

export default {
  name: "app",
  components: {
    TheNavigationBar: () =>
      import(/* webpackPreload: true */ "./components/TheNavigationBar.vue"),
    TheFooter: () =>
      import(/* webpackPreload: true */ "./components/TheFooter.vue")
  },
  computed: mapState(["firestore"]),
  created: function() {
    subscribeAlerts(this.firestore, this.$store);
  },
  destroyed: function() {
    unsubscribeAlerts();
  }
};
</script>

<style>
.content {
  margin-top: 95.75px;
  margin-bottom: 68.8px;
}
.logo-view {
  max-width: 500px;
  max-height: 250px;
}
.text-untransform {
  text-transform: none !important;
}
.header-width {
  max-width: 700px;
}
.card,
.grow {
  transition: all 0.2s ease-in-out;
}
.card:hover,
.grow:hover {
  transform: scale(1.05);
}
/* generated element for shine effect.
 * normal state is semi-transparent
 * white but with zero width. Set no
 * transition here for no mouse-leave
 * animations. Otherwise the effect
 * will play in reverse when your mouse
 * leaves the element
 */
.display-1,
.display-2,
.display-3,
.display-4,
.scale-display-1,
.scale-display-2,
.scale-display-3,
.scale-display-4,
.text-zipper {
  background-color: #003366;
  background-image: linear-gradient(
    -75deg,
    transparent 0,
    transparent 5%,
    rgba(255, 255, 255, 0.5) 5%,
    rgba(255, 255, 255, 0.5) 10%,
    transparent 10%,
    transparent 100%
  );
  background-size: 200% 100%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  transition: 0.5s;
}
/* on hover we animate the width to
 * 100% and opacity to 0 so the element
 * grows and fades out
 */
.display-1:hover,
.display-2:hover,
.display-3:hover,
.display-4:hover,
.scale-display-1:hover,
.scale-display-2:hover,
.scale-display-3:hover,
.scale-display-4:hover,
.text-zipper:hover {
  background-position: -90% 0;
  transition: 2s;
  transition-delay: 0.5s;
}
p,
h1,
h2,
h3,
h4,
h5,
h6,
.text-highlight {
  transition: 0.2s;
}
p:hover,
h1:hover,
h2:hover,
h3:hover,
h4:hover,
h5:hover,
h6:hover,
.text-highlight:hover {
  text-shadow: -1px 1px 1px #0033661a;
}

.rot {
  height: 120px;
  width: 120px;
  background-color: white;
  border: 2px solid #003366;
  border-radius: 20px !important;
  font-family: Nunito Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
    Segoe UI Symbol;
  font-size: 12.25px !important;
  font-weight: 600;
  letter-spacing: 1px;
  color: #003366;
  text-transform: uppercase !important;
}

.rot:before,
.rot:after {
  position: absolute;
  content: "";
  height: 100%;
  width: 80%;
  border: 2px solid #003366;
  border-radius: 20px;
  bottom: 0px;
  left: 15px;
  transition: 0.7s;
}
.rot:hover:before {
  transform: rotate(-30deg);
}
.rot:hover:after {
  transform: rotate(30deg);
}

.nav-link,
.slide-in-out {
  text-decoration: none;
  color: #7088a0;
  display: inline-block;
  position: relative; /* prepare the position for sliding in and out */
}
/* add a empty string before the elment with class .slide-in-out  */
.nav-link:before,
.slide-in-out:before {
  content: "";
  display: block;
  height: 2px;
  width: 0;
  transition: width 0s ease, background-color 0.5s ease;
  -webkit-transition: width 0s ease, background-color 0.5s ease;
  -moz-transition: width 0s ease, background-color 0.5s ease;

  /* position the content to the left bottom corner of the parent element to make it to slide in from left to right on hover */
  position: absolute;
  left: 0;
  bottom: 0;
}
/* add a empty string after the elment with class .slide-in-out  */
.nav-link:after,
.slide-in-out:after {
  content: "";
  display: block;
  height: 2px;
  width: 0;
  background: #7088a0;
  transition: width 0.5s ease-in;
  -webkit-transition: width 0.5s ease-in, background-color 0s ease-in;
  -moz-transition: width 0.5s ease-in, background-color 0s ease-in;

  /* position the content to the left bottom corner of the parent element to make it to slide out from left to right on hover */
  position: absolute;
  right: 0;
  bottom: 0;
}

/* Change the width and background on hover, aka sliding in and out */
.nav-link:hover:before,
.slide-in-out:hover:before {
  width: 100%;
  background: #7088a0;
  transition: width 0.5s ease;
  -webkit-transition: width 0.5s ease;
  -moz-transition: width 0.5s ease;
}
.nav-link:hover:after,
.slide-in-out:hover:after {
  width: 100%;
  background: transparent;
  transition: all 0s ease;
  -webkit-transition: width 0s ease;
  -moz-transition: width 0s ease;
}

.alert,
.shake:hover {
  animation: shakeAnimation 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shakeAnimation {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
