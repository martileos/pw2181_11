var $ = require('jquery');
var iniciaapp = function(){

	var Mostrar = function(){
		$.ajax({
		  url: 'https://randomuser.me/api/',
		  dataType: 'json',
		  success: function(data) {
		    $("#nombre").html(data.results[0].name.first);
		    $("#foto").attr("src",data.results[0].picture.medium);
		  }
		});
    
	}
	$("#btnMostrar").on("click",Mostrar);
}

$(document).ready(iniciaapp);