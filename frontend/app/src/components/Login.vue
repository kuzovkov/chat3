<template>
    <div>
        <v-app id="inspire">
            <v-content>


                <v-container class="fill-height" fluid>
                    <v-row align="center" justify="center">
                        <v-col cols="12" sm="8" md="6">
                            <v-card class="elevation-12">
                                <v-toolbar dark flat>
                                    <v-toolbar-title>Choose your nickname</v-toolbar-title>
                                </v-toolbar>
                                <v-card-text>
                                    <v-form ref="form" v-model="valid" lazy-validation @submit.prevent>
                                        <v-text-field label="Username" :rules="rules" hide-details="auto" v-model="username" @keyup.enter="login"></v-text-field>
                                    </v-form>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer />
                                    <v-btn :disabled="!valid" class="success" @click="login" @keyup.enter="login"><v-icon>mdi-cellphone-iphone</v-icon>Sign In</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>

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
                rules: [
                    value => !!value || 'Required.',
                    value => (value && value.length >= 3) || 'Min 3 characters',
                ],
                valid: false,
                username: '',
            }
        },
        computed: {
            loading(){
                return this.$store.getters.loading;
            },
            error (){
                return this.$store.getters.error
            },
        },

        methods: {
            login(){
                if (this.$refs.form.validate()){
                    this.$store.commit('clearError');
                    this.$store.commit('setLoading', true);
                    this.$socket.emit('login', {username: this.username});
                }
            },
            closeError(){
                this.$store.commit('clearError');
            }
        },
        created(){
            console.log('login created');
            this.$store.commit('setUser', null);
            this.$socket.disconnect();
            this.$socket.connect();

        }
    }
</script>

<style scoped>

</style>