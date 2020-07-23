<template>
    <div class="message">
        <h4>Broadcast chat:</h4>
        <template class="v-scroll">
            <v-list two-line>
                <v-list-item-group>
                    <template v-for="(msg, index) in messages">
                        <v-list-item :key="index" >
                            <template>
                                <v-list-item-content>
                                    <v-list-item-title v-text="msg.username"></v-list-item-title>
                                    <p class="text">{{msg.message}}</p>
                                </v-list-item-content>

                                <v-list-item-action>
                                    <v-list-item-action-text v-text="msg.datetime.toLocaleString()"></v-list-item-action-text>
                                </v-list-item-action>
                            </template>
                        </v-list-item>

                        <v-divider
                                v-if="index + 1 < messages.length"
                                :key="'_'+index"
                        ></v-divider>
                    </template>
                </v-list-item-group>
            </v-list>
        </template>

        <template>
            <div class="text-area">
                <div class="text-area__input">
                  <v-text-field v-model="message" label="Type your message" :rules="rules" hide-details="auto" @keyup.enter="send" ></v-text-field>
                    <v-btn class="md-primary" @click="send">Send</v-btn>
                </div>
            </div>

        </template>
    </div>
</template>

<script>

    import config from '../config';

    export default {
        props: ['messages', 'from', 'to', 'broadcast', 'room'],
        computed: {
            loading(){
                return this.$store.getters.loading;
            },
        },
        methods: {
            send(){
                //console.log(this.message);
                if (this.broadcast){
                    this.$socket.emit('user_message', {message: this.message, to: null, room: this.room, from: this.from});
                }else{
                    this.$socket.emit('user_message', {message: this.message, to: this.to, room: this.room, from: this.from});
                }
                this.message = '';
            }
        },
        watch: {
            messages: function(){
                const chatArea = document.getElementsByClassName('message')[0];
                chatArea.scrollTop = chatArea.scrollHeight + 100
            }
        },
        data(){
            return {
                rules: [
                    value => !!value || 'Required.',
                    value => (value && value.length >= 1) || 'Min 1 characters',
                ],
                disabled: false,
                message: ''
                }
            },
        created(){
            this.$socket.emit('message_history', {user1: this.from, user2:null, lefttime: config.HISTORY_LEFTTIME, room: this.room})
        }
    }
</script>

<style scoped>
    .v-scroll{ height: 80%; overflow-y: scroll;}
    .text {font-size: small; color: #999;}
</style>
