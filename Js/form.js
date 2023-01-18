//agregamos variables para cada campo del formulario//
function valForm(){
  console.log("establecido a la funcion");
  var vNom = $('#nombre').val();
  var vApelli =$('#apellido').val();
  var vEmail = $('#correo').val();
  var vMensaje = $('#area_texto').val();
  
  
  console.log(vNom);

//validando campo nombre
  if(vNom== "" || vNom == null){
      errorColor("nombre");
      errorcontenido("Nombre");
      return false;
  }
  else{
      var expresion= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
      if (!expresion.test(vNom)){
          errorColor("nombre");
          errorcontenido("No se prermiten caracteres especiales");
          return false;
      }
  };

  //Validar el campo apellido
  if(vApelli== "" || vApelli == null){
    errorColor("apellido");
    errorcontenido("Apellido");
    return false;
  }
  else{
    var expresion= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
    if (!expresion.test(vApelli)){
        errorColor("apellido");
        errorcontenido("No se prermiten caracteres especiales");
        return false;
    }
  };


//validar el campo correo
  if(vEmail== "" || vEmail == null){
      errorColor("correo");
      errorcontenido("Correo");
      return false;
  }
  else{
      var expresion= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
      if (!expresion.test(vEmail)){
          errorColor("correo");
          errorcontenido("Correo, Formato no valido");
          return false;
      }
  };

  //Validar campo de area de texto
  if(vMensaje== "" || vMensaje == null){
    errorColor("area_texto");
    errorcontenido("Area de Mensaje");
    return false;
  }
  else{
    var expresion= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
    if (!expresion.test(vMensaje)){        
        errorColor("area_texto");
        errorcontenido("Debe escribir un mensaje");
        return false;
    }
  };






  $('form').submit();
  return true;

}








//funcion para marcar borde en rojo si no hay datos
function errorColor (dato){    
  $('#' + dato).css('border', '3px solid #dd5544' );
};

//alerta de error campo nombre sin datos
function errorcontenido(dato){
  alert("error en el campo " + dato)
  

};

//funcion para volver al color normal
function ColorDefault(dato){
  $('#'+dato).css('border','3px solid #999' )
};

$('input').focus(function(){ 
  ColorDefault('nombre')
  ColorDefault('apellido')
  ColorDefault('correo')
  ColorDefault('area_texto')  
  
});