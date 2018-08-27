Vue.component('editable-skills', {
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

var app = new Vue({
  el: '#skills',
  data: {
    skills: {
      item1: 'HTML/CSS3',
      description1: '熟悉1熟悉1熟悉1熟悉1熟悉1熟悉1熟悉1熟悉1熟悉1熟悉1',
      item2: 'JavaScript',
      description2: '熟悉2熟悉2熟悉2熟悉2熟悉2熟悉2熟悉2熟悉2熟悉2熟悉2',
      item3: 'AJAX',
      description3: '熟悉3熟悉3熟悉3熟悉3熟悉3熟悉3熟悉3熟悉3熟悉3熟悉3',
      item4: 'React',
      description4: '熟悉4熟悉4熟悉4熟悉4熟悉4熟悉4熟悉4熟悉4熟悉4熟悉4',
      item5: 'Vue',
      description5: '熟悉5熟悉5熟悉5熟悉5熟悉5熟悉5熟悉5熟悉5熟悉5熟悉5',
      item6: 'Node.js',
      description6: '熟悉6熟悉6熟悉6熟悉6熟悉6熟悉6熟悉6熟悉6熟悉6熟悉6',

    }
  },
  methods: {
    onEditSkills(key, value) {
      this.skills[key] = value
    }
  }
})