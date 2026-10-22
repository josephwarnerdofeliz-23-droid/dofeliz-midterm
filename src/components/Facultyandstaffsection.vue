<script setup>
import quijano from '../assets/quijano.png'
import parreno from '../assets/parreno.png'
import cantel from '../assets/cantel.png'
import balontong from '../assets/balontong.png'
import pajar from '../assets/pajar.png'
import beldia from '../assets/beldia.jpg'
import peter from '../assets/peter.jpg'
import dignadice from '../assets/dignadice.jpg'
import rod from '../assets/rod.jpg'
import donie from '../assets/donie.jpg'
import montano from '../assets/montano.jpg'
import ojacastro from '../assets/ojacastro.jpg'
import sapul from '../assets/sapul.jpg'
import castano from '../assets/castano.jpg'
import taasan from '../assets/taasan.jpg'
import ador from '../assets/ador.jpg'
import rivera from '../assets/rivera.png'
</script>
<template>
  <section id="faculty">
    <h1>Faculty and Staff Members</h1>
    <h2>Dean</h2>
    <div class="admin-row">
      <div class="box admin-card">
        <img :src="quijano" alt="Ma. Christina A. Quijano" />
        <h3>College Administration</h3>
        <p>Ma. Christina A. Quijano — MSCS, Dean</p>
      </div>
    </div>

    <h2>Department Head and Coordinators</h2>
    <div class="staff-grid">
      <div class="box">
        <img :src="balontong" alt="Rea P. Balontong" />
        <h4>Department Head (IT & IS)</h4>
        <p>Rea P. Balontong</p>
      </div>
      <div class="box">
        <img :src="parreno" alt="Rea P. Parreño" />
        <h4>Program coordinator (BSCS, BSDMIA, and MSCS)</h4>
        <p>Marjee Rose B. Parreño, MSCS, MBA</p>
      </div>
      <div class="box">
        <img :src="cantel" alt="Ana Mae B. Cantel" />
        <h4>Program Coordinator (BLIS and MLIS)</h4>
        <p>Ana Mae B. Cantel, BLIS and MLIS</p>
      </div>
      <div class="box">
        <img :src="pajar" alt="Lennon D. Pajar" />
        <h4>Computer Laboratory Coordinator</h4>
        <p>Lennon D. Pajar</p>
      </div>
    </div>

    <h2>Faculty Members
    </h2>
    <div class="faculty-grid">
      <div class="box">
        <img :src="beldia" alt="Leo Paulo B. Beldia" />
        <h4>BSIT and BSIS Program</h4>
        <p>Leo Paulo B. Beldia</p>
      </div>
      <div class="box">
        <img :src="peter" alt="Pedro Peter Rhys B. Cambronero, MSCS" />
        <h4>BSCS Program</h4>
        <p>Pedro Peter Rhys B. Cambronero, MSCS</p>
      </div>
      <div class="box">
        <img :src="dignadice" alt="Lesley Joy L. Dignadice, MBA" />
        <h4>BSIT and BSIS Program</h4>
        <p>Lesley Joy L. Dignadice, MBA</p>
      </div>
      <div class="box">
        <img :src="donie" alt="Donie S. Jardeleza, MSCS" />
        <h4>BSIT and BSIS Program</h4>
        <p>Donie S. Jardeleza, MSCS</p>
      </div>
      <div class="box">
        <img :src="rod" alt="Rod Jayson C. Millares, MSCS" />
        <h4>BSIT and BSIS Program</h4>
        <p>Rod Jayson C. Millares, MSCS</p>
      </div>
      <div class="box">
        <img :src="montano" alt="Antonio M. Montaño, Jr." />
        <h4>BSIT and BSIS Program</h4>
        <p>Antonio M. Montaño, Jr.</p>
      </div>
      <div class="box">
        <img :src="ojacastro" alt="Rose Leah Joy A. Ojacastro, MSCS" />
        <h4>BSIT and BSIS Program</h4>
        <p>Rose Leah Joy A. Ojacastro, MSCS.</p>
      </div>
      <div class="box">
        <img :src="sapul" alt="Ma. Sheila C. Sapul, Ph. D." />
        <h4>BSCS Program</h4>
        <p>Ma. Sheila C. Sapul, Ph. D.</p>
      </div>
    </div>
    
    <h2>Staff Members</h2>
    <div class="staff-grid">
      <div class="box">
        <img :src="castano" alt="Chrislyn C. Castaño" />
        <h4>Secretary</h4>
        <p>Chrislyn C. Castaño</p>
      </div>
      <div class="box">
        <img :src="taasan" alt="A.M.P. Latter P. Taasan" />
        <h4>Computer Laboratory Technician</h4>
        <p>A.M.P. Latter P. Taasan</p>
      </div>
      <div class="box">
        <img :src="ador" alt="Chriselda Elaine Ador" />
        <h4>Guidance Counselor</h4>
        <p>Chriselda Elaine Ador</p>
      </div>
      <div class="box">
        <img :src="rivera" alt="Donna May Rivera" />
        <h4>Library Liaison Officer</h4>
        <p>Donna May Rivera</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: clamp(40px, 6vw, 72px) clamp(16px, 5vw, 48px);
  background: #0a1e1c;
  text-align: center;
}

h1 {
  color: #a3caca;
  margin-bottom: 20px;
}

h2 {
  color: #ffffff;
  margin-bottom: 30px;
  margin-top: 50px;
}

.admin-row {
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
}

.staff-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
  gap: 30px;
  width: min(100%, 1100px);
  margin: 0 auto;
}
.faculty-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
  gap: 30px;
  width: min(100%, 1100px);
  margin: 0 auto;
}

.faculty-grid {
  margin-top: 20px;
}

.box {
  background: #0f2b27;
  padding: 12px;
  width: 100%;
  max-width: 320px;
  justify-self: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.admin-card {
  max-width: 320px;
  width: 100%;
}

img {
  display: block;
  width: 100%;
  max-width: 200px;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  margin: 0 auto 10px;
}

h3 {
  color: #fff;
}

p {
  color: #e5a823;
}
</style>