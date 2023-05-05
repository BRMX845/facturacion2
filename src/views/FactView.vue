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
                        <v-flex class="d-flex justify-space-around mb-2 bg-surface-variant">
                        <v-card-col cols="2" >
                            <div v-if="seleciontab===0">
                                <v-card-actions>
                                    <v-btn color="primary" @click="agregar_envio">Envio</v-btn>
                                </v-card-actions>
                            </div>
                            <div v-if="seleciontab===1">
                                <v-card-actions>
                                <v-btn color="primary" @click="agregar_ordinario">Ordinario</v-btn>
                                <v-btn color="primary" @click="agregar_cert">Certificado</v-btn>
                                </v-card-actions>
                            </div>
                            <div v-if="seleciontab===2">
                                <v-card-actions>
                                    <v-btn color="primary" @click="agregar_recaudacion">Recaudacion</v-btn>
                                </v-card-actions>
                            </div>
                            <div v-if="seleciontab===3">
                                <v-card-actions>
                                    <v-btn color="primary" @click="agregar_almacenaje" >Almacenaje</v-btn>
                                    <v-btn color="primary" @click="agregar_envio_en">Envio</v-btn>
                                </v-card-actions>
                            </div>
                            <div v-if="seleciontab===4">
                                <v-card-actions>
                                    <v-btn color="primary" @click="agregar_ordinario_pliegos" >Ordinario</v-btn>
                                    <v-btn color="primary" @click="agregar_cert_pliegos">Certificado</v-btn>
                                    <v-btn color="primary" @click="agregar_almacenaje_pliegos">Almacenaje</v-btn>
                                </v-card-actions>
                            </div>
                        </v-card-col>
                        <div class="d-flex flex-column mb-12 bg-surface-variant">
                            <v-data-table :headers="headers" :items="lista">
                              <template v-slot:body="{ items, headers }">
                                  <tbody>
                                      <tr v-for="(item,idx,k) in items" :key="idx">
                                          <td v-for="(header,key) in headers" :key="key">
                                              <v-edit-dialog
                                                :return-value.sync="item[header.value]"

                                              > {{item[header.value]}}
                                                <template v-slot:input>
                                                  <v-text-field
                                                    v-model="item[header.value]"
                                                    single-line
                                                    :type="header.type"
                                                    :rules="header.rules"
                                                  ></v-text-field>
                                                </template>
                                              </v-edit-dialog>
                                          </td>
                                      </tr>
                                  </tbody>
                              </template>
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
                                <v-btn @click="pagar" >
                                    <v-icon>
                                        mdi-content-save
                                    </v-icon>
                                    Pagar
                                </v-btn>
                                <template>
                                  <div>
                                    <v-dialog v-model="Pagarwn" width="1024">
                                      <v-card>
                                        <v-card-title>
                                          Pagar
                                        </v-card-title>
                                        <v-flex class="d-flex justify-space-around pa-2 ma-2 bg-surface-variant">
                                          <v-card>
                                            <v-card-title>Factura</v-card-title>
                                            <v-card-text>
                                            <v-text-field label="numero de factura" type="number" required rounded></v-text-field>
                                            <v-text-field label="numero de autorizacion" required rounded></v-text-field>
                                            <v-text-field label="fecha" type="date" required rounded></v-text-field>
                                            <v-text-field label="fecha limite de emision" type="date" rounded></v-text-field>
                                          </v-card-text>
                                          </v-card>
                                          <v-card>
                                            <v-card-title>Tasas de cambio</v-card-title>
                                              <v-card-text>
                                              <v-text-field label="Dolar" required rounded></v-text-field>
                                              <v-text-field label="Euro" required rounded></v-text-field>
                                              <v-text-field label="UFV"  required rounded></v-text-field>
                                              </v-card-text>
                                          </v-card>
                                        </v-flex>>
                                        <v-card>
                                          <v-card-title>
                                            <span class="headline">Casa Matriz/SERVICIOS Y/O ACTIVIIDADES SUJETAS A IVA</span>
                                          </v-card-title>
                                        
                                        <v-card-text>
                                          <v-text-field label="NIT" required rounded></v-text-field>
                                          <v-text-field label="Correo electrónico" v-model="email" required rounded></v-text-field>
                                          <v-text-field label="Recibido"  required rounded></v-text-field>
                                          <v-text-field label="Cambio"  required rounded></v-text-field>
                                          <v-autocomplete label="Destino" auto-select-first clearable rounded></v-autocomplete>
                                          <v-text-field label="Doc/Pedido"  required rounded></v-text-field>
                                        </v-card-text>
                                        <v-card-actions>
                                          <v-btn color="primary" @click="Pagarwn = false">Cerrar</v-btn>
                                        </v-card-actions>
                                        </v-card>
                                      </v-card>
                                    </v-dialog>
                                  </div>
                                </template>
                                <v-btn @click="imprimir">
                                    <v-icon>
                                        mdi-printer
                                    </v-icon>
                                    Liquidaciòn
                                </v-btn>
                                <template>
                                  <div>
                                    <v-dialog v-model="imprimirDialog" >
                                      <v-card>
                                        <v-card-title>
                                          <span class="headline">Tabla para imprimir</span>
                                        </v-card-title>
                                        <v-card-text>
                                          <v-text-field label="fecha inicial" type="date"></v-text-field>
                                          <v-text-field label="Fecha final" type="date"></v-text-field>
                                          <v-data-table :headers="headersListComplete" :items="listaComplete">
                                          </v-data-table>
                                        </v-card-text>
                                        <v-card-actions>
                                          <v-btn color="primary" @click="imprimirDialog = false">Cerrar</v-btn>
                                          <v-btn @click="imprimir">
                                              <v-icon>
                                                  mdi-printer
                                              </v-icon>
                                              Liquidaciòn
                                          </v-btn>
                                        </v-card-actions>
                                      </v-card>
                                    </v-dialog>
                                  </div>
                                </template>
                                <v-spacer></v-spacer>
                                <v-btn color="red" dark @click="borrarLista">
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
        imprimirDialog:false,
        Pagarwn:false,
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
        { text: 'Cantidad', value: 'cantidad',type:'number',rules:[v => !!v || 'La cantidad es requerida', v => /^\d+$/.test(v) || 'La cantidad debe ser un número entero'] },
        { text: 'Precio', value: 'precio',type:'float',rules:[v => !!v || 'Precio es requerido', v => /^-?\d+(\.\d{1,2})?$/.test(v) || 'Precio debe ser un número de punto flotante con 2 decimales como máximo'] },
        { text: 'Importe', value: 'importe',type:'float',rules:[v => !!v || 'Importe es requerido', v => /^-?\d+(\.\d{1,2})?$/.test(v) || 'Importe debe ser un número de punto flotante con 2 decimales como máximo'] },
        { text: 'Concepto', value: 'concepto',type:'text'}
      ],
      headersListComplete: [
        { text: 'Entidad', value: 'cantidad'},
        { text: 'Fondo', value: 'precio'},
        { text: 'Almacen', value: 'importe'},
        { text: 'Fecha', value: 'fecha'},
        { text: 'Factura', value: 'Factura'},
        { text: 'Auxiliar', value: 'Auxiliar'},
        { text: 'Razon Social', value: 'Razon'},
        { text: 'importe', value: 'importe'}
      ],
      lista:[],
      listaComplete:[],
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
        concepto:'ENVIO',
      });
    },
    agregar_ordinario() {
      this.lista.push({
        concepto:'ORDINARIO',
      });
    },
    agregar_cert() {
      this.lista.push({
        concepto:'CERTIFICADO',
      });
    },
    agregar_recaudacion() {
      this.lista.push({
        concepto:'RECAUDACION',
      });
    },
    agregar_almacenaje() {
      this.lista.push({
        concepto:'ALMACENAJE-ENCOMIENDA',
      });
    },
    agregar_envio_en() {
      this.lista.push({
        concepto:'ENVIO-ENCOMIENDA',
      });
    },
    agregar_ordinario_pliegos() {
      this.lista.push({
        concepto:'ORDINARIO-ECA/PLIEGOS',
      });
    },
    agregar_cert_pliegos() {
      this.lista.push({
        concepto:'CERTIFICADO-ECA/CLIEGOS',
      });
    },
    agregar_almacenaje_pliegos() {
      this.lista.push({
        concepto:'ALMACENAJE-ECA/PLIEGOS',
      });
    },
    save () {
    },
    cancel () {
    },
    open () {
    },
    close () {
    },
    borrarLista() {
    this.lista = [];
    },
    imprimir() {
      this.imprimirDialog = true;
    },
    pagar(){
      this.Pagarwn=true;
    },
    },
}
</script>