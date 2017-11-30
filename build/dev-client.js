/**
 * Created by dell on 2017/3/15.
 */
var hotClient = require('webpack-hot-middleware/client')

// 订阅事件，当 event.action === 'reload' 时执行页面刷新
hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    window.location.reload()
  }
})
