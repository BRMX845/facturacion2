<template>
    <v-container>
        <v-layout>
            <v-flex>
                <v-card>
                    <v-card-title>
                        Facturacion
                    </v-card-title>
                    <v-tabs>
                        <v-tab v-for="link in links" :key="link.value" >
                            <v-icon>
                                {{ link.icon }}
                            </v-icon>
                            {{ link.text }}
                        </v-tab>
                    </v-tabs>
                    <v-card-text>
                        <v-card-col cols="2" >
                            <v-card-actions>
                                <v-btn color="primary">hola1</v-btn>
                            </v-card-actions>
                            <v-card-actions>
                            <v-btn color="primary">hola2</v-btn>
                            </v-card-actions>
                        </v-card-col>
 
                            <v-data-table :headers="headers">
                            </v-data-table>

                        <!-- <v-data-table v-if="tab===0" :headers="headers">
                            
                        </v-data-table> -->
                    <v-actions>
                        <div>
                            <div class="d-flex flex-row mb-6 bg-surface-variant">
                                <v-btn>
                                    <v-icon>
                                        mdi-file
                                    </v-icon>
                                    Nuevo
                                </v-btn>
                                <v-btn>
                                    <v-icon>
                                        mdi-content-save
                                    </v-icon>
                                    Pagar
                                </v-btn>
                                <v-btn>
                                    <v-icon>
                                        mdi-printer
                                    </v-icon>
                                    Liquidaciòn
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-btn color="red" dark>
                                    <v-icon>
                                        mdi-close
                                    </v-icon>
                                    cancelar
                                </v-btn>
                            </div>
                        </div>
                    </v-actions>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
  data() {
    return {
        tab:0,
        links:[
      {icon:'mdi-login-variant',text:'EMS',value:1},
      {icon:'mdi-home-variant',text:'TRADICIONAL',value:2},
      {icon:'mdi-package',text:'CASILLA',value:3},
      {icon:'mdi-dolly',text:'ENCOMIENDA',value:4},
      {icon:'mdi-home-variant',text:'ECA/PLIEGOS',value:5},
    ],
      headers: [
        { text: 'Cantidad', value: 'cantidad' },
        { text: 'Precio', value: 'precio' },
        { text: 'Importe', value: 'importe' },
        { text: 'Concepto', value: 'concepto' }
      ]
    }
  }
}
</script>