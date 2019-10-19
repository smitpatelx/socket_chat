import Vue from 'vue';

Vue.component('chat-box', require('./components/ChatBox.vue').default);

var app = new Vue({
    el: '#app',
    data: {
        app_name: 'Chat Demo'
    }
});
