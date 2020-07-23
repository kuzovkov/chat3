<template>
    <div class="trollbox">
        <v-card class="mx-auto" max-width="80%">
            <v-toolbar color="indigo" dark>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>{{title}}</v-toolbar-title>

                <v-spacer></v-spacer>
            </v-toolbar>
            <div class="v-scroll">
            <v-container>
            <v-row>
                <v-col cols="12">
                    <template>
                        <v-list two-line rounded>
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
                    </v-col>
                </v-row>
            </v-container>
            </div>
        <template>
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <v-text-field
                                v-model="message"
                                :append-outer-icon="'mdi-send'"
                                :prepend-icon="icon"
                                filled
                                clear-icon="mdi-close-circle"
                                clearable
                                label="Type your message"
                                type="text"
                                @click:append-outer="send"
                                @click:prepend="changeIcon"
                                @click:clear="clearMessage"
                                @keyup.enter="send"
                        ></v-text-field>
                    </v-col>

                </v-row>
            </v-container>
        </template>
        </v-card>
    </div>
</template>

<script>

    import config from '../config';

    export default {
        props: ['messages', 'from', 'to', 'broadcast', 'room', 'title'],
        computed: {
            loading(){
                return this.$store.getters.loading;
            },
            icon () {
                return this.icons[this.iconIndex]
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
            },
            clearMessage(){
                this.message = '';
            },
            changeIcon(){
                this.iconIndex = (this.iconIndex < (this.icons.length-2))? this.iconIndex + 1 : 0;
            }

        },
        watch: {
            messages: function(){
                const chatArea = document.getElementsByClassName('v-scroll')[0];
                chatArea.scrollTop = chatArea.scrollHeight;
            }
        },
        data(){
            return {
                rules: [
                    value => !!value || 'Required.',
                    value => (value && value.length >= 1) || 'Min 1 characters',
                ],
                disabled: false,
                message: '',
                iconIndex: 0,
                icons: [
                        'mdi-emoticon',
                        'mdi-emoticon-cool',
                        'mdi-emoticon-dead',
                        'mdi-emoticon-excited',
                        'mdi-emoticon-happy',
                        'mdi-emoticon-neutral',
                        'mdi-emoticon-sad',
                        'mdi-emoticon-tongue',
                    ],
                }
            },
        created(){
            this.$socket.emit('message_history', {user1: this.from, user2:null, lefttime: config.HISTORY_LEFTTIME, room: this.room})
        }
    }
</script>

<style scoped>
    .v-scroll{ max-height: 600px; height: 80%; overflow-y: scroll;}
    .text {font-size: small; color: #999;}
</style>
