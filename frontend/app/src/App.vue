<template>
  <div>
    <router-view></router-view>
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
