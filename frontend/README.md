# ad-project

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
sudo docker-compose exec frontend bash
$ vue create app
// navigate to new project directory
$ cd app
Теперь, когда у вас есть созданный проект, вы можете добавить Vuetify Vue CLI пакет с помощью cli.

$ vue add vuetify

npm install vue-router
npm run serve

http://localhost:8080

// vue.config.js
module.exports = {
    // options...
    devServer: {
        disableHostCheck: true
    }
}


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