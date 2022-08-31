<script setup lang="ts">
import navbar from '../components/navbar.vue'

</script>
<template>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">   
  <main>
    <navbar />
  </main>
<div class="main">
  <ul class="cards">
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"></div>
        <div class="card_content">
          <h2 class="card_title">Prestation</h2>
          <p class="card_text">Description</p><p class="card_note">4/5</p>
          <button class="btnexplore card_btn">Je suis interessé</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="https://picsum.photos/500/300/?image=5"></div>
        <div class="card_content">
          <h2 class="card_title">Prestation</h2>
                              <p class="card_text">Description</p><p class="card_note">4/5</p>
          <button class="btnexplore card_btn">Je suis interessé</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="https://picsum.photos/500/300/?image=11"></div>
        <div class="card_content">
          <h2 class="card_title">Prestation</h2>
                              <p class="card_text">Description</p><p class="card_note">4/5</p>
          <button class="btnexplore card_btn">Je suis interessé</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="https://picsum.photos/500/300/?image=14"></div>
        <div class="card_content">
          <h2 class="card_title">Prestation</h2>
                              <p class="card_text">Description</p><p class="card_note">4/5</p>
          <button class="btnexplore card_btn">Je suis interessé</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="https://picsum.photos/500/300/?image=17"></div>
        <div class="card_content">
          <h2 class="card_title">Prestation</h2>
                              <p class="card_text">Description</p><p class="card_note">4/5</p>
          <button class="btnexplore card_btn">Je suis interessé</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="https://picsum.photos/500/300/?image=2"></div>
        <div class="card_content">
          <h2 class="card_title">Prestation</h2>
                              <p class="card_text">Description</p><p class="card_note">4/5</p>
          <button class="btnexplore card_btn">Je suis interessé</button>
        </div>
      </div>
    </li>
  </ul>
</div>

</template>
<style>

/* Font */
@import url('https://fonts.googleapis.com/css?family=Quicksand:400,700');

/* Design */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  background-color: #ecf9ff;
}

body {
  color: #272727;
  font-family: 'Quicksand', serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0;
  padding: 1rem;
}

.main{
  max-width: 1200px;
  margin: 0 auto;
      top: 100px;
     position: inherit;
}

h1 {
    font-size: 24px;
    font-weight: 400;
    text-align: center;
}

img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
}

.btnexplore{
  color: #ffffff;
  padding: 0.8rem;
  font-size: 14px;
  text-transform: uppercase;
  border-radius: 4px;
  font-weight: 400;
  display: block;
  width: 100%;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
}

.btn:hover {
  background-color:purple;
}

.card {
    background-color: white;
    border-radius: 0.25rem;
    box-shadow: 0 20px 40px -14px rgb(0 0 0 / 25%);
    display: inline-table;
    flex-direction: column;
    overflow: hidden;
    width: 200%;

}

.cards_item {
    display: inline;

  padding: 1rem;
}

@media (min-width: 40rem) {
  .cards_item {
    width: 50%;
  }
}

@media (min-width: 56rem) {
  .cards_item {
    width: 33.3333%;
  }
}

.card {
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
      margin-bottom: 50px;
}

.card_content {
    padding: 1rem;
    background: linear-gradient(to bottom left, red 2%, #FFC39E 90%);

}

.card_title {
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0px;
      color: rgb(204, 29, 85);
}

#app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
    margin-bottom: 50px;
}
.card_text {
  color: #ffffff;
  font-size: 1.25rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;    
  font-weight: 400;
}
.made_by{
  font-weight: 400;
  font-size: 13px;
  margin-top: 35px;
  text-align: center;
}
.cards li {
            padding-bottom: 100px !important;
}
</style>