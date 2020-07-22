<template>
    <div>
        <v-btn @click="onClick" color="secondary" fab x-small dark>
            <v-icon>mdi-bug</v-icon>
        </v-btn>
    </div>
</template>

<script>
    import store from '../store';
    export default {
        methods: {
            onClick(){
                console.log('debug!');
                console.log('state as string:', JSON.stringify(this.$store.state));
                console.log('state:', this.$store.state);
            }
        }
    }
</script>

<style scoped>

</style>