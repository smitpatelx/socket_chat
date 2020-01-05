<template>
    <div class="flex flex-wrap container mx-auto justify-center mt-4py-3 px-3 shadow-lg rounded bg-gray-200">
        <div class="w-full my-3 py-1 px-2 md:px-4 justify-between flex bg-white rounded shadow-sm">
            <div class="md:flex flex-wrap hidden">
                <span class="hidden md:flex text-gray-600 text-sm my-1 ml-2 py-1 px-2 font-semibold">Build with : </span>
                <span class="bg-yellow-500 text-black text-sm my-1 ml-2 py-1 px-2 rounded font-semibold">Socket.io</span>
                <span class="bg-green-500 text-white text-sm my-1 ml-2 py-1 px-2 rounded font-semibold">Vue</span>
                <span class="bg-black text-white text-sm my-1 ml-2 py-1 px-2 rounded font-semibold">Express</span>
                <span class="bg-teal-500 text-white text-sm my-1 ml-2 py-1 px-2 rounded font-semibold">Tailwind</span>
            </div>

            <div class="justify-between content-center items-center md:justify-end flex flex-wrap w-full md:w-auto">
                <span v-if="submitted" class="flex flex-wrap flex-row text-right text-primary text-sm my-1 ml-2 py-1 px-2 font-semibold rounded border border-solid border-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20.8px" viewBox="0 0 172 172" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#2366ce"><path d="M86,0c-41.76375,0 -75.68,33.91625 -75.68,75.68c0,18.30188 6.49031,35.07188 17.3075,48.16h-16.2325c-1.23625,-0.01344 -2.39187,0.63156 -3.02344,1.70656c-0.61813,1.075 -0.61813,2.39187 0,3.46687c0.63156,1.075 1.78719,1.72 3.02344,1.70656h29.885v-29.885c0.01344,-0.99437 -0.41656,-1.935 -1.15562,-2.59344c-0.73906,-0.65844 -1.73344,-0.9675 -2.71438,-0.84656c-1.73344,0.215 -3.02344,1.69313 -3.01,3.44v20.21c-10.66937,-12.12062 -17.2,-27.92312 -17.2,-45.365c0,-38.04156 30.75844,-68.8 68.8,-68.8c38.04156,0 68.8,30.75844 68.8,68.8c0,18.18094 -6.9875,34.68219 -18.49,46.9775c-1.00781,0.84656 -1.43781,2.20375 -1.11531,3.46688c0.3225,1.27656 1.35719,2.2575 2.63375,2.52625c1.29,0.26875 2.62031,-0.22844 3.42656,-1.26313c12.64469,-13.51812 20.425,-31.75281 20.425,-51.7075c0,-41.76375 -33.91625,-75.68 -75.68,-75.68zM85.57,25.4775c-12.65812,0.22844 -21.90312,4.00438 -27.52,11.395c-6.65156,8.76125 -7.86094,22.10469 -3.655,39.56c-1.54531,1.89469 -2.71437,4.77031 -2.2575,8.6c0.90031,7.55188 3.92375,10.68281 6.3425,11.9325c1.16906,5.96625 4.46125,12.64469 7.6325,15.8025v1.6125c0.02688,3.49375 0.01344,6.51719 -0.3225,10.4275c-2.10969,4.8375 -9.11062,7.67281 -17.2,10.8575c-13.4375,5.28094 -30.14031,11.81156 -31.39,32.68l-0.215,3.655h138.03l-0.215,-3.655c-1.24969,-20.86844 -17.88531,-27.39906 -31.2825,-32.68c-8.04906,-3.18469 -15.10375,-6.02 -17.2,-10.8575c-0.33594,-3.89687 -0.24187,-6.93375 -0.215,-10.4275v-1.6125c3.07719,-3.14437 6.24844,-9.83625 7.4175,-15.8025c2.48594,-1.23625 5.42875,-4.35375 6.3425,-11.9325c0.45688,-3.74906 -0.645,-6.59781 -2.15,-8.4925c2.00219,-6.81281 6.08719,-24.55031 -0.9675,-35.905c-2.95625,-4.75687 -7.43094,-7.75344 -13.33,-8.9225c-3.25187,-4.09844 -9.48687,-6.235 -17.845,-6.235z"></path></g></g></svg>
                    <p class="ml-3">{{name}}</p>
                </span>
                <span v-if="submitted" @click="delete_name" class="cursor-pointer flex flex-wrap flex-row text-right text-primary hover:text-black bg-primary hover:bg-primary-800 text-sm my-1 ml-2 py-1 px-2 font-semibold rounded border border-solid border-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 172 172" style="fill:#2366ce;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M72.24,6.88c-5.65719,0 -10.32,4.66281 -10.32,10.32v6.88h-34.4c-1.23625,-0.01344 -2.39187,0.63156 -3.02344,1.70656c-0.61813,1.075 -0.61813,2.39187 0,3.46687c0.63156,1.075 1.78719,1.72 3.02344,1.70656h3.44v123.84c0,5.68406 4.63594,10.32 10.32,10.32h89.44c5.68406,0 10.32,-4.63594 10.32,-10.32v-123.84h3.44c1.23625,0.01344 2.39188,-0.63156 3.02344,-1.70656c0.61813,-1.075 0.61813,-2.39187 0,-3.46687c-0.63156,-1.075 -1.78719,-1.72 -3.02344,-1.70656h-34.4v-6.88c0,-5.65719 -4.66281,-10.32 -10.32,-10.32zM72.24,13.76h27.52c1.90813,0 3.44,1.53188 3.44,3.44v6.88h-34.4v-6.88c0,-1.90812 1.53188,-3.44 3.44,-3.44zM61.92,68.8c0.87344,0 1.76031,0.33594 2.43219,1.00781l21.64781,21.64781l21.64781,-21.64781c1.34375,-1.34375 3.52062,-1.34375 4.86437,0c1.34375,1.34375 1.34375,3.52062 0,4.86437l-21.64781,21.64781l21.64781,21.64781c1.34375,1.34375 1.34375,3.52062 0,4.86437c-0.67187,0.67188 -1.54531,1.00781 -2.43219,1.00781c-0.88687,0 -1.76031,-0.33594 -2.43219,-1.00781l-21.64781,-21.64781l-21.64781,21.64781c-0.67187,0.67188 -1.54531,1.00781 -2.43219,1.00781c-0.88687,0 -1.76031,-0.33594 -2.43219,-1.00781c-1.34375,-1.34375 -1.34375,-3.52062 0,-4.86437l21.64781,-21.64781l-21.64781,-21.64781c-1.34375,-1.34375 -1.34375,-3.52062 0,-4.86437c0.67187,-0.67188 1.55875,-1.00781 2.43219,-1.00781z"></path></g></g></svg>
                </span>
            </div>
        </div>
        <form v-on:submit.prevent="submit_name" v-if="!submitted" class="w-full h-64 my-3 py-1 px-4 justify-center align-center flex bg-primary rounded shadow-sm">
            <input autofocus ref="chat_input" tabindex="0" type="text" placeholder="First & Last" v-model.trim="name" class="self-center w-64 focus:outline-none focus:shadow-outline py-2 px-4 text-gray-700 rounded border border-solid border-gray-500">
            <input tabindex="0" type="submit" value="Submit" class="ml-4 self-center focus:outline-none focus:shadow-outline py-2 px-4 rounded bg-gray-400 hover:bg-gray-500 focus:bg-gray-500 font-semibold cursor-pointer text-black hover:text-white focus:text-white shadow-sm">
        </form>
        <ChatBoxIn v-else :name_val="data_to_return"></ChatBoxIn>
    </div>
</template>
<script>
import ChatBoxIn from './ChatBoxIn.vue';
export default {
    components:{
        ChatBoxIn
    },
    data(){
        return{
            name:'',
            submitted: false
        }
    },
    methods:{
        submit_name(){
            if(this.name.length > 0) {
                this.submitted = true;
            } else {
                this.submitted = false;
            }
        },
        delete_name() {
            this.name = "";
            this.submitted = false;
        }
    },
    computed:{
        data_to_return() {
            return {
                name: this.name,
                id: this.random_id,
                date: this.current_date
            }
        },
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
        },
        random_id(){
            return Math.floor(Math.random()*90000) + 10000;
        }
    },
    mounted(){
        this.$refs.chat_input.focus();
    }
}
</script>