<template>
    <v-container fluid>
        
        <v-row justify="center">
            <v-col cols="12" sm="8" md="6">
                <v-card>
                    <div>
                        <v-card-title>Registro</v-card-title>
                        <v-form @submit.prevent="register">
                        <v-text-field label="Nombre" v-model="name" required rounded></v-text-field>
                        <v-text-field label="Correo electrónico" v-model="email" required rounded></v-text-field>
                        <v-text-field label="Carnet de Identidad" v-model="ci" required rounded></v-text-field>
                        <v-autocomplete label="Departamento" auto-select-first clearable rounded></v-autocomplete>
                        <v-text-field label="Contraseña" v-model="password" type="password" required rounded></v-text-field>
                        <v-text-field label="Confirmar contraseña" v-model="confirmPassword" type="password" required rounded></v-text-field>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn type="submit" color="primary">Registrarse</v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                        </v-form>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
  </template>