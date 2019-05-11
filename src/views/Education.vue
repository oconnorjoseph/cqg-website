<template>
  <div :id="this.$options.name">
    <div class="row m-2">
      <div class="mx-auto text-center m-5">
        <h1 class="display-4">CQG Academy</h1>
        <p>Encompassing introduction describing what CQG academy is.</p>
      </div>
    </div>
    <div class="row m-2">
      <div class="col-6 p-2">
        <education-card
          title="Lecture Series"
          description="We will have a lecture series that includes things like resume workshops, lots of interview problem solving, some refreshers on the relevant statistics you need to be on top of for every interview, etc. We can also talk about specific firms' interviews, and one of the events we're most looking forward to doing is a panel of 4-6 seniors (or juniors) who interned at a variety of companies and can answer questions about their own experience, pros/cons, and interview process."
        />
      </div>
      <div class="col-6 p-2">
        <education-card
          title="Insights"
          description="We intend to find professors and employees in the industry with relevant experience to share. Columbia has a lot of resources for us in this direction with people like Allison Bishop (if you've read flash boys) who are not only amazing for our internal club members to hear from but also could bring pretty large crowds given the right presentation of the event."
        />
      </div>
    </div>
    <div class="row m-2">
      <h1 class="mx-auto text-center m-5">Meet The Education Team</h1>
    </div>
    <div class="row m-2">
      <div class="col-sm-6 col-lg-3 p-2">
        <person-card
          headshotUrl="/img/gv2256_headshot.jpeg"
          name="Gleb Vizitiv SEAS '20"
          role="Co-President"
          description="Junior studying Computer Science and Physics who is working at Morgan Stanley."
          email="gleb.vizitiv@columbia.edu"
        />
      </div>
      <div class="col-sm-6 col-lg-3 p-2">
        <person-card
          headshotUrl="/img/ojw2140_headshot.jpg"
          name="Oliver Jin Wang CC '20"
          role="Co-President"
          description="Junior studying Physics and Statistic who is working at PJT Partners."
          email="ojw2140@columbia.edu"
        />
      </div>
      <div class="col-sm-6 col-lg-3 p-2">
        <person-card
          headshotUrl="/img/rcr2142_headshot.jpeg"
          name="Rodolfo Costa Raimundo SEAS '21"
          role="Vice President"
          description="Sophomore studying Mathematics and CS who is working at Morgan Stanley."
          email="rcr2142@columbia.edu"
        />
      </div>
      <div class="col-sm-6 col-lg-3 p-2">
        <person-card
          headshotUrl="/img/nl2605_headshot.jpg"
          name="Nicolae Lari SEAS '21"
          role="Vice President"
          description="Sophomore studying Computer Science and Statistics who is working at Morgan Stanley."
          email="nl2605@columbia.edu"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Education",
  components: {
    EducationCard: () => import("../components/EducationCard.vue"),
    PersonCard: () => import("../components/PersonCard.vue")
  }
};
</script>
