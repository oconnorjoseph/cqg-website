<template>
  <div :id="this.$options.name">
    <div class="row m-4">
      <div class="col-sm col-md-8 p-2">
        <form>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              required="true"
              id="contactInputName"
              placeholder="Your name"
              v-model="name"
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              required="true"
              id="contactInputEmail"
              aria-describedby="emailHelp"
              placeholder="Your email address"
              v-model="emailAddress"
            />
          </div>
          <div class="form-group">
            <textarea
              class="form-control"
              required="true"
              id="contactTextareaMessage"
              rows="5"
              placeholder="Please write your message here."
              v-model="message"
            ></textarea>
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            onclick="return false;"
            @click="sendEmail()"
          >
            Send
          </button>
        </form>
      </div>
      <div class="col-sm col-md-4 text-center p-2">
        <contact-card />
      </div>
    </div>
    <div class="row m-4" v-if="isShowingAlert">
      <div class="col">
        <div
          class="alert alert-dismissible alert-success"
          @click="isShowingAlert = false"
        >
          Your message has been sent! We will respond as soon as possible.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
const SEND_EMAIL_FUNC_NAME = "sendContactEmail";

export default {
  name: "Contact",
  components: {
    ContactCard: () =>
      import(/* webpackPreload: true */ "../components/ContactCard.vue")
  },
  methods: {
    sendEmail: function() {
      const sendEmail = this.firebaseFunctions.httpsCallable(
        SEND_EMAIL_FUNC_NAME
      );
      const sendEmailFuncData = {
        name: this.name,
        emailAddress: this.emailAddress,
        message: this.message
      };
      sendEmail(sendEmailFuncData).then(this.acknowledgeInput);
    },
    acknowledgeInput: function() {
      this.isShowingAlert = true;
    }
  },
  data: function() {
    return {
      name: null,
      emailAddress: null,
      message: null,
      isShowingAlert: false
    };
  },
  computed: {
    ...mapState(["firebaseFunctions"])
  }
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  button {
    width: 100%;
  }
}
</style>
