alert("Bienvenido al sistema de cobro... COBRO BIEN, ingrese el importe por favor... ")
let costo_producto = parseInt(prompt("Ingresá el costo del producto"));
let pago = parseInt(prompt("¿Con cuanto dinero abona ?"));
const vuelto = pago - costo_producto;


if (pago > costo_producto) {
    alert("Su vuelto es $" + vuelto + " pesos. Muchas gracias por su compra. ") 
}
else {
    alert("Revisa lo que me estas dando, te falta plata.")
}
if (pago == costo_producto) {
    alert("Gracias por abonar justo, que tengas Buena semana.")
}