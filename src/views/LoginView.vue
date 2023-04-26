<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col xs="12" sm="8" md="4">
        <v-card>
          <v-card-title class="text-center">Inicio de sesión</v-card-title>
          <v-form @submit.prevent="login">
            <v-card-text>
              <v-text-field v-model="email" label="Correo electrónico" required></v-text-field>
              <v-text-field v-model="password" label="Contraseña" type="password" required></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn type="submit" color="primary">Iniciar sesión</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-form>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green" dark>Registrarse</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

