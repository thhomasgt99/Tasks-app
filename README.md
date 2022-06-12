# `Tasks-app`
---
#### Descripcion
+ Tasks-app es un aplicacion para crear y administrar tus tareas diarias de una forma facil y rapida.
+ Tasks-app esta construida con react y su persistencia de datos depende de localstorage.
---
#### Scripts 
+ npm run start -> Arranca el proyecto en un cervidor local.
+ npm run build -> Compila el proyecto para produccion.
+ predeploy -> Este comando se ejecutara siempre que detecte que el comando deploy se ejecuto(por eso el pre), es este caso lo que hara es ejecutar el comando buil para compilar para que despues deploy hago lo que deba. Predeploy se ejecutara primero que deploy.
+ npm run deploy ->Toma el compilado para enviarlo a github gracias a la herramienta gh-pages.
---
### Dependencias
+ create-react-app -> Instala todo lo necesario para trabajar con react.
+ gh-pages -> Nos ayuda a pasar la compilacion directamaente a github-pages en forma estatica. Su forma de actuar es que embiara a github la carpeta de compilado(incluso si esta en gitignore alparecer) pero sobre una rama que creara github llamada gh-pages que sera de donde github-pages tomara los archivos estaticos para presentarlos.
##### *Nota: gh-pages necesita la confiuracion del packcage.json homepage para montar la ruta de github-pages.*
##### *Nota: Para que se vean los cambios en github-pages devemos siempre ejecutar 'npm run build', 'npm run deploy' y luego mandar los cambios normalmente, esto para crear el compilado en local y luego que la herramienta gh-pages suba ese compilado a la rama con el mismo nombre.*
##### *Nota: alparecer puedo ahora solo correr el comanfo deploy y por defecto se ejecutara el predeploy que es otro comando creado por nosotros para que ejecute los comandos necesarios antes del deploy*