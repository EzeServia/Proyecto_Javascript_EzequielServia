//funcion principal del s
function cobrar(costo_producto, pago){
  let vuelto = pago - costo_producto;
  return vuelto;
}
//En ésta función multiplico el valor ingresado por el cliente por el valor del "dolar blue", para convertirlo a pesos.
function cobrar_dolar(costo_producto, pago_dolar){
  let vuelto = (pago_dolar * 730) - costo_producto;
  return vuelto;
}
//En ésta funcion divido el costo del producto para llevarlo al valor en dólare
function cobrar_d(costo_producto, pago_dolar){
  let vuelto = (pago_dolar) - (costo_producto / 730);
  return vuelto;
}
function cobrador(){
let forma_pago;

  while ( forma_pago != "salir") {
   /*Este código se va a repetir de manera indefinida hasta que el usuario
      ingrese "Salir" en el siguiente prompt*/
    alert("Bienvenido al sistema de cobros... COBRO BIEN, por favor, indique de que forma quiere abonar...  ")
    forma_pago = prompt("Ingrese su forma de pago.\n-pesos\n-dolares\n-salir");
    // Convierte el prompt del usuario en minúscula para aseguranos que siempre llegue en minúsculas
    forma_pago = forma_pago.toLowerCase();

    switch (forma_pago) {
    case "pesos":
      costo_producto = parseInt(prompt("Ingresá el costo del producto:"));
      pago = parseInt(prompt("¿Con cuanto dinero abona ?"));    
        if (pago > costo_producto) {
          alert("Su vuelto es $" + cobrar(costo_producto, pago)  + " pesos. Muchas gracias por su compra. ")
        }
        if (pago == costo_producto) {
          alert("Gracias por abonar justo, que tengas Buena semana.")
        }
        if (pago < costo_producto){
            alert("Revisa lo que me estas dando, te falta plata.")
        }
        break;
    case "dolares":
        alert("El Cambio de divisas se realiza con un valor DOLAR BLUE de $730 ")
        costo_producto = parseInt(prompt("Ingresá el costo del producto en pesos:"));
        pago_dolar = parseInt(prompt("¿Con cuantos dolares abona ?"));
        forma_pago_dolar = prompt("Queres recibir tu vuelto en dolares ?\n- SI\n- NO");
      if((forma_pago_dolar == "SI") || (forma_pago_dolar == "si" )){
        alert("Su vuelto en DOLARES es...USD" + cobrar_d(costo_producto, pago_dolar) + "\nMuchas gracias por elegirnos.");}
        
      else {
        alert("Su vuelto en PESOS es... $" + cobrar_dolar(costo_producto, pago_dolar) + "\nMuchas gracias por elegirnos.");
      }
      break;
    case "salir":
        break;
    default:
        alert("Los datos son incorrectos, intentalo nuevamente.");
      }
    }
}