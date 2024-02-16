<template>
  <main class="main-container">
    <SelectorComponent />

    <aside class="category-content">
      <PortadaCarouselComponent v-if="activeTab == 1" />
      <TextConfigComponent v-else-if="activeTab == 2" element="title" />
      <TextConfigComponent v-else-if="activeTab == 3" element="subtitle" />
      <StickersComponent v-else-if="activeTab == 4" />
      <ScoreComponent v-else-if="activeTab == 5" />

      <button class="btn btn--primary" @click="tabDown" v-if="activeTab > 1">
        Volver
      </button>
      <button class="btn btn--primary" @click="tabUp" v-if="activeTab < 5">
        Continuar
      </button>
      <button class="btn btn--final" v-if="activeTab == 5" @click="print">
        Publicar
      </button>
    </aside>

    <div class="portada" ref="printThis">
      <PortadaComponent :config="configuration" />
    </div>

    <!-- <img :src="url" /> -->
  </main>
</template>

<script setup>
import domtoimage from "dom-to-image";
// import html2canvas from "html2canvas";

const appStore = useAppStore();
const configuration = appStore;

let activeTab = computed(() => appStore.activeTab);

let url = ref("");

const tabUp = () => {
  appStore.activeTab++;
};
const tabDown = () => {
  appStore.activeTab--;
};

const print = () => {
  const el = document.querySelector(".portada");
  domtoimage
    .toPng(el)
    .then((dataUrl) => {
      console.log(dataUrl);
      url.value = dataUrl;
    })
    .catch((error) => {
      console.error("ERROR SAVING FESTIVAL IMAGE", error);
    });
};
</script>
