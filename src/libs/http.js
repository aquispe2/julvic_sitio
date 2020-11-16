import axios from 'axios'
export default {
  install (Vue, config) {
    const _url = config.url || ''

    const http = {
      get (url) {
        return _http('get', url)
      },
      getFiles (url) {
        return _httpFiles('get', url)
      },
      getFilesPost (url, data) {
        return _httpFiles('post', url, data)
      },
      post (url, data) {
        return _http('post', url, data)
      },
      put (url, data) {
        return _http('put', url, data)
      },
      delete (url, data) {
        return _http('delete', url)
      },
      patch (url) {
        return _http('patch', url)
      }
    }

    function _http (method, url, data = null) {
      let settings = {
        method,
        url: _url + url
      }
      if (data) {
        settings.data = data
      }
      return axios(settings)
        .then(respuesta => {
          return respuesta
        })
        .catch(error => {
          return error.response ? error.response.data || 'Error desconocido' : 'No se pudo conectar con el servidor'
        })
    }

    function _httpFiles (method, url, data = null) {
      let settings = {
        method,
        url: _url + url,
        responseType: 'blob'
      }
      if (data) {
        settings.data = data
      }
      return axios(settings)
        .then(respuesta => {
          return respuesta
        })
        .catch(error => {
          return error.response ? error.response.data || 'Error desconocido' : 'No se pudo conectar con el servidor'
        })
    }

    // Asignado de manera global este servicio en nuestra instancia Vue
    Vue.prototype.$http = http

    // Asignado axios de manera global
    Vue.prototype.$axios = axios
  }
}
