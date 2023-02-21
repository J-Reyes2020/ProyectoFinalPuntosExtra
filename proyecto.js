//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%


//Recargo
var recargo = 0
var recargo_total = 0

//Precio final 
var precio_final = 0

//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")
if(edad<=17){
    alert("Usted no es mayor de Edad")
  }else{
    var casado = prompt("¿Está casado actualmente?", "si/no")
    //Comprobamos la edad del cónyuge, solamente si se está casado/a
    var edad_conyuge
    if("SI" == casado.toUpperCase()){
      edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
    }
    //convirtiendo las edades ingresadas a números 
    var edad_numero = parseInt(edad)
    var edad_conyuge_numero = 0
    //convirtiendo la edad del cónyuge si se esta casado/a
    if("SI" == casado.toUpperCase()){
      edad_conyuge_numero = parseInt(edad_conyuge)
    }
    
    var hijos = prompt("¿Tiene hijos o hijas?","si/no")
    //Comprobamos la cantidad de hijos solamente si los tienen
    var cantidad_hijos
    /**
     * 1. convierta la cantidad de hijos a numero
     */
    if("SI"==hijos.toUpperCase()){
      cantidad_hijos=prompt("Cuántos hijos tiene?")
    }
    var edad_hijo = parseInt(cantidad_hijos)
    var edad_numero_hijo = 0;

    


    //Aquí debe calcular el recargo total basado en las respuestas ingresadas
    //Aquí es donde debe de calcular los recargos y el valor final
  //Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
  if(edad_numero>=18 && edad_numero<25){
    //Calculamos el recargo en base a la edad 
    recargo = precio_base * edad_18
    //Sumamos todos los recargos que hemos obtenido
    recargo_total = recargo_total + recargo
  }
  //aqui puede colocar un else if() con el siguiente rango
  else if(edad_numero>=25 && edad_numero<50){
    recargo = precio_base * edad_25;

    recargo_total = recargo_total+recargo;
  }else{
    recargo = precio_base * edad_50;

    recargo_total = recargo_total + recargo;
  }
  /** 
   * 2. Recargo por la edad del conyuge
   */
  if(edad_conyuge_numero>=18 && edad_conyuge_numero<25){
    recargo = precio_base * casado_18;

    var recargo_total_conyugue = precio_base + recargo;
  }else if(edad_conyuge_numero>=25 && edad_conyuge_numero<50){
    recargo = precio_base * casado_25;

    recargo_total_conyugue = precio_base + recargo;
  }else{
    recargo = precio_base * casado_50;

    recargo_total_conyugue = precio_base + recargo;
  }
  /**
   * 3. Recargo por la cantidad de hijos 
   */ 

  var total_por_hijos = hijos_recargo * precio_base;


  precio_final = precio_base + recargo_total + (total_por_hijos*cantidad_hijos);
  //Resultado
  alert ("Para el asegurado "+nombre)
  alert ("El recargo total sera de: "+recargo_total)
  alert("El recargo total por el conyugue será de: " + recargo_total_conyugue)
  alert("El recargo total por los hijos será de: " + total_por_hijos)
  alert ("El precio sera de: "+precio_final)
}
alert("Nombre: Jorge Reyes \nCarnet: 23002239");
