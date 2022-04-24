# `Tasks-app`
---
#### Descripcion
+ Tasks-app es un aplicacion para crear y administrar tus tareas diarias de una forma facil y rapida.
+ Tasks-app esta construida con react y su persistencia de datos depende de localstorage.
#### Scripts 
+ npm run start -> Arranca el proyecto en un cervidor  local.
+ npm run build -> Compila el proyecto para produccion
+ predeploy -> Este comando es se ejecutara siempre que detecte que el comando deploy se ejecuto(por eso el pre), es este caso lo que hara es ejecutar el comando buil para compilar para que despues deploy hago lo que deba. 
+ npm run deploy ->Toma el compilado para enviarlo a github. En este caso la app esta conectada a github por lo que este comando no nos dara la esperada carperta preparada por react en cambio el compilado estatico sera subido directamante a github para ser presentado en github-pages.
### Dependencias
+ create-react-app -> Instala todo lo necesario para trabajar con react.
+ gh-pages -> Nos ayuda a pasar la compilacion directamaente a github-pages en forma estatica.