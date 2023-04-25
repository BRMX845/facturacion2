<template>
  <v-app>
    <div>
    <v-toolbar app color="blue" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Facturacion</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn icon to="/Register">
        <v-icon>mdi-account-plus</v-icon>
      </v-btn>

      <v-btn icon to="/Login">
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-login-variant</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
    <v-layout>
    <v-navigation-drawer app v-model="drawer" temporary>
      <v-list v-for="link in links" :key="link.text" route >
        <v-list-item :to="link.route">
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item>
              {{ link.text }}
          </v-list-item>
        </v-list-item>

      </v-list>

    </v-navigation-drawer>
  </v-layout>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>


<script>

export default {
  name: 'App',

  data: () => ({
    drawer:false,
    links:[
      {icon:'mdi-home-variant',text:'Home',route:'/'},
      {icon:'mdi-login-variant',text:'EMS',route:'/emc'},
      {icon:'mdi-home-variant',text:'TRADICIONAL',route:'/tradicional'},
      {icon:'mdi-package',text:'CASILLA',route:'/casillas'},
      {icon:'mdi-dolly',text:'ENCOMIENDA',route:'/encomienda'},
      {icon:'mdi-home-variant',text:'ECA/PLIEGOS',route:'/eca_plagios'},
    ]
  }),
};
</script>
