var inicioApp = function(){
	var Aceptar = function(){
		event.preventDefault();
		var usuario=$("#txtUsuario").val();
		var clave  =$("#txtClave").val();
		var parametros="opc=validaentrada"+
		               "&usuario="+usuario+
		               "&clave="+clave+
		               "&numero="+Math.random();
		$.ajax({
			cache:false,
			type: "POST",
			dataType: "json",
			url: "php/validaentrada.php",
			data: parametros,
			success:function(response){
				if(response.respuesta == true){
					//alert("Bienvenido");
					$("#secInicio").hide("slow");
					$("#frmUsuarios").show("slow");
					//Posiciona el cursor en el cuadro de
					//texto.
					$("#txtNombreUsuario").focus();
				}else{
					alert("usuario o clave incorrecta(s)");
				}
			},
			error:function(xhr,ajaxOptions,thrownError){

			}
		});
	}
	var buscaUsuario = function(){
		var usuario = $("#txtNombreUsuario").val();
		var parametros="opc=buscaUsuario"+
					   "&usuario="+usuario+
					   "&aleatorio="+Math.random();					   	
		if(usuario != ""){
			$.ajax({
				cache:false,
				type: "POST",
				dataType: "json",
				url: "php/buscausuario.php",
				data: parametros,
				success:function(response){
					if(response.respuesta == true){
						$("#txtNombre").val(response.nombre);
						$("#txtClaveUsuario").val(response.clave);
					}else{
						$("#txtNombre").focus();
						$("#txtNombre").val("");
						$("#txtClaveUsuario").val("");
					}	
				},
				error:function(xhr,ajaxOptions,thrownError){

				}
			});	
		}
	}
	var teclaNombreUsuario = function(tecla){
		if(tecla.which == 13){ //Enter
			buscaUsuario();
		}
	}
	var Guardar = function(){
		var usuario=$("#txtNombreUsuario").val();
		var nombre =$("#txtNombre").val();
		var clave  =$("#txtClaveUsuario").val();
		if(usuario!="" && nombre!="" && clave!=""){
			$.ajax({
				cache:false,
				type: "POST",
				dataType: "json",
				url: "php/buscausuario.php",
				data: parametros,
				success:function(response){
					
				},
				error:function(xhr,ajaxOptions,thrownError){

				}
			});		
		}else{
			alert("Llene todos datos");
		}
	}
	$("#btnAceptar").on("click",Aceptar);
	$("#txtNombreUsuario").on("keypress",teclaNombreUsuario);
	$("#btnGuardar").on("click",Guardar);
	$("#frmUsuarios").hide();
}
$(document).ready(inicioApp);







