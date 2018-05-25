var $ = require('jquery');
<<<<<<< HEAD
var iniciaapp = function(){

	var Mostrar = function(){
=======
var inicia = function(){
	var nuevo = function(){
		//JSON=JavaScript Object Notation
>>>>>>> cfbf394b47d695cced6764dbf64ce47a2eec8b0c
		$.ajax({
		  url: 'https://randomuser.me/api/',
		  dataType: 'json',
		  success: function(data) {
<<<<<<< HEAD
		    $("#nombre").html(data.results[0].name.first);
		    $("#foto").attr("src",data.results[0].picture.medium);
		  }
		});
    
	}
	$("#btnMostrar").on("click",Mostrar);
}

$(document).ready(iniciaapp);
=======
		    $("#nombre").html(data.results[0].name.first+" "+data.results[0].name.last);
		    $("#foto").attr("src",data.results[0].picture.large);
		  }
		});
	}
	$("#btnNuevo").on("click",nuevo);
}
$(document).ready(inicia);
>>>>>>> cfbf394b47d695cced6764dbf64ce47a2eec8b0c
