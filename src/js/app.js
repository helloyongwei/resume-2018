let app = new Vue({
  el: '#app',
  data: {
    loginVisible: false,
    signUpVisible: false,
    resume: {
      name: '姓名',
      gender: '男',
      birthday: '1990-10-02',
      jobTitle: '前端工程师',
      phone: '12345678901',
      email: 'example@example.com'
    },
    login: {
      email: '',
      password: ''
    },
    signUp: {
      email: '',
      password: ''
    },
  },
  methods: {
    onEdit(key, value){
      this.resume[key] = value
    },
    onLogin(e){
      AV.User.logIn(this.login.email, this.login.password).then(function (user) {
        console.log(user)
      }, function (error) {
        if (error.code === 211 && error.code === 210) {
          alert('邮箱和密码不匹配')
        }
      })
    },
    onLogout(e){
      AV.User.logOut();
      alert('注销成功')
      window.location.reload()
    },
    onSignUp(e){
      const user = new AV.User()
      user.setUsername(this.signUp.email)
      user.setPassword(this.signUp.password)
      user.setEmail(this.signUp.email)
      user.signUp().then(function (user) {
        console.log(user)
      }, function (error) {
      })
    },
    onClickSave(){
      let currentUser = AV.User.current()
      if (!currentUser) {
        this.loginVisible = true
      } else {
        this.saveResume()
      }
    },
    saveResume(){
      let {id} = AV.User.current()
      let user = AV.Object.createWithoutData('User', id)
      user.set('resume', this.resume)
      user.save()
    },

  }
})

