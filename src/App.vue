<template>
  <v-app>
    <v-toolbar app color="blue" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Facturacion</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-account-plus</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-login-variant</v-icon>
      </v-btn>
    </v-toolbar>
    <v-layout>
    <v-navigation-drawer app v-model="drawer" temporary>
      <v-list
          density="compact"
          nav
        >
        <v-icon>mdi-view-dashboard</v-icon>
        <v-list-item >home</v-list-item>
        <v-list-item >EMS</v-list-item>
          <v-list-item prepend-icon="mdi-view-dashboard">Tradiocional</v-list-item>
          <v-list-item prepend-icon="mdi-forum">casillas</v-list-item>
          <v-list-item prepend-icon="mdi-view-dashboard">Encomienda</v-list-item>
          <v-list-item prepend-icon="mdi-forum">ECA/PLIEGOS</v-list-item>
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
    drawer:false
  }),
};
</script>
