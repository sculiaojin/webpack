import axios from 'axios'
import store from '@/store'
import router from '@/router'
import Vue from 'vue'
import  { LoadingPlugin } from 'vux'
import  { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)

// 超时时间
axios.defaults.timeout = 5000

axios.interceptors.request.use(config => {
	Vue.$vux.loading.show({
   		text: '数据加载中'
	})
//	config.url = "http://www.baidu.com/"+config.url;  //测试环境
//	config.headers.authKey = store.getters.user.authKey ||"";
	return config
}, error => {
	Vue.$vux.loading.hide()
	Vue.$vux.toast.text('加载超时','middle')
	return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => { 
	Vue.$vux.loading.hide()
	return data;
//	if(!!data.status){
//		return data;
//	}else{
//		Vue.$vux.toast.text(data.data,'middle')
//		return Promise.reject(data);
//	}
}, error => {
	Vue.$vux.loading.hide()
	Vue.$vux.toast.text('加载失败','middle')
	return Promise.reject(error)
})

export default axios