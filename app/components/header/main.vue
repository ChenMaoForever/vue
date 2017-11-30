<template>
  <div style="height: 70px;padding-top: 20px;border-bottom: 1px solid #d9d9d9">
      <ul style="display: flex;">
        <li v-for="(item,index) in banners" :key="index" class="mainLiStyle">
          <img :src="item.imgUrl"  class="imgStyle"/>
          <div>{{item.imgText}}</div>
        </li>
      </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  import demand from '../../img/demand.png'
  import introduction from '../../img/introduction.android.png'
  import service from '../../img/service.android.png'
  import orders from '../../img/orders.android.png'
  import certification from '../../img/certification.android.png'
  export default{
    data(){
      return {
        banners: [
          {imgUrl: certification,imgText:"认证"},
          {imgUrl: orders,imgText:"订单"},
          {imgUrl: service,imgText:"服务"},
          {imgUrl: demand,imgText:"需求"},
          {imgUrl: introduction,imgText:"介绍"}
        ]
      }
    }
  }
</script>
<style>
.mainLiStyle{
  flex: 1;
  list-style: none;
  text-align: center;
}
  .imgStyle{
    width: 30px;
    height: 30px;
  }
</style>
