function saludar() {
    let nombre = prompt("Ingresa tu nombre");
    alert("Hola "+nombre+", te doy la bienvenida a mi tienda!");
}

saludar();

let productos = '';
let cantidad= 0;
let precio = 0; 
let seguirComprando = false;
let precioTotal = 0;
let cantidadTotal = 0;
let descuento = 0;

do {
    productos = prompt("Ingresa el producto que deseas adquirir: (Llevando 6 productos o más, tienes un 10% de descuento y llevando 10 productos o más, tienes un 25% de descuento)\n 1. Zapatillas\n 2. Camperas\n 3. Pantalones");

    switch (productos) {
        case "1":
            alert("Has seleccionado Zapatillas");
            let repetirZapas = true;
            do {
                let zapatillas = prompt("Ingresa el tipo de zapatos que deseas adquirir:\n 1. Nike\n 2. Adidas");
                if (zapatillas == "1"){
                    alert("Has seleccionado Zapatillas NIKE");
                    let repetirNike = true;
                    do {
                        let nike = prompt("Ingresa el calzado NIKE que deseas adquirir:\n 1. Jordan: $125\n 2. Futbol: $100\n 3. Running: $130");
                        if (nike == "1"){
                            alert("Has seleccionado Zapatillas NIKE Jordan");
                            precio = 125;
                            cantidad = parseInt(prompt('Cuantas unidades queres comprar?'));
                            repetirNike = false;        
                        }else if (nike == "2"){
                            alert("Has seleccionado Zapatillas NIKE Futbol");
                            precio = 100;
                            cantidad = parseInt(prompt('Cuantas unidades queres comprar?'));
                            repetirNike = false;       
                        }else if (nike == "3"){
                            alert("Has seleccionado Zapatillas NIKE Running");
                            precio = 130;
                            cantidad = parseInt(prompt('Cuantas unidades queres comprar?'));
                            repetirNike = false;
                        }else{
                            alert("Debes seleccionar un zapatillas del listado.");
                        }
                    }while (repetirNike);
                    repetirZapas = false;
    
                }else if (zapatillas == "2"){
                    alert("Has seleccionado Zapatillas ADIDAS");
                    let repetirAdidas = true;
                    do {
                        let adidas = prompt("Ingresa el calzado ADIDAS que deseas adquirir:\n 1. Basquet: $150\n 2. Futbol: $100\n 3. Running: $70");
                        if (adidas == "1"){
                            alert("Has seleccionado Zapatillas ADIDAS basquet");
                            precio = 150;
                            cantidad = parseInt(prompt('Cuantas unidades queres comprar?'));
                            repetirAdidas = false;
                        }else if (adidas == "2"){
                            alert("Has seleccionado Zapatillas ADIDAS Futbol");
                            precio = 100;
                            cantidad = parseInt(prompt('Cuantas unidades queres comprar?'));
                            repetirAdidas = false;
                        }else if (adidas == "3"){
                            alert("Has seleccionado Zapatillas ADIDAS Running");
                            precio = 70;
                            cantidad = parseInt(prompt('Cuantas unidades queres comprar?'));
                            repetirAdidas = false;
                        }else{
                            alert("Debes seleccionar un zapatillas del listado.");
                        }
                    }while (repetirAdidas);
                    repetirZapas = false;

                } else {
                    alert("Debes seleccionar un tipo de zapatilla del listado.");
                }
            }while (repetirZapas);
            break;

        case "2":
            alert("Has seleccionado Camperas");
            let repetirCamperas = true;
            do{
                let camperas = prompt("Ingresa el tipo de camperas que deseas adquirir:\n 1. Deportivas\n 2. Casuales\n 3. Cuero");
                if (camperas == "1"){
                    alert("Has seleccionado Camperas Deportivas");
                    let repetirCamperasDeportivas = true;
                    do{
                        let deportivas = prompt("Elige el color de la campera deportiva que deseas adquirir:\n 1. Amarillo: $50\n 2. Azul: $50\n 3. Rojo: $50");
                        if (deportivas == "1"){
                            alert("Has seleccionado Camperas Deportivas Amarilla");
                            precio = 50;
                            cantidad = parseInt(prompt('Cuantas unidades queres comprar?'));
                            repetirCamperasDeportivas = false;
                        }else if (deportivas == "2"){
                            alert("Has seleccionado Camperas Deportivas Azul");
                            precio = 50;
                            cantidad = parseInt(prompt('Cuantas unidades queres comprar?'));
                            repetirCamperasDeportivas = false;
                        }else if (deportivas == "3"){
                            alert("Has seleccionado Camperas Deportivas Roja");
                            precio = 50;
                            cantidad = parseInt(prompt('Cuantas unidades queres comprar?'));
                            repetirCamperasDeportivas = false;
                        }else{
                            alert("Debes seleccionar una campera del listado.");
                        }
                    }while (repetirCamperasDeportivas);
                    repetirCamperas = false;
    
                }else if (camperas == "2"){
                    alert("Has seleccionado Camperas Casuales");
                    let repetirCamperasCasuales = true;
                    do {
                        let casuales = prompt("Elige el color de la campera casual que deseas adquirir:\n 1. Negro: $30\n 2. Azul: $40\n 3. Blanco: $35");
                        if (casuales == "1"){
                            alert("Has seleccionado Camperas Casual negra");
                            precio = 30;
                            cantidad = parseInt(prompt('Cuantas unidades queres comprar?'));
                            repetirCamperasCasuales = false;
                        }else if (casuales == "2"){
                            alert("Has seleccionado Camperas Casual azul");
                            precio = 40;
                            cantidad = parseInt(prompt('Cuantas unidades queres comprar?'));
                            repetirCamperasCasuales = false;
                        }else if (casuales == "3"){
                            alert("Has seleccionado Camperas Casual blanca");
                            precio = 35;
                            cantidad = parseInt(prompt('Cuantas unidades queres comprar?'));
                            repetirCamperasCasuales = false;
                        }else{
                            alert("Debes seleccionar una campera del listado.");
                        }
                    }while (repetirCamperasCasuales);
                    repetirCamperas = false;
    
                }else if (camperas == "3"){
                    alert("Has seleccionado Camperas Cuero");
                    let repetirCamperasCuero = true;
                    do {
                        let cuero = prompt("Elige el color de la campera cuero que deseas adquirir:\n 1. Negro: $120\n 2. Marron: $150\n 3. Gris: $100");
                        if (cuero == "1"){
                            alert("Has seleccionado Camperas Cuero negra");
                            precio = 120;
                            cantidad = parseInt(prompt('Cuantas unidades queres comprar?'));
                            repetirCamperasCuero = false;
                        }else if (cuero == "2"){
                            alert("Has seleccionado Camperas Cuero marron");
                            precio = 150;
                            cantidad = parseInt(prompt('Cuantas unidades queres comprar?'));
                            repetirCamperasCuero = false;
                        }else if (cuero == "3"){
                            alert("Has seleccionado Camperas Cuero gris");
                            precio = 100;
                            cantidad = parseInt(prompt('Cuantas unidades queres comprar?'));
                            repetirCamperasCuero = false;
                        }else{
                            alert("Debes seleccionar una campera del listado.");
                        }
                    }while (repetirCamperasCuero);
                    repetirCamperas = false;
                }else{
                    alert("Debes seleccionar un tipo de campera del listado.");
                }
            }while (repetirCamperas);
            break;

        case "3":
            alert("Has seleccionado Pantalones");
            let repetirPantalones = true;
            do {
                let pantalones = prompt("Ingresa el tipo de pantalones que deseas adquirir:\n 1. Deportivos\n 2. Jeans\n 3. Casuales");
                if (pantalones == "1"){
                    alert("Has seleccionado Pantalones Deportivos");
                    let repetirPantalonesDeportivos = true;
                    do {
                        let pantalonesDeportivos = prompt("Elige que tipo de pantalones DEPORTIVOS deseas adquirir:\n 1. Largo: $50\n 2. Corto: $30");
                        if (pantalonesDeportivos == "1"){
                            alert("Has seleccionado Pantalones Deportivos Largo");
                            precio = 50;
                            cantidad = parseInt(prompt('Cuantas unidades queres comprar?'));
                            repetirPantalonesDeportivos = false;
                        }else if (pantalonesDeportivos == "2"){
                            alert("Has seleccionado Pantalones Deportivos Corto");
                            precio = 30;
                            cantidad = parseInt(prompt('Cuantas unidades queres comprar?'));
                            repetirPantalonesDeportivos = false;
                        }else{
                            alert("Debes seleccionar un pantalon del listado.");
                        }
                    }while (repetirPantalonesDeportivos);
                    repetirPantalones = false;
    
                }else if (pantalones == "2"){
                    alert("Has seleccionado Pantalones Jeans");
                    let repetirPantalonesJeans = true;
                    do{
                        let pantalonesJeans = prompt("Elige el color de los JEANS que deseas adquirir:\n 1. Azul claro: $40\n 2. Azul marino: $50\n 3. Negro: $30");
                        if (pantalonesJeans == "1"){
                            alert("Has seleccionado Pantalones Jeans Azul claro");
                            precio = 40;
                            cantidad = parseInt(prompt('Cuantas unidades queres comprar?'));
                            repetirPantalonesJeans = false;
                        }else if (pantalonesJeans == "2"){
                            alert("Has seleccionado Pantalones Jeans Azul marino");
                            precio = 50;
                            cantidad = parseInt(prompt('Cuantas unidades queres comprar?'));
                            repetirPantalonesJeans = false;
                        }else if (pantalonesJeans == "3"){
                            alert("Has seleccionado Pantalones Jeans Negro");
                            precio = 30;
                            cantidad = parseInt(prompt('Cuantas unidades queres comprar?'));
                            repetirPantalonesJeans = false;
                        }else{
                            alert("Debes seleccionar un pantalon del listado.");
                        }
                    }while (repetirPantalonesJeans);
                    repetirPantalones = false;
    
                }else if (pantalones == "3"){
                    alert("Has seleccionado Pantalones Casuales");
                    let repetirPantalonesCasuales = true;
                    do {
                        let pantalonesCasuales = prompt("Elige el color de los pantalones CASUALES que deseas adquirir:\n 1. Negro: $20\n 2. Marron: $25\n 3. Gris: $15");
                        if (pantalonesCasuales == "1"){
                            alert("Has seleccionado Pantalones Casuales Negro");
                            precio = 20;
                            cantidad = parseInt(prompt('Cuantas unidades queres comprar?'));
                            repetirPantalonesCasuales = false;
                        }else if (pantalonesCasuales == "2"){
                            alert("Has seleccionado Pantalones Casuales Marron");
                            precio = 25;
                            cantidad = parseInt(prompt('Cuantas unidades queres comprar?'));
                            repetirPantalonesCasuales = false;
                        }else if (pantalonesCasuales == "3"){
                            alert("Has seleccionado Pantalones Casuales Gris");
                            precio = 15;
                            cantidad = parseInt(prompt('Cuantas unidades queres comprar?'));
                            repetirPantalonesCasuales = false;
                        }else{
                            alert("Debes seleccionar un pantalon del listado.");
                        }
                    }while (repetirPantalonesCasuales);
                    repetirPantalones = false;

                }else{
                    alert("Debes seleccionar un tipo de pantalon del listado.");
                }
            }while (repetirPantalones);
            break;
        default:
            alert("No has seleccionado una opción");
            cantidad = 0;
    }

    while (isNaN(cantidad)) {
        alert('Debe agregar un numero');
        cantidad = parseInt(prompt('Cuantas unidades queres comprar?')); 
    }

    precioTotal += (cantidad * precio);
    cantidadTotal += cantidad;
    
    seguirComprando = confirm('Deseas seguir comprando?');
    
    } while (seguirComprando);

while (cantidadTotal >= 10 || cantidadTotal >= 6 || seguirComprando == false) {
        if (cantidadTotal >= 10) {
            descuento = (precioTotal * 0.25);
            alert(`El total de productos comprados es: ${cantidadTotal}`);
            alert('Tienes un 25% de descuento por llevar 10 o más productos');
            alert(`El subtotal a pagar es: U$D${precioTotal}\nDescuento: U$D${descuento}`);
            alert('El total a pagar con el descuento es de: U$D' + (precioTotal - descuento));
            break;
        }else if (cantidadTotal >= 6) {
            descuento = (precioTotal * 0.1);
            alert(`El total de productos comprados es: ${cantidadTotal}`);
            alert('Tienes un 10% de descuento por llevar 6 o más productos');
            alert(`El subtotal a pagar es: U$D${precioTotal}\nDescuento: U$D${descuento}`);
            alert('El total a pagar con el descuento es de: U$D' + (precioTotal - descuento));
            break;
        }else{
            alert(`El total de productos comprados es: ${cantidadTotal}`);
            alert(`El total a pagar es: U$D${precioTotal}`);
            break;
        }
    }

    function agradecimiento() {
        alert('Gracias por tu compra!\nVuelve pronto!');
    }

    agradecimiento();