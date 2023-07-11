const autos = [
   {
     modelo: 'nissan',
     color: 'azul',
     peso: 1500,
     vender: function() {
       return `El ${this.modelo} fue vendido el día ${new Date().toLocaleDateString()}`;
     }
   },
   {
     modelo: 'Audi',
     color: 'blanco',
     peso: 1700,
     vender: function() {
       return `El ${this.modelo} fue vendido el día ${new Date().toLocaleDateString()}`;
     }
   },
   {
     modelo: 'Mazda',
     color: 'rojo',
     peso: 1800,
     vender: function() {
       return `El ${this.modelo} fue vendido el día ${new Date().toLocaleDateString()}`;
     }
   }
 ];
 
 const numeroAuto = prompt('Ingrese el número 1,2,3 para saber el auto :');
 
 const autoEncontrado = autos.find((auto, index) => (index + 1).toString() === numeroAuto);
 
 if (autoEncontrado) {
   console.log(autoEncontrado.vender());
 } else {
   console.log('Número de auto inválido.');
 }