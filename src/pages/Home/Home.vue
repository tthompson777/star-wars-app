<template>
  <div class="container">
    <section class="persons">
      <template>
        <div
          class="
            d-flex
            justify-content-center
            py-3
            px-2
            rounded-lg
            text-white
            fixed-top
            persons-header
          "
        >
          <div>
            <img class="persons-logo" src="../../assets/img/logo.png" alt="persons" />
          </div>
        </div>

        <div class="persons-grid">
          <article
            class="img-background"
            v-for="person in listPersonsLoaded"
            :key="person.id"
            v-bind:style="{ 'background-image': 'url(' + person.image + ')' }"
          >
            <div class="text">
              <div class="text-inner">
                <div style="text-align: left">
                  <h3>{{ person.name }}</h3>
                  <span>Mora em: {{ person.homeworld }}</span
                  ><br />
                  <span>Espécie: {{ person.species }}</span
                  ><br />
                  <span>Altura: {{ person.height }}</span
                  ><br />
                  <span>Peso: {{ person.mass }} Kg</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </template>
    </section>
    <div class="button__loadmore-container">
      <button class="button__loadmore" @click="loadMore">Carregar mais</button>
      <img class="baby__yoda" src="../../assets/img/baby_yoda.png" alt="baby">
    </div>
  </div>
</template>

<script src="./scripts.js" />

<style src="./styles.css" />
