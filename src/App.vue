<template>
  <v-app>
    <div>
    <v-toolbar app color="blue" dark>
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
        <v-main>
          <router-view />
        </v-main>
      
      
  </div>
  </v-app>
</template>


<script>

export default {
  name: 'App',

  data: () => ({

    links:[
      {icon:'mdi-home-variant',text:'Home'},
      {icon:'mdi-login-variant',text:'EMS'},
      {icon:'mdi-home-variant',text:'TRADICIONAL'},
      {icon:'mdi-package',text:'CASILLA'},
      {icon:'mdi-dolly',text:'ENCOMIENDA'},
      {icon:'mdi-home-variant',text:'ECA/PLIEGOS'},
    ]
  }),
};
</script>
