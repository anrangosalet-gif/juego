function jugar() {

    var maquillaje = ["labial", "rimel", "rubor", "sombras", "iluminador", "deliñador"];
    var respuesta;

    alert("Adivina el maquillaje");

    for (;;) {
        respuesta = prompt("Ingrese un producto de maquillaje solo en minusculas");
    
        if (maquillaje.includes(respuesta)) {
            alert("Muy bien, adivinaste el producto");
            break;
        } else {
            alert("ohhh, vuelve a intentarlo");
        }
    }
    
}