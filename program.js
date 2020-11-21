//los que llevan clase d0 cambian de opacidad 1 a 0.Los que llevan "oculto" tiene display none.
//Los mensajes tiene como id op1,op2 y op3 correspondiente a cada uno d0.

function changeMessage(mensajeMostradoArr) {  

    setInterval(function(posicionMensajeMostrado=locationOfMessage(mensajeMostradoArr)){         
        let mensajeActual=posicionMensajeMostrado+1;
        let mensajeSiguiente=posicionMensajeMostrado+2;
        let ultimoMensaje=mensajeMostradoArr.length-1;
        
        document.getElementById(`op${mensajeActual}`).classList.add("d0");
        setTimeout(() => {
            document.getElementById(`op${mensajeActual}`).addEventListener("transitionend",changeClass(posicionMensajeMostrado,"oculto"));
            setTimeout(() => {
                if(posicionMensajeMostrado==ultimoMensaje){
                    document.getElementById(`op${1}`).classList.remove("d0");
                }else{
                    document.getElementById(`op${mensajeSiguiente}`).classList.remove("d0");
                }  
            }, 1000);
        }, 1000);
    }, 5000);
}
function locationOfMessage(mensajeMostradoArr) {
        let array=[];

        mensajeMostradoArr.forEach((element,index)=> {
            array[index]=document.getElementById(`op${index+1}`).classList.contains("oculto");
        });
    return array.indexOf(false);
    
}
function changeClass(posicionMensajeMostrado,clase){
        let mensajeActual=posicionMensajeMostrado+1;
        let mensajeSiguiente=posicionMensajeMostrado+2;
        let ultimoMensaje=mensajeMostradoArr.length-1;
        
    document.getElementById(`op${mensajeActual}`).classList.add(clase);
    if(posicionMensajeMostrado==ultimoMensaje){
        document.getElementById(`op${1}`).classList.remove(clase);
    }else{
        document.getElementById(`op${mensajeSiguiente}`).classList.remove(clase);
    }
}

let mensajeMostrado=document.querySelectorAll(".mensajeMostrado");
let mensajeMostradoArr = Array.from(mensajeMostrado);
changeMessage(mensajeMostradoArr);