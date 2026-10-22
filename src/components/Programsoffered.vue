<script setup>
import bsit from '../assets/bsit.png'
import bscs from '../assets/bscs.png'
import bsdmia from '../assets/bsdmia.png'
import blis from '../assets/blis.png'
</script>

<template>
  <section id="programs">
    <h1>Programs Offered</h1>
    <div class="grid">
      <a  class="card">
        <img :src="bsit" width="35" />
        <h3>BSIT</h3>
        <p>Information Technology</p>
      </a>

      <a class="card">
        <img :src="bscs" width="35" />
        <h3>BSCS</h3>
        <p>Computer Science</p>
      </a>

      <a class="card">
        <img :src="bsdmia" width="35" />
        <h3>BSDMIA</h3>
        <p>Digital Media & Arts</p>
      </a>

      <a class="card">
        <img :src="blis" width="35" />
        <h3>BLIS</h3>
        <p>Library Science</p>
      </a>
    </div>
  </section>
</template>

<style scoped>
section {
  background: #0d2422;
  text-align: center;
}

h1 {
  color: #e5a823;
  margin-bottom: 20px;
}

.grid {
  display: grid;
  gap: 30px;
  justify-content: center;
  grid-template-columns: repeat(4, 200px);
  width: 100%;
  max-width: 1000px;
}

.card {
  background: #0f2b27;
  padding: 15px;
  border-radius: 6px;
  width: 100%;
  text-decoration: none;
}

img {
  display: block;
  width: 100%;
  max-width: 200px;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  margin: 0 auto 10px;
}
h3 {
  color: #e5a823;
}

p {
  color: #ccc;
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(2, 200px);
  }
}

@media (max-width: 500px) {
  .grid {
    grid-template-columns: 300px;
    gap: 20px;
  }
}
</style>