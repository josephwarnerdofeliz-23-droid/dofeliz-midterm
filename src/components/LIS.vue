<script setup>
import { ref } from 'vue'

const coreCompetencies = ref([
  'Development and Management of Information Resources (Print, Non-print, Electronic, and Digital)',
  'Information Organization, Evaluation, and Dissemination',
  'Library Automation Systems and Hardware/Software Peripherals',
  'Online Collaboration Tools, Internet, and Web Technologies',
  'Information Technology Solutions Development (Websites, Automation Systems)',
  'Research Projects for Libraries and Organizations',
  'Information Policy and Ethical Issues (Copyright, Plagiarism, Cybercrimes)'
])

const graduateOutcomes = ref([
  { code: 'LIS01', desc: 'Select, evaluate, organize and disseminate print, multimedia, electronic and digital information resources.' },
  { code: 'LIS02', desc: 'Effectively communicate orally and in writing, at the same time, use a variety of communication methods in a manner that best enables the message to be understood.' },
  { code: 'LIS03', desc: 'Demonstrate logical and systematic approaches to the accomplishment of tasks.' },
  { code: 'LIS04', desc: 'Formulate objectives, policies and processes as well as design and manage resources in anticipation of future educational or organizational changes.' },
  { code: 'LIS05', desc: 'Recognize, analyze and constructively solve problems, provide appropriate direction and assistance, and overcome barriers when necessary.' },
  { code: 'LIS06', desc: 'Identify users\' needs and wants through reference interviews, customer surveys, complaint logs and other means in order to evaluate the effectiveness of current services and improve these and other practices.' },
  { code: 'LIS07', desc: 'Work well in groups and seek ways to build team efforts to solve problems and achieve common goals.' },
  { code: 'LIS08', desc: 'Understand library\'s automation system and the use of computer hardware, software and peripherals, including online collaboration tools (the internet, the worldwide web, and social networking sites).' },
  { code: 'LIS09', desc: 'Develop information technology solutions (e.g., library automation system, Website, e-mail system, etc.).' },
  { code: 'LIS10', desc: 'Conduct significant research projects that will benefit the library and the organization.' },
  { code: 'LIS11', desc: 'Evaluate and debate information policy (e.g., copyright law, plagiarism, cybercrimes, etc.) and ethical issues applicable in local, national or global context.' },
  { code: 'LIS12', desc: 'Participate in continuing education activities organized by library associations and other entities.' }
])
</script>

<template>
  <div class="blis-container">
    <header class="blis-header">
      <h1>Bachelor of Library and Information Science (BLIS)</h1>
      <p class="subtitle">Equipping professionals to manage information resources in print, electronic, and digital formats[cite: 1].</p>
    </header>

    <section class="content-section">
      <h2>Program Overview</h2>
      <p>
        The Degree of Bachelor of Library and Information Science (BLIS) is a four-year program that prepares students in the development, deployment, and management of information resources in print, non-print, electronic, and digital formats[cite: 1]. 
      </p>
      <p>
        The curriculum is designed to equip professionals with composite knowledge, skills, attitudes, and tools to respond to society's changing information needs, institutionalizing quality information services and training students to apply information technology to basic library operations and functions[cite: 1].
      </p>
    </section>

    <section class="content-section">
      <h2>Core Competencies & Focus Areas</h2>
      <p>The curriculum emphasizes modern library and information management practices:</p>
      <ul class="grid-list">
        <li v-for="(item, index) in coreCompetencies" :key="index" class="grid-item">
          {{ item }}
        </li>
      </ul>
    </section>

    <section class="content-section">
      <h2>Graduate Outcomes</h2>
      <p>BLIS graduates are equipped with the following professional competencies:</p>
      <div class="outcomes-container">
        <div v-for="outcome in graduateOutcomes" :key="outcome.code" class="outcome-card">
          <span class="outcome-code">{{ outcome.code }}</span>
          <p>{{ outcome.desc }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.blis-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  color: #fff;
  font-family: Arial, sans-serif;
}

.blis-header {
  text-align: center;
  margin-bottom: 40px;
  border-bottom: 2px solid #e5a823;
  padding-bottom: 20px;
}

.blis-header h1 {
  color: #fff;
  font-size: 2.2rem;
  margin-bottom: 10px;
}

.subtitle {
  color: #e5a823;
  font-size: 1.1rem;
  font-weight: bold;
}

.content-section p {
  line-height: 1.6;
  color: #d1d1d1;
  margin-bottom: 15px;
}

.grid-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 15px;
  list-style: none;
  padding: 0;
}

.grid-item {
  background: #061312;
  padding: 12px 18px;
  border-left: 4px solid #e5a823;
  border-radius: 4px;
  color: #e2e2e2;
  font-size: 0.95rem;
}

.outcomes-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.outcome-card {
  display: flex;
  align-items: flex-start;
  background: #061312;
  padding: 15px;
  border-radius: 6px;
  border: 1px solid #143834;
}

.outcome-code {
  background: #e5a823;
  color: #0a1e1c;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 4px;
  margin-right: 15px;
  font-size: 0.85rem;
  min-width: 65px;
  text-align: center;
}

.outcome-card p {
  margin: 0;
  font-size: 0.95rem;
  color: #ccc;
}
</style>