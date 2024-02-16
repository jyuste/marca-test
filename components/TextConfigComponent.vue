<template>
  <div>
    <h2>{{ getConfigData.label }}</h2>
    <div>
      <input
        type="text"
        :placeholder="getConfigData.placeholder"
        v-model="data.text"
        @keyup="setStore()"
        maxlength="20"
      />
    </div>
    <div>
      <select v-model="data.class" @change="setStore()">
        <option value="style-1">Estilo 1</option>
        <option value="style-2">Estilo 2</option>
        <option value="style-3">Estilo 3</option>
      </select>
    </div>

    <div>
      <select v-model="data.font" @change="setStore()">
        <option value="roboto">Roboto</option>
        <option value="inter">Inter</option>
        <option value="crimson">Crimson</option>
        <option value="raleway">Raleway</option>
        <option value="lato">Lato</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "~/store/app";
const appStore = useAppStore();

const props = defineProps({
  element: "string",
});

const config = {
  title: {
    label: "Título",
    placeholder: "Escribe el título",
  },
  subtitle: {
    label: "Subtítulo",
    placeholder: "Escribe el subtítulo",
  },
};

const getConfigData = computed(() => {
  return config[props.element];
});

const data = computed(() => {
  return appStore[props.element];
});

const setStore = () => {
  appStore[props.element] = data;
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem;
  text-transform: uppercase;
  select {
    padding: 0.5rem;
  }
  input {
    padding: 0.5rem;
  }
}
</style>
