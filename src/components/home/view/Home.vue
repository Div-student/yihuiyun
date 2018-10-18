<template>
  <div>
    <el-container>
      <!-- 头部 -->
      <el-header>
         <el-row>
          <el-col :span="2"><div class="grid-content bg-purple title1">亿达慧云</div></el-col>
          <el-col :span="10">
            <div class="grid-content bg-purple-light buttons">
              <el-button v-for="(item, index) in buttonarray" :key="index" :type="flag[index]" @click="clickbutton(index)"><router-link :to="routerarray[index]">{{item}}</router-link></el-button>
            </div>
          </el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px"> <router-view name="leftrouter"></router-view></el-aside>
        <el-container>
          <el-main><router-view name="rightrouter"></router-view></el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      buttonarray: ['门户', '招商', '物业', '运营', '财务', '商城', '报表'],
      flag: [],
      routerarray: ['/menhu', '/zhaoshang', '/home/menhu', 'home/menhu', 'home/menhu', 'home/menhu', 'home/menhu']
    }
  },
  mounted () {
    // 初始化按钮高亮数组
    debugger
    for (let i = 0; i < this.buttonarray.length; i++) {
      if (i === 0) {
        this.flag.push('primary')
      }
      this.flag.push('')
    }
  },
  methods: {
    clickbutton (index) {
      for (let i = 0; i < this.buttonarray.length; i++) {
        this.$set(this.flag, i, '')
      }
      this.$set(this.flag, index, 'primary')
    }
  }
}
</script>
<style lang='less' scoped>
    .buttons{
      &/deep/a{
        text-decoration: none;
      }
    }
   .el-row{
     background-color:#F8F8F8;
   }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .title1{
    text-align:center;
    color:#006699;
    font-size:18px;
  }
   .el-header, .el-footer {
    background-color:#F8F8F8;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
</style>
