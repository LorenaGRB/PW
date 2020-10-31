function changeMessage(elementoArr) {  
    setInterval(function(indexOfTrue=locationOfMessage(elementoArr)){         
        document.getElementById(`op${indexOfTrue+1}`).classList.add("d0");
        setTimeout(() => {
            document.getElementById(`op${indexOfTrue+1}`).addEventListener("transitionend",changeClass(indexOfTrue,"oculto"));
            setTimeout(() => {
                if(indexOfTrue==elementoArr.length-1){
                    document.getElementById(`op${1}`).classList.remove("d0");
            
                }else{
                    document.getElementById(`op${indexOfTrue+2}`).classList.remove("d0");
                }  
            }, 1000);
            
        }, 1000);
    }, 5000);
}
function locationOfMessage(arr) {
    let cantidad = arr.length;
    let array=[];
    for(i=0;i!=cantidad;i++){
        arr.forEach((element,index)=> {
            array[index]=document.getElementById(`op${index+1}`).classList.contains("oculto");
    });
    return array.indexOf(false);
    }
}
function changeClass(indexOfTrue,clase){
    document.getElementById(`op${indexOfTrue+1}`).classList.add(clase);
    if(indexOfTrue==elementoArr.length-1){
        document.getElementById(`op${1}`).classList.remove(clase);
    }else{
        document.getElementById(`op${indexOfTrue+2}`).classList.remove(clase);
    }
    console.log(`op${indexOfTrue+1}`);
}

let elemento=document.querySelectorAll(".cincuenta");
let elementoArr = Array.from(elemento);
changeMessage(elementoArr);