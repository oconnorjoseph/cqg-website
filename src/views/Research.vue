<template>
  <div :id="this.$options.name">
    <div class="row m-2">
      <div class="mx-auto text-center m-5">
        <h1>Current Projects</h1>
        <p>Small blurb about CQG doing research projects.</p>
      </div>
    </div>
    <div class="row m-2">
      <div class="col-sm-6 col-lg-3 p-2">
        <research-card
          title="Sentiment Analysis of Earnings Calls"
          description="Earnings calls are conference calls where the management of a public company reports financial results to analysts, investors, and media. Analysts will assess a company’s fundamentals from the information they learn during an earnings call, trying to pick up on cues about its future returns. Some of these cues may depend on perceptions of positive or negative wording used by the management. Sentiment analysis, a technique that calculates the polarity of natural language, can be used to quantify the emotional perception of earnings calls. Our team is attempting to use sentiment analysis on various databases of earnings call transcripts to explain some of the variance in price movements of public stocks after earnings calls."
        />
      </div>
      <div class="col-sm-6 col-lg-3 p-2">
        <research-card
          title="Quantum Computing for Finance"
          description="Quantum computers are predicted to revolutionize computing in the near future. Some research groups estimate that we will reach the fault tolerance threshold within the next decade. Hedge funds and other financial institutions, who today rely heavily on high-performance computing to price options, execute trades, and uncover patterns in markets, will need to update their methods for quantum hardware to stay competitive. Our team is interfacing with a Rigetti Quantum Processing Unit to implement financial algorithms with subroutines theorized to demonstrate a quantum speedup. While the computing systems are still developing, we are beginning to implement and test various financial algorithms with Rigetti’s pyQuil library."
        />
      </div>
      <div class="col-sm-6 col-lg-3 p-2">
        <research-card
          title="NLP for Factor Investing"
          description="Natural language processing is a popular technique and has been successfully used to solve many problems like keywords extraction, sentiment analysis, topic modeling and so forth. Financial news includes lots of valuable information like opinions for the companies, financial constraints. Analysts will provide investment suggestion based on news and market. Factor investing is a popular top-down approach for portfolio construction. Lots of portfolio managers will adjust their portfolio based on market regime and factor exposure. Our team is attempting to build regime switching, factor evaluation and factor investing model based on text and market data from various source for providing an alternative approach for portfolio construction."
        />
      </div>
      <div class="col-sm-6 col-lg-3 p-2">
        <research-card
          title="Statistical Arbitrage Strategy Design"
          description="There are lots of assets in the financial market. A popular way of investing is statistical arbitrage that exploring the relationship between assets, between assets and index, and between financial assets and real assets. The robustness of the relationship between the portfolios is important for doing arbitrage. Cointegration, Johansen procedure, Kalman filtering are popular techniques for this type of strategy. Our team is attempting to develop a new model for finding arbitrage opportunity and detecting the change of the relationship dynamically."
        />
      </div>
    </div>
    <div class="row m-2">
      <h1 class="mx-auto text-center m-5">Meet Our Research Team</h1>
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
  name: "Research",
  components: {
    ResearchCard: () => import("../components/ResearchCard.vue"),
    PersonCard: () => import("../components/PersonCard.vue")
  }
};
</script>
