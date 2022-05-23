# Estrategias usadas

## Pool de datos a priori
Para esta estrategia, se generó en mockaroo [este esquema](https://www.mockaroo.com/schemas/415336), el cual contiene valores tanto válidos como inválidos para cada uno de los campos que componen el formulario de creación de "tags" en ghost; se tuvo cuidado que para los valores generados para los campos campos que tienen validación por longitud, los valores válidos tuvieran longitud de n ó n-1, y los campos inválidos tuvieran longitud de n+1 ó n+2, donde n es el valor teórrico máximo de longitud para este campo; esto con el objetivo de realizar casos de prueba de frontera.

Posteriormente, con este esquema se creó un archivo JSON con 200 tuplas y se alojó en el directorio fixtures correspondiente a las pruebas creadas en cypress para la estrategia de datapool a priori. Con estos datos, se crearon escenarios de prueba sobre el formulario tags usando diferentes combinaciones de los datos generados, y revisando el resultado con métodos genéricos parametrizados para oráculo positivo y negativo, el detalle de cada escenario creado puede ser encontrado en la wiki de este repo ([escenarios con datos a priori](https://github.com/miso-alejosaur/escenarios-validacion-datos/wiki/Detalle-Escenarios#escenarios-con-datos-a-priori)).

Adicionalmente, en el archivo cypress.json, ubicado en el subdirectorio pool-a-priori de este repositorio, se encuentra la llave de configuración `a_priori_runs_tags`, la cual puede ser modificada para indicar a Cypress cuántas de las filas del datapool se desea que use en cada escenario de pruebas; no sobra aclarar que a mayor número de filas usadas, mayor es el tiempo de ejecución, pero así mismo mayor es la cantidad de datos probados, haciendo más probable la detección de algún posible error relacionado a datos; un número alto de columnas puede ser usado para aprovechar una máquina en desuso, u horas máquina en horarios que se encuentre sin uso, como noches o fines de semana.

## Pool de datos (pseudo)aleatorio dinámico

## Escenario aleatorio
