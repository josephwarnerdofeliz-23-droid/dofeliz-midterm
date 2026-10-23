<script setup>
import { ref } from 'vue'

const coreAreas = ref([
  'Architecture and Organization',
  'Discrete Structures',
  'Human Computer Interaction',
  'Information Assurance and Security',
  'Networks and Communications',
  'Operating Systems',
  'Programming Languages (Design and Implementation)',
  'Software Development Fundamentals',
  'Software Engineering',
  'Social Issues and Professional Practice'
])

const graduateOutcomes = ref([
  {
    code: 'CS01',
    desc: 'Apply knowledge of computing fundamentals, specialization, mathematics, and science to conceptualize computing models from defined problems.'
  },
  {
    code: 'CS02',
    desc: 'Identify, analyze, formulate, and solve complex computing problems using fundamental principles of mathematics and computing sciences.'
  },
  {
    code: 'CS03',
    desc: 'Apply mathematical foundations, algorithmic principles, and computer science theory in modeling and designing computer-based systems.'
  },
  {
    code: 'CS04',
    desc: 'Demonstrate knowledge and understanding of information security issues in relation to system design, development, and use.'
  },
  {
    code: 'CS05',
    desc: 'Design and evaluate solutions for complex computing problems considering public health, safety, cultural, societal, and environmental factors.'
  },
  {
    code: 'CS06',
    desc: 'Create, select, adapt, and apply appropriate techniques, resources, and modern computing tools to complex activities.'
  },
  {
    code: 'CS07',
    desc: 'Function effectively as an individual and as a member or leader in diverse teams and multidisciplinary settings.'
  },
  {
    code: 'CS08',
    desc: 'Communicate effectively regarding complex computing activities through writing reports, documentation, and making presentations.'
  },
  {
    code: 'CS09',
    desc: 'Recognize legal, social, ethical, and professional issues involved in computer technology utilization and adopt appropriate professional practices.'
  },
  {
    code: 'CS10',
    desc: 'Recognize the need for, and engage in, independent learning for continual professional development.'
  }
])
</script>

<template>
  <div class="cs-container">
    <header class="cs-header">
      <h1>Bachelor of Science in Computer Science (BSCS)</h1>
      <p class="subtitle">Studying computing in depth—focusing on software, hardware, and algorithmic foundations.</p>
    </header>

    <section class="content-section">
      <h2>Program Overview</h2>
      <p>
        The Computer Science (CS) Program is designed for students who want to study computing in depth, focusing on both software and hardware. In accordance with the PSG, the BSCS program includes the study of computing concepts and theories, algorithmic foundations, and new developments in computing. It prepares students to design and create algorithmically complex software and develop new and effective algorithms for solving real-world computing problems.
      </p>
    </section>

    <section class="content-section">
      <h2>Core Knowledge Areas</h2>
      <p>The curriculum covers essential knowledge areas recommended by international computing curricula standards:</p>
      <ul class="grid-list">
        <li v-for="(area, index) in coreAreas" :key="index" class="grid-item">
          {{ area }}
        </li>
      </ul>
    </section>

    <section class="content-section">
      <h2>Graduate Outcomes</h2>
      <p>Graduates of the BSCS program are equipped with the following competencies:</p>
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
.cs-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  color: #fff;
  font-family: Arial, sans-serif;
}

.cs-header {
  text-align: center;
  margin-bottom: 40px;
  border-bottom: 2px solid #e5a823;
  padding-bottom: 20px;
}

.cs-header h1 {
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
  padding: 25px;
  border-radius: 8px;
  border: 1px solid rgba(229, 168, 35, 0.2);
}

.content-section h2 {
  color: #e5a823;
  font-size: 1.5rem;
  margin-bottom: 15px;
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
  min-width: 45px;
  text-align: center;
}

.outcome-card p {
  margin: 0;
  font-size: 0.95krem;
  color: #ccc;
}
</style>