<script setup>
import { ref } from 'vue'

const activeTab = ref('news') // 'news' or 'events'

const newsArticles = ref([
  {
    id: 1,
    title: 'Community Engagement MOA Signing Ceremony',
    snippet: 'Memorandum of Agreement signing between Central Philippine University (CPU) College of Computer Studies and community partners.',
    date: 'December 8, 2021',
    author: 'Lennon Pajar',
    category: 'Community'
  },
  {
    id: 2,
    title: 'Congratulations to our New Librarians!',
    snippet: 'Central Philippine University celebrates a stellar 60% passing percentage in the Librarian Licensure Examination.',
    date: 'November 23, 2021',
    author: 'Lennon Pajar',
    category: 'Achievements'
  },
  {
    id: 3,
    title: 'Kation Technologies Hires CCS Graduates',
    snippet: 'Kation Technologies Inc., a Microsoft Gold Partner company, recruits top talent from CPU College of Computer Studies.',
    date: 'November 23, 2021',
    author: 'Lennon Pajar',
    category: 'Industry Partnerships'
  }
])

const upcomingEvents = ref([
  {
    id: 1,
    title: 'CCS General Assembly & Orientation',
    date: 'OCT 28, 2026',
    time: '8:00 AM - 12:00 PM',
    location: 'Rose Memorial Auditorium',
    description: 'Welcoming all CCS students for the departmental updates, organization introduction, and academic briefings.'
  },
  {
    id: 2,
    title: 'IT & Computing Research Symposium',
    date: 'NOV 12, 2026',
    time: '1:00 PM - 5:00 PM',
    location: 'CCS Educational Media Center',
    description: 'Presentation of capstone research and software innovation projects by senior BSCS, BSIT, BSDMIA, and BLIS students.'
  },
  {
    id: 3,
    title: 'College Outreach & Community Workshop',
    date: 'DEC 05, 2026',
    time: '9:00 AM - 3:00 PM',
    location: 'Partner Community Learning Center',
    description: 'Digital literacy and computer basics community extension program hosted by CCS faculty and student organizations.'
  }
])
</script>

<template>
  <div class="news-events-container">
    <header class="page-header">
      <h1>News & Event Calendar</h1>
      <p class="subtitle">Stay updated with the latest college announcements, activities, and schedules.</p>
    </header>

    <div class="tab-controls">
      <button 
        :class="['tab-btn', { active: activeTab === 'news' }]" 
        @click="activeTab = 'news'"
      >
        📰 News & Updates
      </button>
      <button 
        :class="['tab-btn', { active: activeTab === 'events' }]" 
        @click="activeTab = 'events'"
      >
        📅 Event Calendar
      </button>
    </div>

    <!-- TAB 1: News & Updates View -->
    <section v-if="activeTab === 'news'" class="tab-content">
      <div class="news-grid">
        <article v-for="article in newsArticles" :key="article.id" class="news-card">
          <div class="card-meta">
            <span class="category-badge">{{ article.category }}</span>
            <span class="date">{{ article.date }}</span>
          </div>
          <h2>{{ article.title }}</h2>
          <p>{{ article.snippet }}</p>
          <div class="card-footer">
            <span class="author">By {{ article.author }}</span>
          </div>
        </article>
      </div>
    </section>

    <!-- TAB 2: Event Calendar View -->
    <section v-if="activeTab === 'events'" class="tab-content">
      <div class="events-list">
        <div v-for="event in upcomingEvents" :key="event.id" class="event-card">
          <div class="event-date-box">
            <span>{{ event.date }}</span>
          </div>
          <div class="event-details">
            <h2>{{ event.title }}</h2>
            <div class="event-meta">
              <span>⏰ {{ event.time }}</span>
              <span>📍 {{ event.location }}</span>
            </div>
            <p>{{ event.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.news-events-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  color: #fff;
  font-family: Arial, sans-serif;
}

.page-header {
  text-align: center;
  margin-bottom: 30px;
  border-bottom: 2px solid #e5a823;
  padding-bottom: 20px;
}

.page-header h1 {
  color: #fff;
  font-size: 2.2rem;
  margin-bottom: 10px;
}

.subtitle {
  color: #e5a823;
  font-size: 1.1rem;
  font-weight: bold;
}

/* Tab Switcher Controls */
.tab-controls {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 35px;
}

.tab-btn {
  background: #061312;
  color: #d1d1d1;
  border: 1px solid #143834;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-btn:hover {
  border-color: #e5a823;
  color: #e5a823;
}

.tab-btn.active {
  background: #e5a823;
  color: #0a1e1c;
  border-color: #e5a823;
}

/* News Section Cards */
.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 20px;
}

.news-card {
  background: rgba(10, 30, 28, 0.85);
  padding: 22px;
  border-radius: 8px;
  border: 1px solid rgba(229, 168, 35, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.category-badge {
  background: rgba(229, 168, 35, 0.15);
  color: #e5a823;
  font-size: 0.8rem;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: bold;
}

.date {
  font-size: 0.85rem;
  color: #aaa;
}

.news-card h2 {
  color: #fff;
  font-size: 1.25rem;
  margin-bottom: 10px;
}

.news-card p {
  color: #ccc;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 20px;
}

.card-footer {
  border-top: 1px solid #143834;
  padding-top: 10px;
  font-size: 0.85rem;
  color: #e5a823;
}

/* Events Section List */
.events-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.event-card {
  display: flex;
  background: rgba(10, 30, 28, 0.85);
  border-radius: 8px;
  border: 1px solid rgba(229, 168, 35, 0.2);
  overflow: hidden;
}

.event-date-box {
  background: #061312;
  border-right: 3px solid #e5a823;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 140px;
  text-align: center;
}

.event-date-box span {
  color: #e5a823;
  font-weight: bold;
  font-size: 1.1rem;
}

.event-details {
  padding: 20px;
  flex-grow: 1;
}

.event-details h2 {
  color: #fff;
  font-size: 1.3rem;
  margin-bottom: 8px;
}

.event-meta {
  display: flex;
  gap: 20px;
  font-size: 0.88rem;
  color: #e5a823;
  margin-bottom: 10px;
}

.event-details p {
  color: #ccc;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 600px) {
  .event-card {
    flex-direction: column;
  }
  .event-date-box {
    border-right: none;
    border-bottom: 2px solid #e5a823;
    padding: 12px;
  }
}
</style>