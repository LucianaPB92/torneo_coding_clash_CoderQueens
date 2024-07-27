# torneo_coding_clash_CoderQueens

# Pateando al arco

Guty juega como defensor en un equipo de fútbol.

El equipo no se caracteriza particularmente por sus habilidades en la cancha, sino por sus habilidades fuera de ella.
Suelen ganar los partidos “en el escritorio”, por ejemplo apelando a que el rival completó mal la ficha de inscripción.

El nuevo plan del equipo es incorporar un arquero robot.
Debes ayudarlos a programar al robot, escribiendo una función llamada `arco()` que, dada la posición `(x, y )` donde la pelota llega al arco, indique si ese tiro resulta en **GOL**, si es **PALO**, o si se va **AFUERA**.

El origen `(0, 0)` es la esquina inferior izquierda del arco, mientras que la esquina superior derecha está en `(732, 232)`.
Todas las coordenadas son siempre en centímetros.

Para que sea **GOL**, la coordenada **X** debe ser estrictamente mayor que 0, y estrictamente menor que 732. En cambio, la coordenada **Y** debe ser estrictamente menor que 232.

Si no es GOL, pero la coordenada **X** está entre 0 y 732 inclusive, mientras que la coordenada **Y** es menor o igual que 232, entonces se considera **PALO**.

# Preparando la receta

Ricardo es un excelente cocinero.

No hay receta que no sea capaz de preparar.
¡El problema es que a menudo olvida comprar los ingredientes!

Por esta razón, decidió preparar un listado de los ingredientes que tiene en la heladera.
La heladera contiene en total `H` ingredientes. Además de este, decidió preparar un listado de los ingredientes que necesita para la receta que le interesa cocinar. Para esta receta se necesitan `R` ingredientes.

Como es algo desorganizado al redactar, a veces hay ingredientes repetidos (de forma innecesaria) en estos listados.

Debes ayudar a Ricardo escribiendo una función que determine cuántos ingredientes le faltan, y (para puntaje completo) cuáles son.

### Objetivo

- Debes implementar la función `receta(heladera,ingredientes,faltantes)`, que dados dos arreglos de strings `heladera` e `ingredientes` con todos los ingredientes presentes en la heladera y los necesarios para la receta, respectivamente; retorne la cantidad de ingredientes que hace falta comprar para que Ricardo prepare la receta.
- Además, la función debe almacenar un listado de estos ingredientes (sin repetir) en el parámetro faltantes.
- Cualquier orden en el que se listen los ingredientes es válido.