<template>
  <div :id="this.$options.name" class="alert alert-info text-left" role="alert">
    <h5 class="alert-heading text-center">
      Our Spring '20 Introductory Datathon is Live!
    </h5>
    <hr />
    You must partake in CQG's internal
    <a
      href="https://www.kaggle.com/c/cqg-research-competition"
      class="alert-link"
    >
      Kaggle Competition
    </a>
    to join the research team. This guided competition will give you a basic
    understanding of quantitive research and what to expect at popular datathons
    competitions. The deadline for submissions is
    <span style="font-weight: bold !important;"
      >{{ deadlineDateFormatted }}.
    </span>
    <hr />
    <h5 class="alert-heading text-center">
      Competition closes in:
      <span class="badge badge-pill badge-danger p-2">
        {{ countdown }}
      </span>
    </h5>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "DatathonAlert",
  data() {
    return {
      countdown: 0,
      countdownInterval: null
    };
  },
  computed: {
    ...mapGetters(["internalDatathonDeadline"]),
    deadlineDateFormatted() {
      const deadlineDate = new Date(this.internalDatathonDeadline);
      return deadlineDate.toLocaleString("en-US", {
        month: "long",
        day: "numeric"
      });
    }
  },
  created() {
    this.countdownInterval = setInterval(() => {
      const nowMillis = Date.now();
      const untilMillis = this.internalDatathonDeadline - nowMillis;
      const days = Math.floor(untilMillis / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (untilMillis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (untilMillis % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((untilMillis % (1000 * 60)) / 1000);
      const daysFormatted = days ? `${days} Days ` : "";
      const hoursFormatted = hours.toLocaleString("en-IN", {
        minimumIntegerDigits: 2,
        maximumFractionDigits: 0
      });
      const minutesFormatted = minutes.toLocaleString("en-IN", {
        minimumIntegerDigits: 2,
        maximumFractionDigits: 0
      });
      const secondsFormatted = seconds.toLocaleString("en-IN", {
        minimumIntegerDigits: 2,
        maximumFractionDigits: 0
      });
      this.countdown = `${daysFormatted}${hoursFormatted}:${minutesFormatted}:${secondsFormatted}`;
    });
  },
  destroyed() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }
};
</script>
