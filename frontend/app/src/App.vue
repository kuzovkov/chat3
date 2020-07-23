<template>
  <div>
    <router-view> <!-- Provides the application the proper gutter -->


      <!-- If using vue-router --></router-view>
  </div>

</template>

<script>

export default {

  components: {
  },

  computed: {
    error (){
      return this.$store.getters.error
    },
  },


  created () {
    this.$vuetify.theme.dark = true
  },
  methods: {
    showInfo(){
      this.dialog = true;
    }
  }

};
</script>
