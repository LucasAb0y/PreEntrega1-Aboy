let cantidad
let precio
let desc
let compra
let pagar

precio = parseFloat(prompt("Ingresar Precio"));
cantidad = parseFloat(prompt("Ingresar Cantidad"));

compra = precio * cantidad ;
desc = compra * 0.20;
pagar = compra-desc;

console.log("El descuento es:"+desc);
console.log("El Monto a pagar es:"+pagar);