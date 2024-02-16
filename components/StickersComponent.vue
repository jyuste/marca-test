<template>
  <div class="score">
    <h2>Stickers</h2>

    <div class="stickers">
      <figure
        class="sticker__thumbnail"
        v-for="sticker in stickers"
        @click="addSticker(sticker)"
      >
        <img :src="`/images/${sticker.thumbnail}`" :alt="sticker.name" />
      </figure>
    </div>
  </div>
</template>

<script setup>
const appStore = useAppStore();

const stickers = [
  {
    id: 1,
    name: "1",
    thumbnail: "dragonhead.svg",
  },
  {
    id: 2,
    name: "2",
    thumbnail: "lucky-cards.svg",
  },
  {
    id: 3,
    name: "3",
    thumbnail: "party-hats.svg",
  },
  {
    id: 4,
    name: "4",
    thumbnail: "new-years.svg",
  },
  {
    id: 5,
    name: "5",
    thumbnail: "party-poppers.svg",
  },
  {
    id: 6,
    name: "6",
    thumbnail: "octopus-mascot.svg",
  },
];

const addSticker = (sticker) => {
  appStore.addSticker(sticker);
};
</script>

<style lang="scss" scoped>
.stickers {
  max-width: 250px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.sticker__thumbnail {
  width: 100px;
  height: 100px;
  margin: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 2px 5px #f1f1f1;
  }
}
</style>
