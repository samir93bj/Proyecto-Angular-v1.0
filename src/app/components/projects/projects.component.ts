import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service'; 
import { Project } from '../../models/project'; 
import { Global } from '../../services/global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {

  public url: string;
	public projects : Project[];

  constructor(
  	private _ProjectService : ProjectService
  	) { 
    this.url = Global.url;
  }

  ngOnInit() {
  	 this.ObtenerProyectos();
  }

  ObtenerProyectos(){
  	this._ProjectService.getProject().subscribe(

  		response => {
  			if(response.projects){							//response.projects es la respuesta obtenida y la podemos visualizar en el navegador, sector response
  				this.projects = response.projects;
  			}
  			console.log(response);
  		},
  		error => {
  			console.log(<any>error);
  		});
  }

}
