<template>
  <div class="home">
    <div class="home-tabs">
      <span @click="scroll('public')">
        <i class="iconfont icon-free"></i>编辑
      </span>
      <span @click="scroll('hotsale')">
         <i class="iconfont icon-hot"></i>编辑
      </span>
      <span @click="scroll('news')">
         <i class="iconfont icon-zixun"></i>编辑
      </span>
    </div>
    <div>
      <div id="public" class="tab">tab1</div>
      <div id="hotsale" class="tab">tab2</div>
      <div id="news" class="tab">tab3</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {},
  data () {
    return {
      currTab: 'public',
      scrollH: 0
    }
  },
  methods: {
    scroll (tabId) {
      this.currTab = tabId
      setTimeout(() => {
        window.scrollBy(0, document.getElementById(tabId).offsetTop - 15)
      }, 300)
    }
  }
}
</script>

<style scoped>
  .tab{
    height: 600px;
  }
</style>
