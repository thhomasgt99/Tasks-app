🛠 app en construcción

# `Tasks-app`
---

### `Descripcion`
+ Tasks-app es un aplicación para crear y administrar tus tareas diarias de una forma fácil y rápida.
+ Tasks-app está construida con React y su persistencia de datos depende de Localstorage.
---

### `Scripts`
1. start : start arranca el proyecto con un servidor local en desarrollo.
2. build : build crea el compilado de producción.
3. predeploy: ejecuta "npm run build". Por ser un 'pre' se ejecutará por defecto cuando sea ejecutado 'deploy'
4. deploy: ejecuta "gh-pages -d build" para mandar el compilado a producción.
---

### `Dependencias`
+ create-react-app:  instala todo lo necesario para trabajar con React.
+ gh-pages: nos ayuda a compilar la app para ser presentada a través de github-pages en forma estática. Su forma de actuar es que configurar nuestros archivos para vivir sobre una rama que creara github llamada gh-pages que será de donde github-pages tomara los archivos estáticos para presentarlos.
---

### `Tecnologías`
- HTML
- CSS
- JavaScript
- React
- npm


### `URL`
- [Tasks-app](https://thhomasgt99.github.io/Tasks-app/)


##### *Nota: gh-pages necesita la confiuración del packcage.json "homepage" para montar la ruta de github-pages.*
##### *Nota: Para que se vean los cambios en github-pages debemos siempre ejecutar 'npm run build', 'npm run deploy' y mandar los cambios normalmente a github, esto para crear el compilado en local y luego que en github posicione los archivos en la rama con el nombre gh-pages.*
##### *Nota: Se puedo solo correr el comando 'deploy' y por defecto se ejecutara el 'predeploy' que es otro comando creado  para que ejecute los comandos necesarios antes del deploy*
