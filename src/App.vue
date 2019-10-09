<template>
  <div id="app">
    <el-container class="page-container">
      <el-aside width="200px">
        <div class="hc-aside">
          <el-row class="hc-logo">
            <el-image :src="logoUrl">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </el-row>
          <el-menu router>
            <el-menu-item v-for="(item, index) in menus" :index="item.url" :key="index" :router="item.url">
              <i class="el-icon-menu"></i>
              <span slot="title">{{item.title}}</span>
            </el-menu-item>
          </el-menu>
        </div>
      </el-aside>
      <el-main>
        <el-row class="head-search" type="flex" align="middle" justify="space-between">
          <el-col :sm="{span: 9}" :md="{span: 6}">官方网站</el-col>
          <el-col :sm="{span: 16}" :md="{span: 12}">
            <el-input size="small"
              placeholder="请输入内容"
              prefix-icon="el-icon-search"
              v-model="search">
            </el-input>
          </el-col>
          <el-col class="is-right">
            <el-link href="https://element.eleme.io" target="_blank">个人中心</el-link>
            <el-button type="info" size="small" round>注册</el-button>
            <el-button type="info" size="small" round>登录</el-button>
          </el-col>
        </el-row>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import initData from './assets/js/initData'

export default {
  name: 'app',
  data () {
    return {
      logoUrl: require('./assets/img/login-logo.png'),
      search: '',
      menus: initData.menuList
    }
  },
  computed: {
    loginUser () {
      return this.$store.state.user
    }
  },
  beforeCreate () {
  },
  created () {
  },
  methods: {
    handleCommand (command) {
      if (command) {
        this.$router.push({
          name: command
        })
      } else {
        this.$http.get('/logout')
          .then(res => {
            localStorage.removeItem('user')
            localStorage.removeItem('menus')
            this.$router.push({
              name: 'login'
            })
          })
      }
    }
  }
}
</script>
<style lang="stylus">
  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    color #2c3e50

  #nav
    padding 30px

    a
      font-weight bold
      color #2c3e50

      &.router-link-exact-active
        color #42b983
</style>
