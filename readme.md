# Estrategias usadas

## Pool de datos a priori
Para esta estrategia, se generó en mockaroo [este esquema](https://www.mockaroo.com/de38da40), el cual contiene valores tanto válidos como inválidos para cada uno de los campos que componen el formulario de creación de "tags" en ghost; se tuvo cuidado que para los valores generados para los campos campos que tienen validación por longitud, los valores válidos tuvieran longitud de n ó n-1, y los campos inválidos tuvieran longitud de n+1 ó n+2, donde n es el valor teórrico máximo de longitud para este campo; esto con el objetivo de realizar casos de prueba de frontera.

Posteriormente, con este esquema se creó un archivo JSON con 200 tuplas y se alojó en el directorio fixtures correspondiente a las pruebas creadas en cypress para la estrategia de datapool a priori. Con estos datos, se crearon escenarios de prueba sobre el formulario tags usando diferentes combinaciones de los datos generados, y revisando el resultado con métodos genéricos parametrizados para oráculo positivo y negativo, el detalle de cada escenario creado puede ser encontrado en la wiki de este repo ([escenarios con datos a priori](https://github.com/miso-alejosaur/escenarios-validacion-datos/wiki/Detalle-Escenarios#escenarios-con-datos-a-priori---tags)).

Una estrategia similar fue usada para probar los metadatos del sitio, en el formulario ubicado en settings -> general. Para este formulario se generó [este esquema](https://www.mockaroo.com/09065ca0), y su funcionamiento es similar al explicado para la creación de tags. Para ver en detalle los escenarios creados con base en este dataset, revise [el listado en la wiki](https://github.com/miso-alejosaur/escenarios-validacion-datos/wiki/Detalle-Escenarios#escenarios-con-datos-a-priori---site-meta).

Adicionalmente, en el archivo cypress.json, ubicado en el subdirectorio pool-a-priori de este repositorio, se encuentra la llave de configuración `a_priori_runs_tags`, la cual puede ser modificada para indicar a Cypress cuántas de las filas del datapool se desea que use en cada escenario de pruebas; no sobra aclarar que a mayor número de filas usadas, mayor es el tiempo de ejecución, pero así mismo mayor es la cantidad de datos probados, haciendo más probable la detección de algún posible error relacionado a datos; un número alto de columnas puede ser usado para aprovechar una máquina en desuso, u horas máquina en horarios que se encuentre sin uso, como noches o fines de semana.

## Pool de datos (pseudo)aleatorio dinámico

## Escenario aleatorio

Para esta estrategia nos apoyamos sobre la libreria Faker js, la cual nos ayuda a generar datos falsos aleatorios de forma automatica,se trato de usar de la forma mas coherente posible haciendo uso de la documentacion de faker js (https://fakerjs.dev/guide/) siguiendo asi para los datos de nombres utlizamos la api de Name de faker, para el uso de emails usamos la api de Internet de faker y para los datos donde se necesita mas precicion en cuanto a su longitud usamo la api de Random haciendo uso alpha donde nos pide la cantidad de caracteres.

Se optó por usar faker ya que es muy sencillo el uso, tiene una buena documentación y la generación de datos aleatorios es muy consistente

# Instrucciones de ejecución
Debido a la limitación de ghost de no permitir más de 100 inicios de sesión por hora, se separaron los escenarios en tres carpetas, una por cada estrategia usada. A continuación encontrará instrucciones genéricas para ejecutar los escenarios de las 3 estrategias, y posteriormente especificidades de cada una de estas.

## Instrucciones generales
Para la creación de estos test, se usó la versión 4.44.0 de Ghost; para ejecutar esta versión, ubíquese mediante consola en el directorio donde tenga instalado Ghost, y ejecute los siguientes comandos:
```
ghost uninstall
ghost install 4.44.0 -local
```
Cuando la instalación finalice, se iniciará la ejecución de Ghost en `http://localhost:2368`, en caso que inicie en otro puerto o dirección, será necesario modificarlo en el archivo de configuración correspondiente a la estrategia que se va a ejecutar.

Ingrese a la url http://localhost:2368/ghost/ (si su instancia de Ghost se ejecutó en otro puerto, úselo); allí encontrará un formulario para crear un nuevo Sitio en ghost. En los campos "Site title" y "Full name" ingrese los datos que desee, en el campo "Email Address" ingrese `test@test.tt`, y en el campo "Password" ingrese `1234567890a.`. Estas son las credenciales configuradas en los escenarios creados. 
![imagen](https://user-images.githubusercontent.com/98656893/167307021-8f72da03-575a-4cdc-89a5-50dcf7e8a2eb.png)

### Nota: se recomienda ejecutar los pasos de las instrucciones generales antes de ejecutar las pruebas para cada una de las estrategias, esto con el objetivo de reiniciar el contador de logins, y devolver la aplicación a un estado inicial.

## Instrucciones pool de datos a priori
Tras realizar los pasos indicados en las instrucciones generales, mediante consola diríjase al subdirectorio `pool-a-priori` ubicado en este repositorio. Una vez allí, ingrese al archivo `cypress.json`, y dentro de este verifique que el puerto de la url base coincida con el puerto donde está ejecutando ghost en su máquina local; verifique también el usuario y contraseña, predefinidos por defecto con los valores `test@test.tt` y `1234567890a.` respectivamente; y por último, setee el valor de la configuración `a_priori_runs_tags` según la cantidad de ejecuciones con tuplas distintas que desee para cada escenario; se recomienda dejar el valor por defecto 1 ya que aumentar este número aumentará el tiempo necesario para la ejecución. 

Cuando confirme que todos los valores de configuración son los deseados, ejecute mediante consola el comando
```
sudo cypress run
```
Esto iniciará la ejecución de los test creados con la estrategia de pool de datos a priori.


## Instrucciones pool de datos aleatorio
Tras realizar los pasos indicados en las instrucciones generales, mediante consola diríjase al subdirectorio `pool-aleatorio` ubicado en este repositorio. Una vez allí, ingrese al archivo `cypress.json`, y dentro de este verifique que el puerto de la url base coincida con el puerto donde está ejecutando ghost en su máquina local; verifique también el usuario y contraseña, predefinidos por defecto con los valores `test@test.tt` y `1234567890a.` respectivamente. 

Cuando confirme que todos los valores de configuración son los deseados, ejecute mediante consola el comando
```
sudo cypress open
```
esto le abrira una ventana con los test de integracion disponibles (Member.spec.js,Post.spec.js) para correr uno darle click a uno para correr sus respectivos test, esto abrira una ventana de chorome donde se empezara a ejecutar los test
