# Vue-React
Haciendo union y viendo que tal sale todo, lo bueno empieza ahora

# Primeros pasos

## Crear el proyecto con react-native
```sh
$ react-native init <projectName> --version 0.55.4
```
> La version 0.55.4 es la recomendada para implementar vue-native en el proyecto

### Luego debemos crear otra carpeta
>  Dentro de esta carpeta debemos crear un proyecto con react-native con su version mas actual.
```sh
$ mkdir <nombre-de-la-carpeta>
$ cd <nombre-de-la-carpeta>
$ react-native init <projectName> /* Recomendable nombra el proyecto igual que el proyecto con la version(0.55.4)
```

Cuando ya se halla creado el proyecto con la version mas actual de react-native (0.57.3), dentro se nos habra creado una carpeta llamada `android`, debemos por cuenta propia copiar la carpeta  `android` y pegarla en nuestro proyecto que creamos con la version (0.55.4), y reemplazamos.

Ya podemos entrar al proyecto que creamos con la versión de react-native (0.55.4), y instalamos vue-native
```sh
$ cd <nombre-de-la-carpeta>
$ npm install vue-native-core vue-native-helper --save
$ npm install vue-native-scripts --save-dev
```
### Configurar react native package
creamos un archivo llamado `vueTransformerPlugin.js`
```javascript
// For React Native version 0.52 or later
var upstreamTransformer = require("metro/src/transformer");

// For React Native version 0.47-0.51
// var upstreamTransformer = require("metro-bundler/src/transformer");

// For React Native version 0.46
// var upstreamTransformer = require("metro-bundler/build/transformer");

var vueNativeScripts = require("vue-native-scripts");
var vueExtensions = ["vue"];

module.exports.transform = function({ src, filename, options }) {
	if (vueExtensions.some(ext => filename.endsWith("." + ext))) {
		return vueNativeScripts.transform({ src, filename, options });
  }
	return upstreamTransformer.transform({ src, filename, options });
};

```

Tambien debemos crear este archivo `rn-cli.config.js`, y agregar este codigo
```javascript
module.exports = {
	getTransformModulePath() {
		return require.resolve("./vueTransformerPlugin.js");
	},
	getSourceExts() {
		return ["vue"];
	}
};
```

### Renombrar el archivo
Como vemos en nuestro proyecto tenemos un archivo llamado `App.js` debemos renombrar el archivo `App.js` a `App.vue` pegarle este codigo.

```javascript
<template>
  <view class="container">
    <text class="text-color-primary">My Vue Native App</text>
    </view>
</template>

<style>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: blue;
}
</style>
```

# Corre la aplicación
```sh
react-native run-android
```