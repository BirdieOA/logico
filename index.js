const NOMBRE = "brendan";
const APELLIDO = "eich";
const EMPRESA1 = "netscape";
const EMPRESA2 = "brave";

document.querySelector(".boton").addEventListener("click", analizar);

function analizar() {
  const CAMPO1 = document.querySelector("#nombre").value.trim().toLowerCase();
  const CAMPO2 = document.querySelector("#apellido").value.trim().toLowerCase();
  const CAMPO3 = document.querySelector("#empresa").value.trim().toLowerCase();

//para hacer una comparacion/expresion antes que la otra hay que colocarla entre parentesis y esa es la que va a realizar primero
  if(CAMPO1 === NOMBRE && CAMPO2 === APELLIDO && (CAMPO3 === EMPRESA1 || CAMPO3 === EMPRESA2)){


      document.querySelector(".caja2").innerHTML = "Hola";
    } else {
        document.querySelector(".caja2").innerHTML = "Adios";
    }
    
    function escribir(valor) {
        const NOMBRE = (document.querySelector(".caja2").innerHTML = valor);
    }
    
}