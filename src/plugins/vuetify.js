import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#121f3d',
        secondary: '#283593',
        accent: '#5C6BC0',
        error: '#D32F2F',
        info: '#8BC34A',
        success: '#43A047',
        warning: '#C0CA33',

        naranja:'#FF7043'
      },
    },
  },
  icons: {
    iconfont: 'fa',
  },
});
