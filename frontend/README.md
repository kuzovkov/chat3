# Frontend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



Install
================

```bash
sudo docker-compose exec frontend bash
vue create app
cd app
```

Теперь, когда у вас есть созданный проект, вы можете добавить Vuetify Vue CLI пакет с помощью cli.

```bash
vue add vuetify
npm install --save vue-router
npm install --save vuex
npm install --save socket.io 
npm install --save vue-socket.io
```

// `vue.config.js`
```javascript
module.exports = {
    // options...
    devServer: {
        disableHostCheck: true
    }
}
```
```bash
npm run serve
```

https://chat2.kuzovkov12.ru

Firebase
--------------
npm install firebase --save

How to add external JS scripts to VueJS Components
----------------------------------------------------------
https://stackoverflow.com/questions/45047126/how-to-add-external-js-scripts-to-vuejs-components
https://forum.vuejs.org/t/how-to-load-and-use-an-external-js-that-is-not-in-module-format/25617/7

Подключение перпроцессоров (CSS)
================================
https://vuetifyjs.com/en/styles/colors/#sass-color-pack
https://github.com/webpack-contrib/sass-loader

npm install sass-loader sass webpack --save-dev