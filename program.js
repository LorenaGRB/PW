function changeMessage(elementoArr) {
    
    setInterval(function(indexOfTrue=locationOfMessage(elementoArr)){ 
        changeClass(indexOfTrue,"oculto");
    }, 3000);
}

function locationOfMessage(arr) {
    let cantidad = arr.length;
    let array=[];
    for(i=0;i!=cantidad;i++){
        arr.forEach((element,index)=> {
            array[index]=document.getElementById(`op${index+1}`).classList.contains("oculto");
    });
    console.log(array); 
    return array.indexOf(false);
    }
}
function changeClass(indexOfTrue,clase){
    document.getElementById(`op${indexOfTrue+1}`).classList.add(clase);
    console.log(document.getElementById(`op${indexOfTrue+1}`));
    if(indexOfTrue==elementoArr.length-1){
        console.log("1");
        document.getElementById(`op${1}`).classList.remove(clase);
    }else{
        console.log("2");
        document.getElementById(`op${indexOfTrue+2}`).classList.remove(clase);
        console.log(document.getElementById(`op${indexOfTrue+2}`));
    }
}
let elemento=document.querySelectorAll(".cincuenta");
let elementoArr = Array.from(elemento);
changeMessage(elementoArr);