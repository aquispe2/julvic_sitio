<template>
  <v-container class="ml-10">
    <h3>Productos</h3>
    <v-row>
      
      <v-col cols="2" class="pa-1" v-for="item in getProductos" :key="item.productoId">
        <productoComponen :datosProducto = item ></productoComponen>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

import productoComponen from "@/components/ProductoComponent";
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
export default {
  components: {
    productoComponen,
  },

   computed: {
    ...mapGetters("productos", ["getProductos"]),
  },
  mounted(){
    this.obtenerProductosTodos();
  },
  methods:{
    ...mapActions("productos",["obtenerProductosTodos"])
  }
};
</script>