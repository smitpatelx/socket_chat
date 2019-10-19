<template>
    <div class="w-full py-3">
        <div class="flex-1 overflow-auto py-2 px-2 shadow-xl rounded-t-lg bg-white antialiased">
            <div v-for="(data, i) in messages" :key="i" class="flex mb-2" :class="data.id != name_val.id ? 'justify-end' : 'justify-start'">
                <div class="m-2 py-1 px-3 rounded shadow-sm" :class="data.id != name_val.id ? 'bg-gray-300' : 'bg-primary-200'">
                    <p class="text-left" :class="data.id != name_val.id ? 'text-gray-800' : 'text-gray-300'">{{data.name}}</p>
                    <p class="font-semibold" :class="data.id != name_val.id ? 'text-black' : 'text-white'">{{data.message}}</p>
                    <p class="text-right text-xs mt-1" :class="data.id != name_val.id ? 'text-gray-700' : 'text-gray-200'">{{data.time}}</p>
                </div>
            </div>
        </div>
        <div class="w-full">
            <ChatInput :name_val2="name_val"></ChatInput>
        </div>
    </div>
</template>
<script>
import ChatInput from './ChatInput.vue';
import io from 'socket.io-client/dist/socket.io.js';

var cbi = {
    components:{
        ChatInput
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

            ]
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
    methods:{
        add_message(data){
            this.messages.push(data);
        }
    },
    mounted(){
        var socket = io();
        var that = this;
        socket.on('chat_message2', function(data){
            that.messages.push(data);
        });
    }
}

export default cbi;
</script>