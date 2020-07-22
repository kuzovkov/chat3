<template>
    <div>
        <v-app id="inspire">
            <v-navigation-drawer v-model="drawer" app clipped>
                <h4 class="text-left">Users:</h4>
                <v-list dense>
                    <v-list-item link v-for="user in userlist" :key="user">
                        <v-list-item-action>
                            <v-icon>mdi-human</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>{{user}}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                </v-list>
            </v-navigation-drawer>

            <v-app-bar app clipped-left>
                <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
                <v-toolbar-title>Chat: {{username}}</v-toolbar-title>

                <template>
                    <v-row>
                        <v-col align="right">
                            <v-menu right bottom>
                                <template v-slot:activator="{ on }">
                                    <v-btn icon v-on="on">
                                        <v-icon>mdi-dots-vertical</v-icon>
                                    </v-btn>
                                </template>

                                <v-list>
                                    <v-list-item to="/">
                                        <v-list-item-title dense>
                                            <v-icon left>mdi-home</v-icon>
                                            Exit
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-col>
                    </v-row>
                </template>

            </v-app-bar>

            <v-content>


                <!-- Provides the application the proper gutter -->


                <!-- If using vue-router -->



            </v-content>

            <template v-if="error">
                <v-snackbar
                        :color="'error'"
                        :multi-line="true"
                        :timeout="5000"
                        @input="closeError"
                        :value="true"
                >
                    {{error}}
                    <v-btn dark text @click="closeError">Close</v-btn>
                </v-snackbar>
            </template>

            <template v-if="message">
                <v-snackbar
                        :color="'yellow'"
                        :multi-line="true"
                        :timeout="5000"
                        @input="closeMessage"
                        :value="true"
                >
                    {{message}}
                    <v-btn dark text @click="closeMessage">Close</v-btn>
                </v-snackbar>
            </template>

            <v-dialog v-model="dialog" width="600px">
                <v-card>
                    <v-card-title>
                        <span class="headline">%s</span>
                    </v-card-title>
                    <v-card-text>%s</v-card-text>

                </v-card>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="dialog = false">Close</v-btn>
                </v-card-actions>
            </v-dialog>

            <v-footer app>
                <span>&copy; 2020</span>
                <template>
                    <v-row>
                        <v-col align="right">
                            <debug></debug>
                        </v-col>

                    </v-row>

                </template>
            </v-footer>
        </v-app>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                drawer: false,
                dialog: false
            }
        },
        computed: {
            error (){
                return this.$store.getters.error;
            },
            message (){
                return this.$store.getters.message;
            },
            username(){
                return this.$store.getters.user.username;
            },
            userlist(){
                return this.$store.getters.userlist;
            }
        },
        methods: {
              send(){
                  console.log('send');
              },
            showInfo(){
                this.dialog = true;
            },
            closeMessage(){
                this.$store.commit('clearMessage');
            },
            closeError(){
                this.$store.commit('clearError');
            }
        },
        created(){
            console.log('chat created');
            this.$vuetify.theme.dark = true;
            this.$socket.emit('get_ice', {});
            this.$socket.emit('user_connect', {nicname: this.username});

        },
    }
</script>

<style scoped>

</style>