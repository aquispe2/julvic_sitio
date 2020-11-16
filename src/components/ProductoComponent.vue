<template>
  <v-card class="mx-auto my-12" max-width="250" elevation="10">
    <v-img
      height="200"
      :src="datosProducto.urlImg"
    ></v-img>
    <v-card-title>{{datosProducto.nombre}}</v-card-title>
    <v-card-text>
      <div>
        {{datosProducto.descripcion}}
      </div>
    </v-card-text>
    <v-card-title>{{datosProducto.precio}} Bs</v-card-title>
    <v-divider class="mx-4"></v-divider>
    <v-card-actions  >
     <!-- <v-btn color="deep-purple lighten-2" text> Añadir a Carrito </v-btn>-->
      <v-chip
      class="ma-2"
      color="naranja"
      text-color="white"
    >
      Añadir a Carrito
    </v-chip>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props:['datosProducto']
}
</script>