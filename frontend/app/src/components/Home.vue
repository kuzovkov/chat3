<template>
    <div class="home">

        <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field label="Username" :rules="rules" hide-details="auto" v-model="username"></v-text-field>
            <v-text-field label="Room ID" :rules="rules" v-model="roomId"></v-text-field>
            <v-btn :disabled="!valid" class="success" @click="createOrJoin"><v-icon>mdi-cellphone-iphone</v-icon>Create or Join</v-btn>
        </v-form>


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
                roomId: ''
            }
        },
        computed: {
            loading(){
                return this.$store.getters.loading;
            },
        },

        methods: {
            createOrJoin(){
                if (this.$refs.form.validate()){
                    console.log(this.username, this.roomId);
                    this.$store.commit('setUser', this.username);
                    this.$store.commit('setRoomId', this.roomId);
                    this.$router.push('/room/'+this.roomId);
                }
            }
        },
        created(){
            console.log('created');
        }
    }
</script>

<style scoped>
    .home {
        width: 400px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10%;
    }

</style>