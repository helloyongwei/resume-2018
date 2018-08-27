var app = new Vue({
  el: '#app',
  data: {
    resume: {
      name: '姓名',
      gender: '男',
      birthday: '1990-10-02',
      jobTitle: '前端工程师',
      phone: '12345678901',
      email: 'example@example.com'
    },

  },
  methods: {
    onEdit(key, value) {
      this.resume[key] = value
    },
  }
})