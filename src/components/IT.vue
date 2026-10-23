<script setup>
import { ref } from 'vue'

const knowledgeAreas = ref([
  'Information Technology Fundamentals',
  'Human Computer Interaction',
  'Information Assurance and Security',
  'Information Management',
  'Integrative Programming and Technologies',
  'Networking',
  'Platform Technologies',
  'Systems Administration and Maintenance',
  'Systems Integration and Architecture',
  'Social and Professional Issues',
  'Web Systems and Technologies'
])

const graduateOutcomes = ref([
  { code: 'IT01', desc: 'Apply knowledge of computing, science, and mathematics appropriate to the discipline.' },
  { code: 'IT02', desc: 'Understand best practices and standards and their applications.' },
  { code: 'IT03', desc: 'Analyze complex problems, and identify and define the computing requirements appropriate to its solution.' },
  { code: 'IT04', desc: 'Identify and analyze user needs and take them into account in the selection, creation, evaluation and administration of computer-based systems.' },
  { code: 'IT05', desc: 'Design, implement, and evaluate computer-based systems, processes, components, or programs to meet desired needs and requirements under various constraints.' },
  { code: 'IT06', desc: 'Integrate IT-based solutions into the user environment effectively.' },
  { code: 'IT07', desc: 'Apply knowledge through the use of current techniques, skills, tools and practices necessary for the IT profession.' },
  { code: 'IT08', desc: 'Function effectively as a member or leader of a development team recognizing the different roles within a team to accomplish a common goal.' },
  { code: 'IT09', desc: 'Assist in the creation of an effective IT project plan.' },
  { code: 'IT10', desc: 'Communicate effectively with the computing community and with society at large about complex computing activities through logical writing, presentations, and clear instructions.' },
  { code: 'IT11', desc: 'Analyze the local and global impact of computing information technology on individuals, organizations, and society.' },
  { code: 'IT12', desc: 'Understand professional, ethical, legal, security and social issues and responsibilities in the utilization of information technology.' },
  { code: 'IT13', desc: 'Recognize the need for and engage in planning self-learning and improving performance as a foundation for continuing professional development.' }
])
</script>

<template>
  <div class="it-container">
    <header class="it-header">
      <h1>Bachelor of Science in Information Technology (BSIT)</h1>
      <p class="subtitle">Bridging the gap between computer science and management information systems.</p>
    </header>

    <section class="content-section">
      <h2>Program Overview</h2>
      <p>
        The Information Technology (IT) program is designed to bridge the gap between computer science and management information systems. It focuses on the utilization of both hardware and software technologies involving planning, installing, customizing, operating, managing, administering, and maintaining information technology infrastructure to provide computing solutions for organizations.
      </p>
      <p>
        The program prepares students to handle information security, network architecture, database administration, systems administration, computer support, and user needs involving the selection, development, application, integration, and management of computing technologies.
      </p>
    </section>

    <section class="content-section">
      <h2>Core Knowledge Areas</h2>
      <p>In accordance with ACM IT Curricula guidelines, the curriculum covers essential areas:</p>
      <ul class="grid-list">
        <li v-for="(area, index) in knowledgeAreas" :key="index" class="grid-item">
          {{ area }}
        </li>
      </ul>
    </section>

    <section class="content-section">
      <h2>Graduate Outcomes</h2>
      <p>BSIT graduates are equipped with the following competencies:</p>
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
.it-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  color: #fff;
  font-family: Arial, sans-serif;
}

.it-header {
  text-align: center;
  margin-bottom: 40px;
  border-bottom: 2px solid #e5a823;
  padding-bottom: 20px;
}

.it-header h1 {
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
  min-width: 50px;
  text-align: center;
}

.outcome-card p {
  margin: 0;
  font-size: 0.95rem;
  color: #ccc;
}
</style>