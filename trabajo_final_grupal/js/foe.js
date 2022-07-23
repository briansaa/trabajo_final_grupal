function ConfirmDemo() {
    //Ingresamos un mensaje a mostrar
    var mensaje = confirm("¿desea enviar el mensaje?");
    var mensaje_area = document.querySelector("#mensaje")
    var nombre = document.querySelector("#nombre")
    var correo = document.querySelector("#correo")
    var numero = document.querySelector("#numero")
    //Detectamos si el usuario acepto el mensaje}
    if (mensaje) {
        alert("¡agredecemos su interes en enviar el mensaje! Usted nos mando ,"  + nombre.value  +   correo.value   + correo.value + nombre.value +  mensaje_area.value   +  numero.value);
        }
   

    //Detectamos si el usuario denegó el mensaje
    else {
    alert("¡Haz denegado  el mensaje!");
    }
    }
    
