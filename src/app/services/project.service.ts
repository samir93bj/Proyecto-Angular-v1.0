import {Injectable} from '@angular/core';			//permite inyectar esta clase en los llamados
import {HttpClient, HttpHeaders}from '@angular/common/http'; // nos permitiran hacer peticiones ajax y modificar la cabecera de las peticiones
import {Observable} from 'rxjs/Observable';			//nos permite recoger la info del APIREST en las peticiones

import {Global} from './global';				//Importamos la URL global q utilizaremos a lo largo de la web
import {Project} from '../models/project';		//Importamos los modelos del proyecto q vamos a crear

@Injectable()

export class ProjectService{

	public url : string;

	constructor(
		private _http : HttpClient
		){
		this.url = Global.url;
	}

TestService(){
	return 'Probando el servicio Angular'
}	

//CREAMOS FUNCION PARA GUARDAR PROYECTO
saveProject(project : Project) : Observable<any>{ //RECIBIREMOS UN OBJETO DE TIPO Project que recibimos desde el front end// debemos devolver 1 observable
	let params = JSON.stringify(project); // transformamos a JSON el objeto con los datos 
	let headers = new HttpHeaders().set('Content-Type','application/json'); //Declaramos esto para que la informacion viaje en el formato JSON

	return this._http.post(this.url+'/save-Project', params, {headers: headers});
}

//CREAMOS FUNCION PARA OBTENER LOS PROYECTOS
	getProject(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json'); //Marcamos que todos los datos vayan a viajar en formato json

		return this._http.get(this.url+'/projects',{headers: headers}); //el link de los projects
	}

//CREAMOS FUNCION PARA OBTENER LOS PROYECTOS
	getProjectID(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json'); //Marcamos que todos los datos vayan a viajar en formato json

		return this._http.get(this.url+'/project/'+id,{headers: headers}); //el link de los projects  
	}


//CREAMOS FUNCION PARA BORRAR LOS PROYECTOS
	deleteProject(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json'); //Marcamos que todos los datos vayan a viajar en formato json

		return this._http.delete(this.url+'/projectdelete/'+id,{headers: headers}); //el link de los projects  
	}

//CREAMOS FUNCION PARA EDITAR LOS PROYECTOS
	ModifProject(project): Observable<any>{
		let params = JSON.stringify(project);
		let headers = new HttpHeaders().set('Content-Type','application/json'); //Marcamos que todos los datos vayan a viajar en formato json

		return this._http.put(this.url+'/projectUpdate/'+project._id, params, {headers: headers}); //el link de los projects  
	}	

} 