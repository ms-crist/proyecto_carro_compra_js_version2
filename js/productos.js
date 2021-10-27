
//información de productos que se muestra en sitio web
// imagen de producto, descripción, precio, Stock
  let productos = [];
	productos[0] = ["img/bola.jpg", "Bolas de pool", 50000, 5];
	productos[1] = ["img/billar3.jpg", "Paño de mesa", 55000, 3];
	productos[2] = ["img/mesa2.jpg", "Tacos de pool", 60000, 2];
	productos[3] = ["img/mesa1.jpg", "Mesa de pool", 350000, 2];


  /*   let div = document.getElementById("art")
    , titulo = div.getElementsByTagName("h6")
    , img = div.getElementsByTagName("img")
    , precio = div.getElementsByTagName("p");
  */


// ciclo para recorrer el arreglo de productos con la info a mostras en sitio web
// en la variable salida se construyen los elementos a mostrar en html


   /*  se inicilaizan las cantidades en cero para ir sumando los valores 
    agregar al carro */
    let cantidadBolas = 0;
    let cantidadPano = 0;
    let cantidadTaco = 0;
    let cantidadMesa = 0;
    let carro = 0;
    let envio = 0;

    let stockJb = 5; //Stock inicial bolas de pool
    let stockPm = 3; //Stock inicial paño de mesa
    let StockTac = 2; //Stock inicial taco de pool
    let StockMes = 2; //Stock inicial mesa de pool
    let precioBolas=50350; //precio bolas de pool agregando $350
    let precioPano=55350;  //precio paño de mesa agregando $350
    let precioTaco=60350;  //precio taco de pool agregando $350
    let precioMesa=350350;  //precio mesa de pool agregando $350

  
 

    //variable para desabilitar botón de compra al no estar logueado
    let botonComprar = document.querySelector("#btnComprar");
    botonComprar.disabled = true;

    /* let botonRestaurar = document.querySelector("#vaciar-carrito");
    botonRestaurar.disabled = true; */
    
    //variables para crear párrafo que muestre stock en el documento html
   
   
    let stockBolas = document.createElement("p");
    let stockPano = document.createElement("p");
    let stockTaco = document.createElement("p");
    let stockMesas = document.createElement("p"); 

    //función para agregar bolas de pool al carro de compras

    
    let comprarBolas = document.getElementById("btnBolas");
    comprarBolas.addEventListener("click", sumarBolas)
    
    function sumarBolas() {
        carro += 50350; //valor del producto, se suma al carro 
        envio += 1500; // valor del envío, se suma al total 
        stockJb -= 1; //stock del producto se resta del stock inicial
        let nombres = document.createElement("p");
        let nombre = document.createElement("p");
        let precioart = document.createElement("p");
        let final = document.createElement("p");
        let finalconEnvio = document.createElement("p");
        let finalenvio = document.createElement("p");
        
      
        let botonBolas = document.querySelector("#btnBolas");

        cantidadBolas++;
        if(cantidadBolas <= 1){
            nombre.innerHTML = `<p>${cantidadBolas} set de bolas de pool añadida al carro</p>`;
            nombres.innerHTML = `<p>${cantidadBolas} set de bolas de pool</p>`
            precioart.innerHTML = `<p>$${precioBolas}</p>`
        }else{
            precioDosMasBolas= cantidadBolas * precioBolas;
            nombre.innerHTML = `<p>${cantidadBolas} set de bolas de pool añadidas al carro</p>`;
            nombres.innerHTML = `<p>${cantidadBolas} set de bolas de pool</p>`;
            precioart.innerHTML = `<p>$${precioDosMasBolas}</p>`;
            
        }

        precioDosMasBolas= cantidadBolas * precioBolas;
        
       

        //al llegar el stock a cero desabilita el botón para añadir más items
        if(stockJb<1){
            
            botonBolas.disabled = true;
        }

        TotalEnvio = carro + envio;
        

        final.innerHTML = `Sub-total: $${carro}`;
        finalenvio.innerHTML = `Valor envio: $${envio}`;
        finalconEnvio.innerHTML = `Valor final : $${TotalEnvio}`;

        

        stockBolas.innerHTML = `Stock restante: ${stockJb} de ${productos[0][3]}`;
       
        
        
    document.getElementById("stock").innerHTML = ''
    document.getElementById("stock").appendChild(stockBolas);
    document.getElementById("contenedorart").innerHTML = '';
    document.getElementById("contenedorart").appendChild(nombre);
    document.getElementById("carrito").innerHTML = ''; 
    document.getElementById("carrito").appendChild(nombres); 
    document.getElementById("precio").innerHTML = ''; 
    document.getElementById("precio").appendChild(precioart);
    document.getElementById("tablaprecios").innerHTML = '';
    document.getElementById("tablaprecios").appendChild(final);
    document.getElementById("envio").innerHTML = '';
    document.getElementById("envio").appendChild(finalenvio);
    document.getElementById("totalfinal").innerHTML = '';
    document.getElementById("totalfinal").appendChild(finalconEnvio);

    
   
    
    }
   
//Función para agregar paño de pool al carro de compras   

    let comprarPano = document.getElementById("btnPano");
    comprarPano.addEventListener("click", sumarPano)
    function sumarPano() {
        carro += 55350;
        envio += 1500;
        stockPm -= 1;
        let nombrePano = document.createElement("p");
        let nombresPano = document.createElement("p");
        let precioartPano = document.createElement("p");
        let final = document.createElement("p");
        let finalconEnvio = document.createElement("p");
        let finalenvio = document.createElement("p");
        
        let botonPano = document.querySelector("#btnPano");
       
        cantidadPano++;
        if(cantidadPano <= 1){
            nombrePano.innerHTML = `<p>${cantidadPano} Paño de mesa añadido al carro</p>`;
            nombresPano.innerHTML = `<p>${cantidadPano} Paño de mesa</p>`;
            precioartPano.innerHTML = `<p>$${precioPano}</p>`;
        }else{
            precioDosMasPano = cantidadPano * precioPano;
            nombrePano.innerHTML = `<p>${cantidadPano} Paños de mesa añadidos al carro</p>`;
            nombresPano.innerHTML = `<p>${cantidadPano} Paños de mesa</p>`;
            precioartPano.innerHTML = `<p>$${precioDosMasPano}</p>`;
        }

        precioDosMasPano = cantidadPano * precioPano;
        

         //al llegar el stock a cero desabilita el botón para añadir más items
        if(stockPm==0){
            
            botonPano.disabled = true;
        }

        TotalEnvio = carro + envio;

        final.innerHTML = `Sub-total: $${carro}`;
        finalenvio.innerHTML = `Valor envio: $${envio}`;
        finalconEnvio.innerHTML = `Valor final : $${TotalEnvio}`;

      

        stockPano.innerHTML = `Stock restante: ${stockPm} de ${productos[1][3]}`;

        

        document.getElementById("stock2").innerHTML = '';
        document.getElementById("stock2").appendChild(stockPano);
        document.getElementById("contenedorart").innerHTML = '';
        document.getElementById("contenedorart").appendChild(nombrePano);
        document.getElementById("carrito2").innerHTML = ''; //id item 2
        document.getElementById("carrito2").appendChild(nombresPano);   
        document.getElementById("precio2").innerHTML = ''; 
        document.getElementById("precio2").appendChild(precioartPano); 
        document.getElementById("tablaprecios").innerHTML = '';
        document.getElementById("tablaprecios").appendChild(final);
        document.getElementById("envio").innerHTML = '';
        document.getElementById("envio").appendChild(finalenvio);
        document.getElementById("totalfinal").innerHTML = '';
        document.getElementById("totalfinal").appendChild(finalconEnvio); 

        

        
    }

    

     //función para agregar taco de pool al carro de compras

    let comprarTaco = document.getElementById("btnTaco");
    comprarTaco.addEventListener("click", sumarTaco)
    function sumarTaco() {
        
        carro += 60350;
        envio += 1500;
        StockTac -= 1;
        let nombreTaco = document.createElement("p");
        let nombresTaco = document.createElement("p");
        let precioartTaco = document.createElement("p");
        let final = document.createElement("p");
        let finalconEnvio = document.createElement("p");
        let finalenvio = document.createElement("p");
        
        let botonTaco = document.querySelector("#btnTaco");

        cantidadTaco++;
        if(cantidadTaco <= 1){
            nombreTaco.innerHTML = `<p>${cantidadTaco} Taco añadido al carro</p>`;
            nombresTaco.innerHTML = `<p>${cantidadTaco} Taco de pool</p>`
            precioartTaco.innerHTML = `<p>$${precioTaco}</p>`
        }else{
            precioDosMasTaco= cantidadTaco * precioTaco;
            nombreTaco.innerHTML = `<p>${cantidadTaco} Tacos añadidos al carro</p>`;
            nombresTaco.innerHTML = `<p>${cantidadTaco} Tacos de pool</p>`
            precioartTaco.innerHTML = `<p>$${precioDosMasTaco}</p>`
        }

     //guarda el valor en localstorage
        precioDosMasTaco = cantidadTaco * precioTaco;
        //localStorage.nombrePano = `<p>${cantidadPano} Paño de mesa añadido al carro</p>`;
       

         //al llegar el stock a cero desabilita el botón para añadir más items
        if(StockTac==0){
            botonTaco.disabled = true;
           
        }

        //suma el subtotal con el envío para dar el valor final
        TotalEnvio = carro + envio;

        //Agrega los valores a las distintas etiquetas html, las del carro de compra, el envio y los totales
        final.innerHTML = `Sub-total: $${carro}`;
        finalenvio.innerHTML = `Valor envio: $${envio}`;
        finalconEnvio.innerHTML = `Valor final : $${TotalEnvio}`;

        stockTaco.innerHTML = `Stock restante: ${StockTac} de ${productos[2][3]}`;


        document.getElementById("stock3").innerHTML = '';
        document.getElementById("stock3").appendChild(stockTaco);
        document.getElementById("contenedorart").innerHTML = '';
        document.getElementById("contenedorart").appendChild(nombreTaco);
        document.getElementById("carrito3").innerHTML = ''; //id item 3
        document.getElementById("carrito3").appendChild(nombresTaco); 
        document.getElementById("precio3").innerHTML = ''; 
        document.getElementById("precio3").appendChild(precioartTaco);
        document.getElementById("tablaprecios").innerHTML = '';
        document.getElementById("tablaprecios").appendChild(final); 
        document.getElementById("envio").innerHTML = '';
        document.getElementById("envio").appendChild(finalenvio);
        document.getElementById("totalfinal").innerHTML = '';
        document.getElementById("totalfinal").appendChild(finalconEnvio);
    }

     //función para agregar mesa de pool al carro de compras
    
    let comprarMesa = document.getElementById("btnMesa");
    comprarMesa.addEventListener("click", sumarMesa)
    function sumarMesa() {
        carro += 350350;
        envio += 1500;
        StockMes -= 1;
        let nombreMesa = document.createElement("p");
        let nombresMesa = document.createElement("p");
        let precioartMesa = document.createElement("p");
        let final = document.createElement("p");
        let finalconEnvio = document.createElement("p");
        let finalenvio = document.createElement("p");
       
        let botonMesa = document.querySelector("#btnMesa");
        cantidadMesa++;
        if(cantidadMesa <= 1){
            nombreMesa.innerHTML = `<p>${cantidadMesa} Mesa añadida al carro</p>`;
            nombresMesa.innerHTML = `<p>${cantidadMesa} Mesa de pool</p>`
            precioartMesa.innerHTML = `<p>$${precioMesa}</p>`
        }else{
            precioDosMasMesas= cantidadMesa * precioMesa;
            nombreMesa.innerHTML = `<p>${cantidadMesa} Mesas añadidas al carro</p>`;
            nombresMesa.innerHTML = `<p>${cantidadMesa} Mesas de pool</p>`
            precioartMesa.innerHTML = `<p>$${precioDosMasMesas}</p>`
        }

         //guarda el valor en localstorage
         precioDosMasMesas = cantidadMesa * precioMesa;
        

         //al llegar el stock a cero desabilita el botón para añadir más items
        if(StockMes==0){
            botonMesa.disabled = true;
        }

        TotalEnvio = carro + envio;

        final.innerHTML = `Sub-total: $${carro}`;
        finalenvio.innerHTML = `Valor envio: $${envio}`;
        finalconEnvio.innerHTML = `Valor final : $${TotalEnvio}`;
        stockMesas.innerHTML = `Stock restante: ${StockMes} de ${productos[3][3]}`;
       

        document.getElementById("stock4").innerHTML = '';
        document.getElementById("stock4").appendChild(stockMesas);
        document.getElementById("contenedorart").innerHTML = '';
        document.getElementById("contenedorart").appendChild(nombreMesa);
        document.getElementById("carrito4").innerHTML = ''; //id item 3
        document.getElementById("carrito4").appendChild(nombresMesa); 
        document.getElementById("precio4").innerHTML = ''; 
        document.getElementById("precio4").appendChild(precioartMesa); 
        document.getElementById("tablaprecios").innerHTML = '';
        document.getElementById("tablaprecios").appendChild(final);
        document.getElementById("envio").innerHTML = '';
        document.getElementById("envio").appendChild(finalenvio);
        document.getElementById("totalfinal").innerHTML = '';
        document.getElementById("totalfinal").appendChild(finalconEnvio);
    }

    
   

   /*  Función para el botón de restaurar productos coloca todo en 0 
    nuevamente */
   
    let restaurarProductos = document.getElementById("vaciar-carrito");
    restaurarProductos.addEventListener("click", reestablecer)
    function reestablecer() {
        //se borran los elementos del carro de compras y los totales
        document.getElementById("carrito").innerHTML = ''; 
        document.getElementById("carrito2").innerHTML = ''; 
        document.getElementById("carrito3").innerHTML = ''; 
        document.getElementById("carrito4").innerHTML = ''; 
        document.getElementById("precio").innerHTML = ''; 
        document.getElementById("precio2").innerHTML = ''; 
        document.getElementById("precio3").innerHTML = ''; 
        document.getElementById("precio4").innerHTML = ''; 
        document.getElementById("tablaprecios").innerHTML = '';
        document.getElementById("envio").innerHTML = '';
        document.getElementById("totalfinal").innerHTML = '';
        document.getElementById("contenedorart").innerHTML = '';
        //se reestablecen los valores del carro
        carro = 0;
        envio = 0;
        cantidadBolas = 0;
        cantidadPano = 0;
        cantidadTaco = 0;
        cantidadMesa = 0;
        stockJb = 5; //Stock inicial bolas de pool
        stockPm = 3; //Stock inicial paño de mesa
        StockTac = 2; //Stock inicial taco de pool
        StockMes = 2; //Stock inicial mesa de pool 
        stockBolas.innerHTML = `Stock restante: ${stockJb} de ${productos[0][3]}`;
        stockPano.innerHTML = `Stock restante: ${stockPm} de ${productos[1][3]}`;
        stockTaco.innerHTML = `Stock restante: ${StockTac} de ${productos[2][3]}`;
        stockMesas.innerHTML = `Stock restante: ${StockMes} de ${productos[3][3]}`;
        let botonBolas = document.querySelector("#btnBolas");
        let botonPano = document.querySelector("#btnPano");
        let botonTaco = document.querySelector("#btnTaco");
        let botonMesa = document.querySelector("#btnMesa");
        botonMesa.disabled = false; //se habilitan los botones
        botonPano.disabled = false;
        botonTaco.disabled = false;
        botonBolas.disabled = false;
       
    }

    //reestablecer();

    //boton compra

    let ComprarProductos = document.getElementById("btnComprar");
    ComprarProductos.addEventListener("click", confirmEnviar)    
    function confirmEnviar() {
        alert("Compra ejecutándose espere...");
        btnBolas.disabled = true; //se deshabilitan botones de agregar productos
        btnPano.disabled = true; 
        btnTaco.disabled = true; 
        btnMesa.disabled = true;
        btnComprar.disabled = true; 
        document.getElementById("btnComprar").innerHTML="Comprando..."; //se cambia lo que dice el botón comprar
        setTimeout(function(){
        btnBolas.disabled = false; // se vuelven a habilitar los botones
        btnPano.disabled = false; 
        btnTaco.disabled = false; 
        btnMesa.disabled = false; 
        btnComprar.disabled = false; 
        alert("¡Compra realizada!");
        //se vacían los elementos del carrito y se borran los elementos almacenados en localstorage
        document.getElementById("carrito").innerHTML = ''; 
        document.getElementById("carrito2").innerHTML = ''; 
        document.getElementById("carrito3").innerHTML = ''; 
        document.getElementById("carrito4").innerHTML = ''; 
        document.getElementById("precio").innerHTML = ''; 
        document.getElementById("precio2").innerHTML = ''; 
        document.getElementById("precio3").innerHTML = ''; 
        document.getElementById("precio4").innerHTML = ''; 
        document.getElementById("tablaprecios").innerHTML = '';
        document.getElementById("envio").innerHTML = '';
        document.getElementById("totalfinal").innerHTML = '';
        document.getElementById("contenedorart").innerHTML = '';
        document.getElementById("btnComprar").innerHTML="Comprar"; //se vuelve a escribir comprar en el boton 
       
        }, 3000);
        return false;
        
    }

      
   
    