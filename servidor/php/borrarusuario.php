<?php
include 'conexiones.php';
function borrarusuario(){
	$respuesta = false;
	$usuario = GetSQLValueString($_POST["usuario"],"text");
	//Conectarnos al servidor de BD.
	$con=conecta();
	$consulta=sprintf("delete from usuarios where usuario = %s",$usuario);
	mysqli_query($con,$consulta);
	//Preguntamos si se hizo el borrado
	if(mysqli_affected_rows($con) > 0){ //Insert - Update - Delete
		$respuesta = true;
	}
	$salidaJSON = array('respuesta' => $respuesta);
	print json_encode($salidaJSON);
}

$opc = $_POST["opc"];
switch ($opc) {
	case 'borrarusuario':
		borrarusuario();
		break;
	
	default:
		# code...
		break;
}
?>







