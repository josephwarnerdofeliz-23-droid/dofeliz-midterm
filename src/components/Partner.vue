<script setup>
import cisco from '../assets/cisco.png'
import acer from '../assets/acer.jpg'
import oracle from '../assets/Oracle.png'
import huawei from '../assets/huawei.jpg'
import psite from '../assets/psite.png'
import govesmart from '../assets/govesmart.jpg' 
import mayad from '../assets/mayad.png' 
import lasortech from '../assets/lasortech.jpg'
import startupproject from '../assets/startupproject.jpg'
</script>

<template>
  <section id="partner">
    <h1>Partnerships and Memberships</h1>
    <div class="grid">
      <a><img :src="oracle" width="200px" /></a>
      <a><img :src="cisco" width="200px" /></a>
      <a ><img :src="acer" width="200px" /></a>
      <a><img :src="huawei" width="200px" /></a>
      <a><img :src="psite" width="200px" /></a>
      <a><img :src="govesmart" width="200px" /></a>
      <a><img :src="mayad" width="200px" /></a>
      <a><img :src="lasortech" width="200px" /></a>
      <a><img :src="startupproject" width="200px" /></a>
    </div>
  </section>
</template>

<style scoped>
section {
  background: #0d2422;
  text-align: center;
  padding: 60px 20px;
}

h1 {
  color: #e5a823;
  margin-bottom: 50px;
}

.grid {
  display: grid;
  gap: 40px;
  justify-content: center;
  grid-template-columns: repeat(3, 200px);
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.grid a {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;     
  padding: 20px;             
  border-radius: 10px;       
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.grid img {
  display: block;
  width: 100%;
  max-width: 160px;
  height: 160px;             
  object-fit: contain;      
}

@media (max-width: 700px) {
  .grid {
    grid-template-columns: repeat(2, 180px);
    gap: 20px;
  }
}

@media (max-width: 450px) {
  .grid {
    grid-template-columns: 200px;
  }
}
</style>