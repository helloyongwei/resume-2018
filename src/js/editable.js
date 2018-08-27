Vue.component('editable-span', {
  props: ['name'],
  template: `
    <span class="editable-span">
          <span v-show="!edit.editing">{{name}}</span>
          <input type="text" v-show="edit.editing" v-bind:value="name" @input="triggerEdit">
          <button @click="trigger">{{edit.value}}</button>
        </span>
    `,
  data() {
    return {
      edit: {
        editing: false,
        value: '编辑'
      }

    }
  },
  methods: {
    triggerEdit(e) {
      this.$emit('edit', e.target.value)
    },
    trigger(){
      this.edit.editing = !this.edit.editing
      if (this.edit.value === '编辑') {
        this.edit.value = '保存'
      } else {
        this.edit.value = '编辑'
      }
    }
  }
})

