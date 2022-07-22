### Inicializar nuestro proyecto

```
npm init --yes
```

### Instalar las librerias correspondietes

```
npm i express morgan promise-mysql cors
```

### Instalamos typescript

```
npm install -g typescript
```

### Creamos el archivo de configuracion typescript

```
tsc --init
<hr>
Dentro del archivo cambiamos
"target": "es2016" por "target": "es6"

"outDir": "./" por "outDir": "./build"
al final agregaremos "exclude": ["node_modules"]

despues ejecutar el comando tsc

```

### Agregamos los siguiente en el aparatado scripts en package.json

```
"build": "tsc -w",
    "dev": "nodemon build/index.js"
```

### Creamos las carpetas correspondientes

```
build

src-->controllers
src-->Routes

```

### SRC

```
1.-Dentro de src creamos el archivo index.ts en el cual configuramos el servidor
2.-Dentro de src creamos database.ts la cual condifuraremos para conectar a la base de datos
3.-Dentro de src creamos keys.ts dentro de este archivo damos el usuario,host,password y nombre de la base de datos, etc.
```
