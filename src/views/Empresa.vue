<template>
  <div>
    <!-- slider -->
    <slider />

    <!-- contenido -->
    <div>
      <v-container class="grey lighten-5 mb-6">
        <v-row no-gutters>
          <v-col cols="4"> SLIDER </v-col>
          <v-col cols="8">
            <h3>Quienes Somos</h3>
            <li>
              Personas empeñadas en brindar un servicio de excelencia,
              comprometidas con la seguridad y con el éxito de los proyectos de
              nuestros clientes.
            </li>
            <li>
              ARMAQ somos personas. Personas con pasión por el trabajo bien
              hecho, enfocados en generar soluciones a los desafíos que nos
              plantean las obras.
            </li>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- mision vision -->
   <v-item-group mandatory>
    <v-container>
      <v-row>
        <v-col
           
          cols="12"
          md="4"
        >
          <v-item v-slot="{ active, toggle }">
            <v-card
              :color="active ? 'primary' : ''"
              class="d-flex align-center"
              dark
              height="200"
              @click="toggle"
            >
            Misión
              <v-scroll-y-transition>
                <div
                  v-if="active"
                  class="display-3 flex-grow-1 text-center caption"
                >
                  Activ essss ssssssActi vesssssss sssActiv essssssssssActivessssss ssss
                  Activ essss ssssssActi vesssssss sssActiv essssssssssActivessssss ssss
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
         <v-col
           
          cols="12"
          md="4"
        >
          <v-item v-slot="{ active, toggle }">
            <v-card
              :color="active ? 'primary' : ''"
              class="d-flex align-center"
              dark
              height="200"
              @click="toggle"
            >
           <span class="text-center" v-if="!active">Visión</span> 
              <v-scroll-y-transition>
                <div
                  v-if="active"
                  class="display-3 flex-grow-1 text-center caption"
                >
                  Activ essss ssssssActi vesssssss sssActiv essssssssssActivessssss ssss
                  Activ essss ssssssActi vesssssss sssActiv essssssssssActivessssss ssss
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
         <v-col
           
          cols="12"
          md="4"
        >
          <v-item v-slot="{ active, toggle }">
            <v-card
              :color="active ? 'primary' : ''"
              class="d-flex align-center"
              dark
              height="200"
              @click="toggle"
            >
            Politicas
              <v-scroll-y-transition>
                <div
                  v-if="active"
                  class="display-3 flex-grow-1 text-center caption"
                >
                  Activ essss ssssssActi vesssssss sssActiv essssssssssActivessssss ssss
                  Activ essss ssssssActi vesssssss sssActiv essssssssssActivessssss ssss
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
  </div>
</template>

<script>
// @ is an alias to /src
import slider from "@/components/Slider.vue";

export default {
  components: {
    slider,
    active:false,
    toggle:false
  },
};
</script>
