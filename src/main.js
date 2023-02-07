
import Vue from 'vue'
import App from './App.vue'      // 路由列表
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS

Vue.use(iView);

// 路由配置
Vue.config.productionTip = false
new Vue({
    el: '#app',
    render: h => h(App)
});