



/*Guty juega como defensor en un equipo de fútbol.

El equipo no se caracteriza particularmente por sus habilidades en la cancha, sino por sus habilidades fuera de ella.
Suelen ganar los partidos “en el escritorio”, por ejemplo apelando a que el rival completó mal la ficha de inscripción.

El nuevo plan del equipo es incorporar un arquero robot.
Debes ayudarlos a programar al robot, escribiendo una función llamada `arco()` que, dada la posición `(x, y )` donde la pelota llega al arco, indique si ese tiro resulta en **GOL**, si es **PALO**, o si se va **AFUERA**.

El origen `(0, 0)` es la esquina inferior izquierda del arco, mientras que la esquina superior derecha está en `(732, 232)`.
Todas las coordenadas son siempre en centímetros.

Para que sea **GOL**, la coordenada **X** debe ser estrictamente mayor que 0, y estrictamente menor que 732. En cambio, la coordenada **Y** debe ser estrictamente menor que 232.

Si no es GOL, pero la coordenada **X** está entre 0 y 732 inclusive, mientras que la coordenada **Y** es menor o igual que 232, entonces se considera **PALO**.*/

// let x = 0;
// let y= 0;
// let coordenadaX= Number(prompt("Ingrese coordenada X "));
// let coordenadaY = Number(prompt("Ingrese coordenada Y "));


function arco() {
    let coordenadaX= Number(prompt("Ingrese coordenada X "));
    let coordenadaY = Number(prompt("Ingrese coordenada Y "));
    if (isNaN(coordenadaX) || isNaN(coordenadaY)) {
        alert ("EL VALOR INGRESADO NO ES CORRECTO")
    }else{
        if (coordenadaX > 0  && coordenadaX < 732 && coordenadaY <232) {
           alert("GOOOOOOL")
        }else if (coordenadaX >= 0 && coordenadaX <= 732 && coordenadaY <=232){
            alert("PALOO")
        }
        else{
            alert("AFUERA, PERDISTE,ANDA PALLÁ BOBO")
        }  
    }
}


// arco()

//ejercicio 2

let heladera = ["leche","huevos","manteca","tomate","mayonesa","carne"]
let ingredientes = ["leche","harina","azucar","huevos","harina","manteca"]
function receta(heladera,ingredientes,faltantes) {
    let faltantes = heladera.filter((item)=> item === ingredientes[item])
    console.log(faltantes)
}

