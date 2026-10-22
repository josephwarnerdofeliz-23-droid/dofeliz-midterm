<script setup>
import logo from '../assets/cpu-logo.png'
</script>

<template>
  <section id="home">
    <img :src="logo" width="90" />
    <h1>College of Computer Studies</h1>
    <p>DIFFERENT PEOPLE, ONE GOAL</p>
  </section>
</template>

<style scoped>
section {
  text-align: center;
  padding: 50px 20px;
  background: #0a1e1c;
  display: flex;
  flex-direction: column; 
  align-items: center;
}
h1 {
  color: #fff;
}
p {
  color: #e5a823;
  font-weight: bold;
}
</style>