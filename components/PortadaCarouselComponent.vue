<template>
  <div class="portada-carousel">
    <div class="portada-carousel__1">
      <div class="portada-carousel__item">
        <h2>Real Madrid F.C.</h2>
        <figure class="portada-selector__container" @click="portadaSelector($event)">
          <img src="/images/equipo1.jpg" alt="portada 1" />
        </figure>
      </div>
    </div>

    <div class="portada-carousel__2">
      <h2>Atlético de Madrid</h2>
      <figure class="portada-selector__container" @click="portadaSelector($event)">
        <img src="/images/equipo2.jpg" alt="portada 1" />
      </figure>
    </div>
  </div>
</template>

<script setup>


const appStore = useAppStore();
const portadaSelector = (e) => {
  appStore.setBackground(e.target.src || "");
};
</script>

<style lang="scss" scoped>
.portada-selector__container {
  width: 200px;
  height: 125px;
  overflow: clip;
  border-radius: 0.125rem;

  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }

  &:hover {
    cursor: pointer;
    border: 2px solid orange;
  }
}
</style>
