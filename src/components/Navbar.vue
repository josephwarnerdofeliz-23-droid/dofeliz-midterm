<script setup>
import logo from '../assets/cpu-logo.png'
</script>

<template>
  <nav>
    <img :src="logo" width="35" alt="College of Computer Studies logo" />
    <a href="#home">Home</a>
    <a href="#programs">Programs Offered</a>
    <a href="#faculty">Faculty & Staff</a>
    <a href="#partner">Partnerships & Memberships</a>
  </nav>
</template>

<style scoped>
nav {
  position: sticky;
  top: 0;
  z-index: 10;
  background: #0f2b27;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  border-bottom: 2px solid #e5a823;
}

img {
  width: 35px;
}

a {
  color: #fff;
  text-decoration: none;
  white-space: nowrap;
}

@media (max-width: 480px) {
  nav {
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
  }

  a {
    font-size: 0.9rem;
  }
}
</style>