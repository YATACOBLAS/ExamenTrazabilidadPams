# **FRONTEND**

## **WEB STATIC** =>
name: front -- -  en realidad cualquier nombre, no es relevante
crearlo anticipadamente, 10 min o 20 min. el archivos pipeline.yml se creara solo, no es necesario crear uno,
al hacer push debe ser desplegado en el web static implementado y al cual se apunta

# **BACKEND**
los servicios deben ser creados en este orden y anticipadamente
NOTA::: crearlo anticipadamente 30 min 0 25 min para que las task del release puede detectar o reconocer
-azure container
-mysql-server
-web app service

NOTA :el alcance de la coneccion del servicio es importante porque su alcance nos permnitira desplegar el backend, como registrar, la imagen de docker y desplegar a la api pams

**mysql-server :> name= pams
**web app service :> name= apipams
**container-registre :> name= pamsregistry  (activar el usuario y contraseña y compiar la contraseña 1 o 2)


*****TASK

build image::
-Dockerfile: se debe ubicar en la carpeta o direccion que esta el dockerfile en el repo.
-la imagen se debe manejar con dato fijo porque pondra otro nombre:  **pamsregistry.azurecr.io/examenes:latest**

NOTA:: este task solo funbciona con la subscripcion del servicio con alcance que ahora no se puede crera solo lo tiene CREADO S****F****, 
porque se creo antes de que quitaran ese privilegio a los estudiantes
push image::
-azure container: pamsregistry


NOTA: este es un yml que indica los recursos necesario que se tomara para depsplegar la apipams, porque la apipams aun no esta implementado con la imagen solo esta creado
ARM Template deployment: ACI:::
-Template:seleccionamos en la carpeta ARMTemplates-> ContainerInstance
-Template parameters: param-ContainerInstance
-Override template parameters == ..... registryPassword <--- debes de colocar el password de container registro --->

Azure Web App on Container Deploy: apipams::::::
-appname: apipams(debe de detectar porque ya pasaron los minutos necesarios)
-image pamsregistry.azurecr.io/examenes:latest





# NOTA
-cuando se crea un nuevo release se debe de deploy, 
-siempre editar pipeline y no el release, porque nop se aplicara para los demas realease

