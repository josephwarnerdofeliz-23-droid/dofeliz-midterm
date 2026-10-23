<script setup>
</script>

<template>
  <section id="history" class="history-container">
    <div class="content-box">
      <h1>College History</h1>
      <p>
        The college began in 1995 with the birth of the Bachelor of Science in Computer Science (BSCS) 
        program under the College of Commerce. The first batch of students was composed of two sections 
        with about 100 students headed by Prof. Mary O. T. Penetrante.
      </p>
      <p>
        It was then called the Software Engineering and Computer Science (SE & CS) Department and 
        was headed by Engr. Cirilo C. Calibjo, PEE. As time progressed, a lot of changes were upheld 
        in the College with the programs it offers, as well as its facilities.
      </p>
      <p>
        By June 2018, the Bachelor of Science in Library and Information Science migrated to the 
        College of Computer Studies. More achievements and goals are yet to come, as CCS will make 
        its mark in the history of Central Philippine University.
      </p>
    </div>
  </section>
</template>

<style scoped>
.history-container {
  background: #0d2422;
  padding: 60px 20px;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.content-box {
  max-width: 900px;
  width: 100%;
  text-align: left;
}

h1 {
  color: #e5a823;
  font-size: 2.5rem;
  margin-bottom: 30px;
  font-weight: bold;
}

p {
  color: #ffffff;
  font-weight: bold;
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 20px;
  pointer-events: none; 
}


p a {
  color: #ffffff;
  font-weight: bold;
  text-decoration: none;
}

p a:hover {
  color: #ffffff; 
  text-decoration: none;
}
</style>