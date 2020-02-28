import {Injectable} from '@angular/core';			//permite inyectar esta clase en los llamados
import {Global} from './global';

@Injectable()

export class UploadService{
	public url : string;

	constructor(){
		this.url = Global.url;
	}


//CREAMOS EL SERVICI PARA HACER VIAJAR LOS ARCHIVOS
	makeFileRequest(url: string, params : Array<string>, files: Array<File>, name: string){
		return new Promise(function(resolve, reject){

			var formData:any = new FormData();			//Losf forma Data permite enviar los archivos como string
			var xhr = new XMLHttpRequest(); 			//es una interfaz empleada para realizar peticiones HTTP y HTTPS a servidores Web

			for(var i=0; i<files.length; i++){
				formData.append(name, files[i], files[i].name);  //Cargamos en el formData todos los archivos recibidos, y seleccionamos su nombre
			}

			xhr.onreadystatechange = function(){			// el evento readystatechange, se dispara cada vez que cambia el valor de la propiedad readyState de XMLHttpRequest
				if(xhr.readyState == 4){
					if(xhr.status == 200){					//`
						resolve(JSON.parse(xhr.response));
					}
					else {
						reject(xhr.response);
					}
				}
			}

			xhr.open('POST', url ,true); //este true activa el evento POST
			xhr.send(formData);
		});
	}
}
