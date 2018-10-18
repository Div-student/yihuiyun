<template>
<div>
  <el-row>
    <el-col :span="24">
      <el-menu>
        <el-submenu index="1">
            <template slot="title" >
              <span>门户</span>
            </template>
            <el-menu>
              <el-menu-item><router-link to='/coworkers'>友情链接</router-link></el-menu-item>
              <el-menu-item><router-link to='/mhgl'>门户管理</router-link></el-menu-item>
            </el-menu>
        </el-submenu>
        <el-submenu index="2">
            <template slot="title">
              <span>门户1</span>
            </template>
            <el-menu  v-for="(item, index) in Ajaxdata" :key="index">
              <el-menu-item><router-link to='/coworkers'>{{Ajaxdata[index]}}</router-link></el-menu-item>
            </el-menu>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
  <div>{{add}}</div>
</div>
</template>
<script>
import {Ajaxdata} from '@/components/menhu/model/ajaxdata'
import Addtotal from '@/components/menhu/model/add'
export default {
  name: 'Mhsidebar',
  data () {
    return {
      Ajaxdata,
      add: Addtotal(1, 2)
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    Addtotal1 () {
      this.add = Addtotal(1, 2)
    }
  }
}
</script>
