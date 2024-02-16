<template>
  <div class="score">
    <h2>Resultado</h2>
    <div class="score__unit">
      <h3>Rayo Villasequilla</h3>
      <input type="text" v-model="data.rm" />
    </div>
    <div class="score__unit">
      <h3>Atlético Cantalapiedra</h3>
      <input type="text" v-model="data.am" />
    </div>
    <div class="resultado__estilo">
      <select v-model="data.class">
        <option value="style-1">Estilo 1</option>
        <option value="style-2">Estilo 2</option>
        <option value="style-3">Estilo 3</option>
      </select>
    </div>
  </div>
</template>

<script setup>
const appStore = useAppStore();
const data = computed(() => {
  return appStore.results;
});
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
