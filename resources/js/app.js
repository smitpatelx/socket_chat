import Vue from 'vue';
import VueChatScroll from 'vue-chat-scroll'

Vue.use(VueChatScroll);
Vue.component('chat-box', require('./components/ChatBox.vue').default);

var app = new Vue({
    el: '#app',
    data: {
        app_name: 'Chat Demo'
    }
});
