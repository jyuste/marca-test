export const useAppStore = defineStore('appStore', {
  state: () => ({
    tabs: [
      { order: 1, icon: "vscode-icons:file-type-image", text: "Portada" },
      { order: 2, icon: "vscode-icons:file-type-edge2", text: "Titular" },
      { order: 3, icon: "vscode-icons:file-type-edge", text: "Subtitulo" },
      { order: 4, icon: "vscode-icons:file-type-kitchenci", text: "Stickers" },
      { order: 5, icon: "vscode-icons:file-type-eleventy2", text: "Resultado" }
    ],

    activeTab : 1,

    background: '/images/bg.jpg',

    title: {
      text: '',
      class: 'style-1',
      font: 'Roboto'
    },

    subtitle: {
      text: '',
      class: 'style-2',
      font: 'Roboto'
    },

    results: {
      rm: 0,
      am: 0,
      class: 'style-3',
    },

    stickers: []
  }),
getters: {
  getElement(item) {
    return this[item]
  }
},
  actions: {
    setBackground(background) {
      this.background = background
    },
    setOptions(item, options) {
      this[item] = options
    },
    addSticker (sticker) {
      if (this.stickers.length < 3) {
        this.stickers.push(sticker)
      }else {
        this.stickers.shift()
        this.stickers.push(sticker)
      }
    }
  }
})