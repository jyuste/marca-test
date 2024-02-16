<template>
  <div class="portada__container">
    <div class="image-background">
      <img :src="config.background" alt="background" />
    </div>
    <figure
      v-for="(sticker, index) in config.stickers"
      :class="`sticker sticker__${index + 1}`"
    >
      <img :src="`/images/${sticker.thumbnail}`" :alt="sticker.name" />
    </figure>

    <div class="escudo escudo__1">
      <img src="/images/dhcf.svg" alt="Dos Hermanas Club de Futbol" />
      <h3 class="resultado" :class="config.results.class">{{ config.results.rm }}</h3>
    </div>

    <div class="escudo escudo__2">
      <img src="/images/vcf.svg" alt="Dos Hermanas Club de Futbol" />
      <h3 class="resultado" :class="config.results.class">{{ config.results.am }}</h3>
    </div>

    <header class="title">
      <img src="/images/logo-marca.svg" alt="portada 1" />
      <h1 class="titular" :class="[config.title.class, config.title.font]">
        {{ config.title.text }}
      </h1>
      <h2 class="subtitulo" :class="[config.subtitle.class, config.subtitle.font]">
        {{ config.subtitle.text }}
      </h2>
    </header>

    <!-- <footer class="footer">Footer</footer> -->
  </div>
</template>

<script setup>
defineProps({
  config: Object,
});
</script>

<style lang="scss" scoped>
.portada {
  &__container {
    overflow: clip;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 90vh;
    border-radius: 0.125rem;
    aspect-ratio: 3/4;
    outline: 10px solid #f1f1f1;
    box-shadow: 0 0 10px 20px #f1f1f1;
    color: #000;
    text-transform: uppercase;

    .image-background {
      max-width: 700px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        display: block;
        max-width: initial;
        height: 90vh;
      }
    }

    .title {
      position: absolute;
      top: 1rem;
      max-width: 80%;
      line-height: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        height: 5.75rem;
        width: auto;
      }

      h1.titular {
        margin-top: 2.25rem;
        margin-bottom: 1rem;
        font-size: 5rem;
        line-height: 0.9;
        hyphens: auto;
        word-wrap: break-word;
        max-width: 100%;
      }
    }

    .footer {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 1rem;
      text-align: center;
    }
  }
}

.sticker {
  position: absolute;
  &__1 {
    bottom: 25%;
    left: 5%;
    transform: rotate(15deg);
    img {
      width: 125px;
      height: 125px;
    }
  }
  &__2 {
    bottom: 50%;
    right: 5%;
    transform: rotate(-15deg);
    img {
      width: 150px;
      height: 150px;
    }
  }
  &__3 {
    bottom: 10%;
    right: 5%;
    transform: rotate(-15deg);
    img {
      width: 150px;
      height: 150px;
    }
  }
}
</style>
