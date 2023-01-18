


$("#form-contacto").validate({
    rules: {
        nombre:{
            requierd: true,
            minlength: 3,
            maxlength: 30
        },
        apellido : {
            required: true,
            email : true,
        },
        correo: {
            required : true,
            email: true,

        },
        area_texto: {
            required: true,
            minlength: 5,
            maxlength: 300,
        },

    }
})



$("#enviar").click(function(){ 
    let nombre = $("#nombre").val()
    let apellido = $("#apellido").val()
    let correo = $("#correo").val()
    let mensaje = $("#area_texto").val()

    console.log(nombre)
    
});




