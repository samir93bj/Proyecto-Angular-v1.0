import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';   //importamos nuestro modelo de proyecto
import { ProjectService } from '../../services/project.service'; 
import { Global } from '../../services/global';
import {Router, ActivatedRoute, Params} from '@angular/router'; // utilizamos esto para sacar de la url los params

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
  
})
export class DetailComponent implements OnInit {
	public url : string;
  public project = Project;

  constructor(
  	private _ProjectService : ProjectService,
    private _Router : Router,
    private _Route : ActivatedRoute
  	) { 

  	  this.url = Global.url;
      
  	}

  ngOnInit() { 

    this._Route.params.subscribe(params => {  //en los params viajan los datos del projecto
      let id = params.id;

      this.getProject(id);
    });
  }

  getProject(id){
      this._ProjectService.getProjectID(id).subscribe(
        response => {
          this.project = response.project;
        },
        error => {
          console.log(<any>error);
        } );}


  deleteProject(id){
    this._ProjectService.deleteProject(id).subscribe(
        response => {
           if(response.project){
             this._Router.navigate(['/proyecto']);
           }
        },
        error => {
          console.log(<any>error);
        }
      );
  }
}
