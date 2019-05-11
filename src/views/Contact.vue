<template>
  <div id:="this.$options.name">
    <div class="row m-4">
        <div class="col-sm col-md-8">
            <form>
                <div class="form-group">
                    <input type="text" class="form-control" required="true" id="contactInputName" placeholder="Your name">
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" required="true" id="contactInputEmail" aria-describedby="emailHelp" placeholder="Your email">
                </div>
                <div class="form-group">
                    <textarea class="form-control" required="true" id="contactTextareaMessage" rows="5" placeholder="Please write your message here."></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Send</button>
            </form>
        </div>
        <div class="col-sm col-md-4 text-center">
            <contact-card/>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  components: {
      ContactCard: () => import("../components/ContactCard.vue")
  }
};
</script>

<style>
#ContactCard {
    
}
</style>
