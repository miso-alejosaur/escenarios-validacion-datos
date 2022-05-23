# Estrategias usadas

## Pool de datos a priori
Para esta estrategia, se generó en mockaroo [este esquema](https://www.mockaroo.com/schemas/415336), el cual contiene valores tanto válidos como inválidos para cada uno de los campos que componen el formulario de creación de "tags" en ghost; se tuvo cuidado que para los valores generados para los campos campos que tienen validación por longitud, los valores válidos tuvieran longitud de n ó n-1, y los campos inválidos tuvieran longitud de n+1 ó n+2, donde n es el valor teórrico máximo de longitud para este campo; esto con el objetivo de realizar casos de prueba de frontera.

Posteriormente, con este esquema se creó un archivo JSON y se alojó en el directorio fixtures correspondiente a las pruebas creadas en cypress para datapool a priori. Con estos datos, se crearon escenarios de prueba sobre el formulario tags, el detalle de cada escenario creado puede ser encontrado en la wiki de este repo ([escenarios con datos a priori](https://github.com/miso-alejosaur/escenarios-validacion-datos/wiki/Detalle-Escenarios#escenarios-con-datos-a-priori)).

## Pool de datos (pseudo)aleatorio dinámico

## Escenario aleatorio
