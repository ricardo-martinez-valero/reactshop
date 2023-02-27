Mover todo a src. Se debe configurar con un nuevo archivo como:
jsconfig.json

"compilerOptions": {
        "baseUrl": "src", -> donde va a tomar la base
        "paths": {
            "@pages": [ -> los alias
                "pages/" 
            ]
        }

se debe configurar otro archivo con el standar eslint. Archivo
.eslintignore, colocar node_modules
usar el archivo .eslintrc.js, y colocar los module.exports
install dependences

npm i prettier eslint-plugin-prettier eslint-plugin-jsx-a11y eslint-config-prettier eslint-config-next

para usar sass en next.js
npm i sass

sass dentro de next tiene otra estructura, primero cambiar por .module los estilos
segundo: styles.menu o styles['navbar-right'], esto es para que el guión medio no de conflictos

imagen: para las imagenes, hay que usar un framework, para añadirle una capa de performance, solo:
import Imagen from 'next/image'