<template>
    <form v-on:submit.prevent="send_message" class="flex flex-wrap py-2 px-4 justify-center items-center content-center shadow-lg rounded-b-lg bg-gray-200 antialiased">
        <div class="flex-1 p-2 flex flex-wrap justify-center content-center">
            <input autofocus ref="message_input" tabindex="0" type="text" placeholder="Start Typing ..." v-model.trim="message" class="w-full focus:outline-none focus:shadow-outline py-2 px-4 text-gray-700 rounded border border-solid border-gray-500">
        </div>
        <div class="p-2 flex flex-wrap justify-center content-center ml-4">
            <input tabindex="0" type="submit" value="Reply" class="focus:outline-none focus:shadow-outline py-2 px-4 rounded bg-gray-400 hover:bg-gray-500 focus:bg-gray-500 font-semibold cursor-pointer text-black hover:text-white focus:text-white shadow-sm">
        </div>
    </form>
</template>
<script>
import io from 'socket.io-client/dist/socket.io.js';
export default {
    data(){
        return {
            message: '',
            current_date: {}
        }
    },
    props:{
        name_val2 : {
            type: Object,
            required: true,
            default: {}
        }
    },
    methods:{
        send_message(){
            if(this.message.length > 2){
                this.get_date();
                var socket = io();
                var msg = {
                    user_id: this.name_val2.id,
                    name: this.name_val2.name,
                    message: this.message,
                    time: this.current_date.hrs,
                    date: this.current_date.date
                };
                socket.emit('chat_message', msg);
                this.message = "";
                this.$refs.message_input.focus();
            }
        },
        get_date(){
            var nd = new Date();

            var hours = nd.getHours();
            var minutes = nd.getMinutes();
            var ampm = hours >= 12 ? 'pm' : 'am';
            var hours = ampm == 'pm' ? hours-12 : hours;
            var fullDate = {
                hrs: hours+":"+minutes+" "+ampm,
                date: nd
            };
            this.current_date = fullDate;
        }
    }
}
</script>