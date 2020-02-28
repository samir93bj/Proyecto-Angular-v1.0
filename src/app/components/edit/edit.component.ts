import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';   //importamos nuestro modelo de proyecto
import { ProjectService } from '../../services/project.service'; 
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params} from '@angular/router'; // utilizamos esto para sacar de la url los params
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit {
	public titulo : string;
  	public status : string;
	public project : Project;
	public url : string;
  	public filesToUpload: Array<File>;
  	public save_project;
 // public url : string;

  constructor(
      private _ProjectService : ProjectService,
      private _UploadService : UploadService,
      private _Router : Router,
      private _Route : ActivatedRoute
    ){

  	this.titulo = "EDITAR PROYECTO";
  	this.project = new Project('','','','',2020,'','');
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



 onSubmit(){
 	this._ProjectService.ModifProject(this.project).subscribe(
 		 response => {
          if(response.project){

          	if(this.filesToUpload){
		     		 //Subir la imagen
		           this._UploadService.makeFileRequest(Global.url+'/project-imageUP/'+response.project._id, [], this.filesToUpload, 'image')
		           .then((result:any) => {

		             this.save_project = result.project;
		             this.status = 'success';   
		           });
          	}else{this.save_project = response.project;
		             this.status = 'success'; }
           
          }
           else {
            this.status = 'failed';
          }
        
        },
        error => {
          console.log(<any>error);
        } 	

 		);
 }

 fileChangeEvent(FileInput: any){
      this.filesToUpload = <Array<File>>FileInput.target.files;  
      console.log(FileInput);
  }
}
 