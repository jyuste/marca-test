<template>
  <aside class="category-selector">
    <div
      v-for="tab in tabs"
      class="category-selector__item"
      @click="changeTab(tab.order)"
    >
      <Icon :name="tab.icon" color="white" size="2rem" /> {{ tab.text }}
    </div>
  </aside>
</template>

<script setup>
const appStore = useAppStore();

const changeTab = (tab) => {
  appStore.activeTab = tab;
};
const tabs = appStore.tabs;
</script>

<style lang="scss" scoped></style>
