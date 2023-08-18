let ingrese= prompt(" jugador1: 1=🪨 2=🧻 o 3=✂️")
let ingrese1= prompt("jugador2: 1=🪨 2=🧻 o 3=✂️")

if(ingrese==1 && ingrese1==2){
    document.write("Gano:🧻");    
}else if(ingrese==1 && ingrese1==3){
    document.write("Gano: 🪨");
}else if(ingrese==2 && ingrese1==3){
    document.write("Gano ✂️");


}else if(ingrese==2 && ingrese1==1){
    document.write("Gano: 🧻");
}else if(ingrese==3 && ingrese1==2){
    document.write("Gano ✂️");
}else if(ingrese==3 && ingrese1==1){
    document.write("Gano: 🪨");
}
   
