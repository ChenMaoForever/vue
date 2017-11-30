/**
 * Created by dell on 2017/3/15.
 */
import Vue from 'vue'
import main from './main.vue'
import Favlist from '../components/Favlist.vue'
import ratings from '../components/Ratings.vue'
import shop from '../components/shop.vue'
import App from './App.vue'
import login from './login.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import vuex_store from '../store/store'
//高德地图
import AMap from 'vue-amap'
//axios解决异步请求
import axios from 'axios'
Vue.prototype.$http = axios;

Vue.config.debug = true;//开启错误提示
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(AMap);

let routes = [
    {path:'/',component:login},
    {path:'/login',component:login},
    {path: '/manage',component: App},
    {path: '/Favlist',component: Favlist},
    {path: '/ratings', component: ratings},
    {path: '/shop', component: shop}
]

// 初始化vue-amap
AMap.initAMapApiLoader({
  // 高德的key
  key: '28966b6be8e4fa0e4c4f4c9b4bf8d3ce',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});





let router = new VueRouter({
      mode:'history',
    'linkActiveClass': 'active',
    routes // （缩写）相当于 routes: routes
});
let app = new Vue({
  el:"#app",
  store:vuex_store,
  render:h=>h(main),
  router,
  data:{
    eventHub:new Vue()//实例化一个事件中站转
  }
})//.$mount('#app');

router.push('/login');//默认加载Favlist组件
console.log(app)
export default app;
