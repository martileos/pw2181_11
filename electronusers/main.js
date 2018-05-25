//Cargamos la aplicación de electron
const app = require('electron').app;
//Para crear ventanas del sistema operativo.
const BrowserWindow=require('electron').BrowserWindow;
const path= require('path');
const url = require('url');
//let es una constante
let PantallaPrincipal;

function muestraPantallaPrincipal(){
	//Creamos una pantalla vacía.
	PantallaPrincipal=new BrowserWindow({width:620,height:825});
	//Le damos contenido a esa pantalla.
	PantallaPrincipal.loadURL(url.format({
		//join: concatena cadenas
		pathname:path.join(__dirname,'index.html'),
		protocol: 'file',
		slashes: true
	}));
	// PantallaPrincipal.webContents.openDevTools();
	//Mostramos la pantalla
	PantallaPrincipal.show();
}

app.on('ready',muestraPantallaPrincipal);
















