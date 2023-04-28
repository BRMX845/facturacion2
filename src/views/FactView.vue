<template>
    <v-container>
        <v-layout>
            <v-flex>
                <v-card>
                    <v-card-title>
                        Facturacion
                    </v-card-title>
                    <v-tabs v-model="seleciontab">
                        <v-tab v-for="link in links" :key="link.value" >
                            <v-icon>
                                {{ link.icon }}
                            </v-icon>
                            {{ link.text }}
                        </v-tab>
                    </v-tabs> 
                    <div v-if="seleciontab===0">
                    <v-card-text >
                        <v-flex class="d-flex justify-space-around mb-6 bg-surface-variant">
                        <v-card-col cols="2" >
                            <v-card-actions>
                                <v-btn color="primary">Envio</v-btn>
                            </v-card-actions>
                        </v-card-col>
                        <div class="d-flex flex-column mb-6 bg-surface-variant">
                            <v-data-table :headers="headers">
                            </v-data-table>
                            <h1>Total:</h1>
                            <v-actions>
                                <div class="d-flex align-content-end flex-wrap bg-surface-variant">
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
                            </v-actions>
                        </div>
                        </v-flex>
                    </v-card-text>
                    </div>
                    <div v-if="seleciontab===1">
                        <v-card-text >
                        <v-flex class="d-flex justify-space-around mb-6 bg-surface-variant">
                        <v-card-col cols="2" >
                            <v-card-actions>
                                <v-btn color="primary">Ordinario</v-btn>
                                <v-btn color="primary">Certificado</v-btn>
                            </v-card-actions>
                        </v-card-col>
                        <div class="d-flex flex-column mb-6 bg-surface-variant">
                            <v-data-table :headers="headers">
                            </v-data-table>
                            <h1>Total:</h1>
                            <v-actions>
                                <div class="d-flex align-content-end flex-wrap bg-surface-variant">
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
                    </v-actions>
                    </div>
                        </v-flex>
                    </v-card-text>
                    </div>
                    <div v-if="seleciontab===2">
                        <v-card-text >
                        <v-flex class="d-flex justify-space-around mb-6 bg-surface-variant">
                        <v-card-col cols="2" >
                            <v-card-actions>
                                <v-btn color="primary">Recaudacion</v-btn>
                            </v-card-actions>
                        </v-card-col>
                        <div class="d-flex flex-column mb-6 bg-surface-variant">
                            <v-data-table :headers="headers">
                            </v-data-table>
                            <h1>Total:</h1>
                            <v-actions>
                                <div class="d-flex align-content-end flex-wrap bg-surface-variant">
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
                    </v-actions>
                    </div>
                        </v-flex>
                    </v-card-text>
                    </div>
                    <div v-if="seleciontab===3">
                        <v-card-text >
                        <v-flex class="d-flex justify-space-around mb-6 bg-surface-variant">
                        <v-card-col cols="2" >
                            <v-card-actions>
                                <v-btn color="primary">Almacenaje</v-btn>
                                <v-btn color="primary">Envio</v-btn>
                            </v-card-actions>
                        </v-card-col>
                        <div class="d-flex flex-column mb-6 bg-surface-variant">
                            <v-data-table :headers="headers">
                            </v-data-table>
                            <h1>Total:</h1>
                            <v-actions>
                                <div class="d-flex align-content-end flex-wrap bg-surface-variant">
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
                    </v-actions>
                    </div>
                        </v-flex>
                    </v-card-text>
                    </div>
                    <div v-if="seleciontab===4">
                        <v-card-text >
                        <v-flex class="d-flex justify-space-around mb-6 bg-surface-variant">
                        <v-card-col cols="2" >
                            <v-card-actions>
                                <v-btn color="primary">Ordinario</v-btn>
                                <v-btn color="primary">Certificado</v-btn>
                                <v-btn color="primary">Almacenaje</v-btn>
                            </v-card-actions>
                        </v-card-col>
                        <div class="d-flex flex-column mb-6 bg-surface-variant">
                            <v-data-table :headers="headers">
                            </v-data-table>
                            <h1>Total:</h1>
                            <v-actions>
                                <div class="d-flex align-content-end flex-wrap bg-surface-variant">
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
                    </v-actions>
                    </div>
                        </v-flex>
                    </v-card-text>
                    </div>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
  data() {
    return {
        seleciontab:0,
        saludo:"hola",
        links:[
      {icon:'mdi-login-variant',text:'EMS',tab:1},
      {icon:'mdi-home-variant',text:'TRADICIONAL',tab:2},
      {icon:'mdi-package',text:'CASILLA',tab:3},
      {icon:'mdi-dolly',text:'ENCOMIENDA',tab:4},
      {icon:'mdi-home-variant',text:'ECA/PLIEGOS',tab:5},
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