import Loading from './roll_loading.vue'

export default {
    /**
     * 每个插件都有的install方法，用于安装插件
     * @param {Object} Vue - Vue类
     * @param {Object} [pluginOptions] - 插件安装配置
     */
    install(Vue, pluginOptions = {}) {
        // 创建"子类"方便挂载
        const VueLoading = Vue.extend(Loading);
        let loading = null;

        /**
         * 初始化并显示loading
         */
        function $loading(  ) {
            // 第一次调用
            if (!loading) {
                loading = new VueLoading();
                // 手动创建一个未挂载的实例
                loading.$mount();
                // 挂载
                document.querySelector(pluginOptions.container || 'body').appendChild(loading.$el)
            }
            // 显示loading
            loading.show();
        }
        $loading.hide = () => {
            loading.hide();
        };



      /*  $followerPopup.close = (callback) => {
            hasfollowerPopup.close(callback);
        }*/


        Vue.loading = Vue.prototype.$loading = $loading
    },
}