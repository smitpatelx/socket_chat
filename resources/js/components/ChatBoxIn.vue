<template>
    <div class="w-full py-3">
        <div class="flex-1 overflow-auto py-2 px-2 shadow-xl rounded-t-lg bg-white antialiased overflow-x-hidden overflow-y-visible" style="max-height: 70vh;height: 70vh;" v-chat-scroll="{always: false, smooth: true}">
            <p v-if="messages.length == 0" class="text-center rounded mx-2 my-6 bg-gray-100 px-4 py-1 text-primary-600 hover:text-black shadow-lg-e">You dont have any messages</p>
            <slide-x-left-transition group>
                <div v-for="(data, i) in messages" :key="i" class="flex mb-2" :class="data.user_id == name_val.id ? 'justify-end' : 'justify-start'">
                    <div v-if="data.type" class="w-full my-1 px-3 text-center justify-center">
                        <p class="text-base font-semibold" :class="data.type == 'joined' ? 'text-green-500' : 'text-red-500'" v-html="data.name + (data.type == 'joined' ? ' joined chat' : ' left chat')"></p>
                    </div>
                    <div v-else class="m-2 py-1 px-3 rounded shadow-sm" :class="data.user_id == name_val.id ? 'bg-gray-300' : 'bg-primary-200'">
                        <p class="text-left" :class="data.user_id == name_val.id ? 'text-gray-800' : 'text-gray-300'" v-if="data.user_id != name_val.id">{{data.name}}</p>
                        <p class="font-semibold" :class="data.user_id == name_val.id ? 'text-black' : 'text-white'">{{data.message}}</p>
                        <p class="text-right text-xs mt-1" :class="data.user_id == name_val.id ? 'text-gray-700' : 'text-gray-200'">{{data.time}}</p>
                    </div>
                </div>
            </slide-x-left-transition>
        </div>
        <div class="w-full">
            <ChatInput :name_val2="name_val"></ChatInput>
        </div>
    </div>
</template>
<script>
import ChatInput from './ChatInput.vue';
import io from 'socket.io-client/dist/socket.io.js';
import { SlideXLeftTransition } from 'vue2-transitions';

//Chat Component
var cbi = {
    components:{
        ChatInput,
        SlideXLeftTransition
    },
    props:{
        name_val : {
            type: Object,
            required: true,
            default: {}
        }
    },
    data(){
        return {
            messages: [

            ],
            current_msg: {}
        }
    },
    computed: {
        current_date(){
            var nd = new Date();

            var hours = nd.getHours();
            var minutes = nd.getMinutes();
            var ampm = hours >= 12 ? 'pm' : 'am';

            var fullDate = {
                hrs: hours+":"+minutes+" "+ampm,
                date: nd
            };
            return fullDate;
        }
    },
    mounted(){
        var socket = io();
        var that = this;
        socket.on('chat_message2', function(data){
            // console.log("ChatBoxIn user_id check:", data.user_id == that.name_val.id ? 'true' : 'false');
            that.messages.push(data);
        });
        socket.on('active_users', function(data){
            that.messages.push(data);
        });
    },
    created(){
        var socket = io();
        var user = {
            user_id: this.name_val.id,
            name: this.name_val.name,
            message: '',
            time: this.current_date.hrs,
            type: 'joined'
        };
        socket.emit('active_user_list', user);
    },
    destroyed(){
        var socket = io();
        var user = {
            user_id: this.name_val.id,
            name: this.name_val.name,
            message: '',
            time: this.current_date.hrs,
            type: 'disconnected'
        };
        socket.emit('left_user_list', user);
    }
}

export default cbi;
</script>