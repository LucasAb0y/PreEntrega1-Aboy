
const auto1 = { 
    modelo: 'nissan',
    color: 'azul',
    peso: 1500,
    vender: function(){
        return `El ${auto1.modelo} fue vendido el día ${new Date().toLocaleDateString()}`;
    }
 };
 
 const auto2 = { 
    modelo: 'Audi',
    color: 'blanco',
    peso: 1700,
    vender: function(){
        return `El ${auto2.modelo} fue vendido el día ${new Date().toLocaleDateString()}`
    }
 };
 
 const auto3 = { 
    modelo: 'Mazda',
    color: 'rojo',
    peso: 1800,
    vender: function(){
        return `El ${auto3.modelo} fue vendido el día ${new Date().toLocaleDateString()}`
    }
 };
 
 const numeroAuto = prompt('Ingrese el número del auto para saber:');
 if (numeroAuto === '1') {
    console.log(auto1.vender());
 } else if (numeroAuto === '2') {
    console.log(auto2.vender());
 } else if (numeroAuto === '3') {
    console.log(auto3.vender());
 } else {
    console.log('Número de auto inválido.');
 }
   