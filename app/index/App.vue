<template>
  <div>
    <!-- 主体切换 -->
    <!--<v-header :items="items"></v-header>-->
    <!--<v-main></v-main>-->
    <ul class="tab">
      <li class="tab-item">
        <router-link to="/Favlist">
          服务中
        </router-link>
      </li>
      <li class="tab-item">
        <router-link to="/ratings">
          已下架
        </router-link>
      </li>
      <li class="tab-item">
        <router-link to="/shop">
          审核中
        </router-link>
      </li>
    </ul>

    <div>
      <router-view class="route"></router-view>
    </div>

  </div>
</template>
<script type="text/ecmascript-6">
  import header from '../components/header/header.vue';
  import main from '../components/header/main.vue'
  export default{
      data(){
        return{
          items:[
            {name:"美味食品1"},
            {name:"美味食品2"},
            {name:"美味食品3"},
            {name:"美味食品4"}
          ]
        }
     },
      components:{
        'v-header': header,
        'v-main':main
      }
  }
</script>
<style>
  *{
    margin: 0;
    padding: 0;
  }
  .tab{
    flex:1;
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-bottom: 1px solid #D9D9D9;;
    color:#556481;
  }
  .tab-item{
    flex:1;
    text-align: center;
    list-style: none;
  }
  .tab-item a{
    display: block;
    text-decoration: none;
  }
  .tab .tab-item .active {
    color: #436DE3;
  }
</style>

