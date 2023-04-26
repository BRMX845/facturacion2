<template>
    <v-container>
        <v-layout>
            <v-flex>
                <v-card>
                    <v-card-title>
                        ECA/PLAGIOS
                    </v-card-title>
                    <v-card-text>
                        <v-data-table :headers="headers">
                            <tbody>
                                <tr
                                    v-for="item in desserts"
                                    :key="item.name"
                                >
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.calories }}</td>
                                </tr>
                            </tbody>
                        </v-data-table>
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