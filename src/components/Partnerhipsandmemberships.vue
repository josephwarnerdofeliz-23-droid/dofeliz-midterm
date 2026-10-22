<script setup>
import cisco from '../assets/cisco.png'
import acer from '../assets/acer.jpg'
import oracle from '../assets/Oracle.png'
import huawei from '../assets/huawei.jpg'
</script>

<template>
  <section id="programs">
    <h1>Partnerships and Memberships</h1>
    <div class="grid">
      <a><img :src="cisco" width="200px" /></a>

      <a ><img :src="acer" width="200px" /></a>

      <a><img :src="oracle" width="200px" /></a>

      <a><img :src="huawei" width="200px" /></a>
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
  margin-bottom: 70px;

}

.grid {
  display: grid;
  gap: 50px;
  justify-content: center;
  grid-template-columns: repeat(4, 200px);
  width: 100%;
  max-width: 1000px;
}

.grid img {
  display: block;
  width: 100%;
  max-width: 200px;
  height: auto;
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
    gap: 30px;
  }
}

@media (max-width: 500px) {
  h1 {
    margin-bottom: 30px;
  }

  .grid {
    grid-template-columns: 200px;
    gap: 20px;
  }
}
</style>