<script setup>
import { ref } from 'vue'
import logo from '../assets/cpu-logo.png'

const isAboutOpen = ref(false)
const isProgramsOpen = ref(false)
</script>

<template>
  <nav>
    <img :src="logo" class="logo-img" alt="College of Computer Studies logo" />
    <router-link to="/" class="nav-link">Home</router-link>

    <div 
      class="dropdown"
      @mouseenter="isAboutOpen = true"
      @mouseleave="isAboutOpen = false"
    >
      <button class="dropdown-toggle">
        About Us
        <svg 
          class="arrow-icon" 
          :class="{ 'rotate': isAboutOpen }"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div v-if="isAboutOpen" class="dropdown-menu">
        <router-link to="/history">History</router-link>
        <router-link to="/partners">Partners and Memberships</router-link>
        <router-link to="/news">News, Events, & Announcements</router-link>
      </div>
    </div>

    <div 
      class="dropdown"
      @mouseenter="isProgramsOpen = true"
      @mouseleave="isProgramsOpen = false"
    >
      <button class="dropdown-toggle">
        Programs Offered
        <svg 
          class="arrow-icon" 
          :class="{ 'rotate': isProgramsOpen }"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div v-if="isProgramsOpen" class="dropdown-menu">
        <router-link to="/cs">Computer Science</router-link>
        <router-link to="/it">Information Technology</router-link>
        <router-link to="/dmia">Digital Media And Interactive Arts</router-link>
        <router-link to="/lis">Library Information Science</router-link>
      </div>
    </div>

    <router-link to="/faculty" class="nav-link">Faculty and Staff</router-link>
    <router-link to="/contact" class="nav-link">Contact Us</router-link>
  </nav>
</template>

<style scoped>
nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #0f2b27;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 25px;
}

.logo-img {
  width: 35px;
  height: auto;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  white-space: nowrap;
}

.nav-link:hover {
  color: #e5a823;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-toggle {
  background: none;
  border: none;
  color: #fff;
  font-family: inherit;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0;
  white-space: nowrap;
}

.dropdown-toggle:hover {
  color: #e5a823;
}

.arrow-icon {
  width: 14px !important;
  height: 14px !important;
  min-width: 14px;
  min-height: 14px;
  transition: transform 0.2s ease;
}

.arrow-icon.rotate {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%; 
  left: 0;
  margin-top: 0px; 
  padding-top: 8px; 
  background: #ffffff;
  min-width: 240px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  border: 1px solid #e5a823;
  overflow: hidden;
}

.dropdown-menu::before {
  content: '';
  position: absolute;
  top: -12px;
  left: 0;
  width: 100%;
  height: 12px;
}

.dropdown-menu :deep(a),
.dropdown-menu router-link {
  color: #2c3e50;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  font-size: 0.95rem;
  font-weight: normal;
  border-bottom: 1px solid #eaeaea;
  transition: color 0.2s ease, background-color 0.2s ease;
}

.dropdown-menu :deep(a:last-child),
.dropdown-menu router-link:last-child {
  border-bottom: none;
}

.dropdown-menu :deep(a:hover),
.dropdown-menu router-link:hover {
  background-color: #f9f3e3;
  color: #e5a823;
}

@media (max-width: 900px) {
  nav {
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
  }
}
</style>