<template>
  <div>
      <input type="text" class="username" placeholder="请输入手机号" />
      <input type="password"  class="password" placeholder="请输入密码（6-20位数字与字母的组合）" />
      <router-link :to="isTrue?'/Favlist':'/login'">
          <button @click='login'>登录</button>
      </router-link>
  </div>
</template>
<script type="text/ecmascript-6">
import $ from 'jquery'
    export default{
        data(){
            return{
                username:'',
                password:'',
                isTrue:false
            }
        },
        methods:{
            login(){
                let data={
                  username:$('.username').val(),
                  password:$('.password').val()
                }
                console.log(data)
                this.$http.post('http://127.0.0.1:8081/login',JSON.stringify(data),{
                  headers: {
                      'Content-Type': 'application/json'
                  }
                }).then((m)=>{
                    console.log(m.data);
                    let data=m.data;
                    if(data.status){
                          this.isTrue=m.data.status;
                          this.$router.push('/manage')
                    }else{
                      alert(data.result)
                    }
                }).catch((err)=>{
                    console.log(err);
                })
            }
        }
    }
</script>
<style lang="stylus">
    @import 'login.styl';
</style>

