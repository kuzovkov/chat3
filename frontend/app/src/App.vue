<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item link v-for="link in links" :key="link.url" :to="link.url">
          <v-list-item-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{link.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="showInfo">
          <v-list-item-action>
            <v-icon>mdi-exclamation-thick</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Info</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Chat3</v-toolbar-title>
    </v-app-bar>

    <v-menu left bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="link in  links" :key="link.title" :to="link.url">
          <v-list-item-title dense>
            <v-icon left>{{link.icon}}</v-icon>
            {{ link.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-content>


        <!-- Provides the application the proper gutter -->


        <!-- If using vue-router -->
        <router-view></router-view>


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

    <v-dialog v-model="dialog" width="600px">
      <v-card v-for="row in storeContent" :key="row.key">
        <v-card-title>
          <span class="headline">{{row.key}}</span>
        </v-card-title>
        <v-card-text>{{row.val}}</v-card-text>

      </v-card>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="dialog = false">Close</v-btn>
      </v-card-actions>
    </v-dialog>

    <v-footer app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {

  components: {

  },

  data(){
    return {
      drawer: false,
      room: '',
      username: '',
      dialog: false
    }
  },
  computed: {
    links (){
      if (this.isUserInRoom){
        return [
          {title: 'Home', icon: 'mdi-home', url: '/'},
          {title: 'Dashboard', icon: 'mdi-view-dashboard', url: '/dashboard'}
        ]
      }else{
        return [
          {title: 'Home', icon: 'mdi-home', url: '/'},
          {title: 'Dashboard', icon: 'mdi-view-dashboard', url: '/dashboard'}

        ]
      }
    },
    error (){
      return this.$store.getters.error
    },
    isUserInRoom (){
      return false;
    },
    storeContent(){
      let res = [];
      Object.keys(this.$store.getters).forEach((key) => {
        //if (this.$store.getters[key]){
          res.push({key: key, val: JSON.stringify(this.$store.getters[key])});
        //}
      });
      return res;
    }

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
