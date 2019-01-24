# Vue-React
Haciendo union y viendo que tal sale todo, lo bueno empieza ahora

# Primeros pasos

## Crear el proyecto con react-native
```sh
$ react-native init <projectName> --version 0.55.4
```
> La version 0.55.4 es la recomendada para implementar vue-native en el proyecto

### Luego debemos crear otra carpeta pero con la version mas actual de react-native
```sh
$ mkdir <nombre-de-la-carpeta>
$ cd <nombre-de-la-carpeta>
$ react-native init <projectName> /* Recomendable nombra el proyecto igual que el proyecto con la version(0.55.4)
```

Cuando ya se halla creado el proyecto con la version mas actual de react-native (0.57.3), dentro se nos habra creado una carpeta llamada ** android **, debemos por cuenta propia copiar la carpeta ** android ** y pegarla en nuestro proyecto que creamos con la version (0.55.4), y reemplazamos.

Ya podemos entrar al proyecto que creamos con la versión de react-native (0.55.4)
```sh
$ cd <nombre-de-la-carpeta>
$ npm install vue-native-core vue-native-helper --save
$ npm install vue-native-scripts --save-dev
```