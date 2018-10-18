<template>
<div class="wrap">
  <h1>亿达慧云运营管理后台</h1>
  <div class="box">
  <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
     <el-form-item label="账号：" prop="name">
        <el-input type="text" v-model="ruleForm2.name" auto-complete="off"></el-input>
     </el-form-item>
      <el-form-item label="密码：" prop="pass">
        <el-input type="password"  v-model="ruleForm2.pass" auto-complete="off"></el-input>
      </el-form-item>
     <el-form-item label="验证码：" prop="yanzhengma" class="yanzheng">
        <el-input  type="text" auto-complete="off" v-model="ruleForm2.yanzhengma"></el-input>
     </el-form-item >
     <div class="wrapbox">
       <span class="yzm"><img src="../../../../static/yzm.png" alt=""></span> <span class="words">看不清，换一张</span>
     </div>
     <br><br><br>
     <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
     </el-form-item>
  </el-form>
  <Tools v-if="flag"></Tools>
  </div>
</div>
</template>
<script>
import Tools from '@/components/commoncomponents/tools'
export default {
  name: 'MyLogin',
  components: {
    Tools: Tools
  },
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass')
        }
        callback()
      }
    }
    return {
      ruleForm2: {
        name: '',
        pass: '',
        checkPass: '',
        yangzhengma: ''
      },
      rules2: {
        pass: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        yanzhengma: [
          { required: true, message: '请输入正确的验证码', trigger: 'blur' }
        ]
      },
      flag: false
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.ruleForm2.name === '1234' && this.ruleForm2.pass === '1234') {
            this.$router.push('/home')
            sessionStorage.setItem('token', '12fs21')
          } else {
            this.flag = true
            setTimeout(() => {
              this.flag = false
            }, 1500)
          }
        } else {
          console.log('error submit!!')
          sessionStorage.removeItem('token')
          return false
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .wrap{
    text-align:center;
    width:500px;
    height:420px;
    margin:100px auto;
     &/deep/h1{
      color:#006699;
      font-size:45px;
    }
  }
  .box{
    &/deep/div{
      width:300px;
    }
    &/deep/input:last-child{
      width:300px;
    }
    &/deep/button{
      width:300px;
      background-color:#428BCA;
      height:42px;
      font-weight:bold;
      font-size:18px;
      letter-spacing: 3px;
    }
    text-align:center;
    width:500px;
    height:420px;
    border:1px solid gray;
    box-shadow: 2px 2px 10px gray;
    padding-top: 60px;
  }
  .yanzheng /deep/ input {
    width:150px!important;
  }
  .yanzheng /deep/ div:first-child {
    text-align: left!important;
    width:150px!important;
  }
   .yanzheng /deep/ div:nth-child(2){
     text-align:left!important;
   }
  .yzm{
    position:absolute;
    left:100px;
  }
  .wrapbox{
    position:relative;
  }
  .words{
    display:inline-block;
    width:200px;
    position:absolute;
    top:14px;
    left:210px;
    color:#428BCA;
  }
</style>
