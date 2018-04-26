var marvel = function(){
	var Buscar = function(){
		var personaje=$("#txtPersonaje").val();	
		var url="http://gateway.marvel.com/v1/public/characters?ts=1&apikey=67788e74df746a1523d8ebb504ee1008&hash=cf5ec9bfa5a156f031a69417cd0e012c&nameStartsWith=";
		var cantidadComics = 0;
		var comics = "";
		url = url + personaje;
		$.ajax({
			url: url,
			dataType: "json",
			success:function(response){
				if(response.code == 200){ 
					$("#nombre").html(response.data.results[0].name);
					$("#foto").attr("src",response.data.results[0].thumbnail.path+"."+response.data.results[0].thumbnail.extension);
					// alert(response.data.results[0].name);					
					cantidadComics=response.data.results[0].comics.returned;
					for(var i=0;i < cantidadComics; i++){
						comics+=response.data.results[0].comics.items[i].name+"<br>"
					}
					$("#comics").html("Comics <br>"+comics);
				}
			}
		});
	}
	var teclaPersonaje = function(tecla){
		// 13 + 10
		// Retorno de carro y avance de línea
		if(tecla.which == 13){ //Enter
			Buscar();
		}
	}

	$("#btnBuscar").on("click",Buscar);
	$("#txtPersonaje").on("keypress",teclaPersonaje);
}

$(document).ready(marvel);

















