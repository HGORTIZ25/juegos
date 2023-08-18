function limpiar1(){
    document.getElementById("contenido").reset();
    
}

function jugar11(){
    
    let num= parseInt(document.getElementById("numero").value);
    let a=Math.floor(Math.random()*100+1);
    
    
    
    

    document.getElementById("resultado2").innerHTML=(`${a}`);
    if(num==a){
        document.getElementById("resultado1",).innerHTML=(`Ganaste🥇num:${a}`) ;
    }else if(Math.abs(num-a)<=10){
        document.getElementById("resultado1",).innerHTML=(" cliente🔥 ") ;
    }else if(num<=0){
        document.getElementById("resultado1").innerHTML=("se congelo🧊 ") ;
    }else if(num>=101){
        document.getElementById("resultado1").innerHTML=("se congelo🧊 ") ;
    }else{
        document.getElementById("resultado1").innerHTML=("frio ☃️") ;
    }
    
}
        
