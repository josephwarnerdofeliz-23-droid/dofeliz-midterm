<script setup>
import { ref } from 'vue'

const contactInfo = ref([
  {
    title: 'Telephone',
    detail: '329-1971 local 1094',
    icon: '📞'
  },
  {
    title: 'CPU Mail',
    detail: 'ccssec@cpu.edu.ph',
    icon: '✉️'
  },
  {
    title: 'Social Media',
    detail: 'College of Computer Studies - CPU',
    icon: '🌐'
  }
])
</script>

<template>
  <div class="contact-container">
    <header class="contact-header">
      <h1>Contact Us</h1>
      <p class="subtitle">We Will Gladly Assist You</p>
    </header>

    <section class="content-section">
      <h2>College of Computer Studies Secretariat</h2>
      <p>Reach out to us through our official communication channels for inquiries, institutional concerns, or academic assistance.</p>
      
      <div class="contact-grid">
        <div v-for="(item, index) in contactInfo" :key="index" class="contact-card">
          <span class="contact-icon">{{ item.icon }}</span>
          <div class="contact-text">
            <h3>{{ item.title }}</h3>
            <p>{{ item.detail }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  color: #fff;
  font-family: Arial, sans-serif;
}

.contact-header {
  text-align: center;
  margin-bottom: 40px;
  border-bottom: 2px solid #e5a823;
  padding-bottom: 20px;
}

.contact-header h1 {
  color: #fff;
  font-size: 2.2rem;
  margin-bottom: 10px;
}

.subtitle {
  color: #e5a823;
  font-size: 1.1rem;
  font-weight: bold;
}

.content-section {
  margin-bottom: 40px;
  background: rgba(10, 30, 28, 0.85);
  padding: 30px;
  border-radius: 8px;
  border: 1px solid rgba(229, 168, 35, 0.2);
  text-align: center;
}

.content-section h2 {
  color: #e5a823;
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.content-section > p {
  line-height: 1.6;
  color: #d1d1d1;
  margin-bottom: 30px;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  text-align: left;
}

.contact-card {
  display: flex;
  align-items: center;
  background: #061312;
  padding: 20px;
  border-radius: 6px;
  border: 1px solid #143834;
  border-left: 4px solid #e5a823;
}

.contact-icon {
  font-size: 2rem;
  margin-right: 20px;
}

.contact-text h3 {
  color: #e5a823;
  font-size: 1rem;
  margin-bottom: 5px;
}

.contact-text p {
  margin: 0;
  color: #e2e2e2;
  font-size: 0.95rem;
}
</style>