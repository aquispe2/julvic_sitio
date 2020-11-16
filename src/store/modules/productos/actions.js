import Vue from 'vue'
export const obtenerProductosTodos = ({commit})=>{
    return new Promise ((resolve,reject)=>{
        Vue.prototype.$http.get(`producto/all`).then(r=>{
            commit('setProductos', r.data);
            resolve(r);
        })
    })
}

