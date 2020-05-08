<template>
    <div>
        <h2>{{room}}</h2>
        <v-btn class="success" @click="send">Send</v-btn>
    </div>
</template>

<script>
    export default {
        props: ['room'],

        methods: {
          send(){
              console.log('send');
              this.$socket.emit('get_ice', {});
          },
        },



        created(){
            console.log('room created');
        }

    }
</script>

<style scoped>

</style>