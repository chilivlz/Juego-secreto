// Texto //



let numeroSecreto = 0;
let intentos;
let  listaNumeroSorteados =[]; //para que el numero generado no se repita
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;  
    return;

}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    

    console.log(intentos);
   
    console.log(numeroSecreto);

    asignarTextoElemento('p', numeroDeUsuario === numeroSecreto 
    ? `Acertaste el numero en ${intentos} ${(intentos ==1) ? 'vez' : 'veces'}`
    : numeroDeUsuario > numeroSecreto 
    ? 'Numero secreto es menor' 
    : 'Numero secreto es mayor'

     /* if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p','Acertaste el numero'); // para mostrar que acerto el numero //
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'Numero secreto es menor'); 
        }else{
            asignarTextoElemento('p','Numero secreto es mayor');
        }
    }
    return;

}*/
   
     );
     document.getElementById('reiniciar').removeAttribute('disabled'); //habilita el boton nuevo juego cuando aciertan//

      intentos++
     limpiandoCaja();
     return;
    
      }

      function limpiandoCaja(){
        document.querySelector('#valorUsuario').value = ''; // Esto es lo mismo 
        //Esto es lo mismo que esto y que lo de arriba
       /* let valorCaja = document.querySelector('#valorUsuario');
        valorCaja.value = '';*/
      }



    function generarNumeroSecreto() {
        let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; 

        console.log(numeroGenerado);
        console.log(listaNumeroSorteados);

        if (listaNumeroSorteados.length == numeroMaximo){
            asignarTextoElemento('p', 'Ya se sortearon todos los numero posibles');
            // texto cuando ya se utilizaron todos los numero del//

        } else{

        
        if (listaNumeroSorteados.includes(numeroGenerado)){
            //si e l numero ya existe deberiamos generar otro//
            return generarNumeroSecreto();



        }else{
            listaNumeroSorteados.push(numeroGenerado);// se guarda el numero generado para q ue no se repita
            return numeroGenerado;
        }
    }
    

}
    function condicionesIniciales(){
        asignarTextoElemento('h1', 'Juego del numero secreto ! ');
        asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`); 
        numeroSecreto = generarNumeroSecreto();
        intentos = 1;

    }

    function reiniciarJuego(){
      
        //Lmpiar caja
        limpiandoCaja();
        //Indicar Mensaje de intervalo de numeros
        //Genrar el numero aleatorio
        //inidicaliza el numero de intentos 
        condicionesIniciales();
        //Deshabilitar el boton de nuevo juego cuando queramos reiniarel juego
        document.querySelector('#reiniciar').setAttribute('disabled','true');
        
        

}

condicionesIniciales();




