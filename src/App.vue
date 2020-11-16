<template>
  <v-app class="pa-0 ma-0">
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      transparent
      dark
      color="primary"
      elevation="0"
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down"></span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

        <v-btn text @click="go('/')">
          Empresa
        </v-btn>
        <v-btn text @click="go('/Servicio')">
          Servicios
        </v-btn>
        <v-btn text>
          Experiencia
        </v-btn>
        <v-btn text>
          Noticias
        </v-btn>
           <v-btn text>
          Experiencia
        </v-btn>

    </v-app-bar>
    <v-main style="background:#ECEFF1;">
      <v-container >
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //drawer: null,
  }),
  methods:{
     go (url) {
        this.$router.push(url)
    },
  }
};
</script>
