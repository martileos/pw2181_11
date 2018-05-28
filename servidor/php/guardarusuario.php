<?php
include 'conexiones.php';
function guardarusuario(){
	$respuesta = false;
	$usuario = GetSQLValueString($_POST["usuario"],"text");
	$nombre  = GetSQLValueString($_POST["nombre"],"text");
	$clave   = GetSQLValueString(md5($_POST["clave"]),"text");

	//Conectarnos al servidor de BD.
	$con=conecta();
	//$consulta="select usuario from usuarios where usuario= '".$usuario."' limit 1";
	$consulta=sprintf("select usuario from usuarios where usuario = %s limit 1",$usuario);
	$resConsulta=mysqli_query($con,$consulta);
	$consultaguarda = "";
	if(mysqli_num_rows($resConsulta) > 0){ //El registro existe
		$consultaguarda=sprintf("update usuarios set nombre=%s,clave=%s where usuario=%s",$nombre,$clave,$usuario);
	}else{ //El usuario no existe
		$consultaguarda=sprintf("insert into usuarios values(default,%s,%s,%s)",$usuario,$nombre,$clave);
	}
	mysqli_query($con,$consultaguarda);
	//Preguntamos si se hizo la actualización o inserción
	if(mysqli_affected_rows($con) > 0){ //Insert o Update
		$respuesta = true;
	}
	$salidaJSON = array('respuesta' => $respuesta);
	// var_dump($salidaJSON);
	print json_encode($salidaJSON);
}

$opc = $_POST["opc"];
switch ($opc) {
	case 'guardarusuario':
		guardarusuario();
		break;
	
	default:
		# code...
		break;
}
?>







