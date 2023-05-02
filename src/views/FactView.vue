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
                    <v-card-text >
                        <v-flex class="d-flex justify-space-around mb-6 bg-surface-variant">
                        <v-card-col cols="2" >
                            <div v-if="seleciontab===0">
                                <v-card-actions>
                                    <v-btn color="primary" @click="agregar_envio">Envio</v-btn>
                                </v-card-actions>
                            </div>
                            <div v-if="seleciontab===1">
                                <v-card-actions>
                                <v-btn color="primary">Ordinario</v-btn>
                                <v-btn color="primary">Certificado</v-btn>
                                </v-card-actions>
                            </div>
                            <div v-if="seleciontab===2">
                                <v-card-actions>
                                    <v-btn color="primary">Recaudacion</v-btn>
                                </v-card-actions>
                            </div>
                            <div v-if="seleciontab===3">
                                <v-card-actions>
                                    <v-btn color="primary">Almacenaje</v-btn>
                                    <v-btn color="primary">Envio</v-btn>
                                </v-card-actions>
                            </div>
                            <div v-if="seleciontab===4">
                                <v-card-actions>
                                    <v-btn color="primary">Ordinario</v-btn>
                                    <v-btn color="primary">Certificado</v-btn>
                                    <v-btn color="primary">Almacenaje</v-btn>
                                </v-card-actions>
                            </div>
                        </v-card-col>
                        <div class="d-flex flex-column mb-6 bg-surface-variant">
                            <v-data-table :headers="headers" :items="lista">
                            </v-data-table>
                            <h1>Total:</h1>
                            <v-actions>
                                <div class="d-flex align-content-end flex-wrap bg-surface-variant">
                                <v-btn @click="agregar_new">
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
      ],
      lista:[{
        cantidad: 1,precio:220,importe:110,concepto:'envio'
      }],
    }
  },
methods: {
    agregar_new() {
      this.lista.push({
        cantidad: '',
        precio: '',
        importe: '',
        concepto:'',
      });
    },
    agregar_envio() {
      this.lista.push({
        cantidad: '',
        precio: '',
        importe: '',
        concepto:'ENVIO',
      });
    },
    agregar_ordinario() {
      this.lista.push({
        cantidad: '',
        precio: '',
        importe: '',
        concepto:'ORDINARIO',
      });
    },
    agregar_cert() {
      this.lista.push({
        cantidad: 'CERTIFICADO',
        precio: '',
        importe: '',
        concepto:'',
      });
    },
    agregar_recaudacion() {
      this.lista.push({
        cantidad: '',
        precio: '',
        importe: '',
        concepto:'RECAUDACION',
      });
    },
    agregar_almacenaje() {
      this.lista.push({
        cantidad: '',
        precio: '',
        importe: '',
        concepto:'ALMACENAJE',
      });
    },
    },
}
</script>