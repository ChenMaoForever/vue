<template>
      <div class="headerClass">
        <div class="backBtn">返回</div>
        <div style="float: left;flex: 1;">{{headerText}}</div>
        <div class="serverBtn">订阅服务</div>
      </div>
</template>
<script>
  export default{
    data(){
      return {
        headerText:'我的U助管理'
      }
    }
  }
</script>
<style lang="stylus">
//必须要加上lang=“sass/less/stylus等等”
  // @import "header.less";
  // @import "header.sass"
  @import "header.styl"
</style>
