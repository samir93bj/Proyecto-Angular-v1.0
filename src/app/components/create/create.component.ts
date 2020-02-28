import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';   //importamos nuestro modelo de proyecto
import { ProjectService } from '../../services/project.service'; 
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]                //Debemos importar este elemento ya que es un servicio
})

export class CreateComponent implements OnInit {
	public titulo : string;
  public status : string;
	public project : Project;
  public filesToUpload: Array<File>;
  public save_project;
 // public url : string;

  constructor(
      private _ProjectService : ProjectService,
      private _UploadService : UploadService

    ){

  	this.titulo = "CREAR PROYECTO";
  	this.project = new Project('','','','',2020,'','');
   // this.url = new Global.url;
  }

  ngOnInit() {

  }

  onSubmit(form){
  	console.log(this.project);
    this._ProjectService.saveProject(this.project).subscribe(

        response => {
          if(response.project){
            if(this.filesToUpload){
           //Subir la imagen
           this._UploadService.makeFileRequest(Global.url+'/project-imageUP/'+response.project._id, [], this.filesToUpload, 'image')
           .then((result:any) => {

             this.save_project = result.project;
             this.status = 'success';
         
             form.reset();

           }); 
         }else{
             this.save_project = response.project;
             this.status = 'success'; 
           form.reset();
         }

          } else {
            this.status = 'failed';
          }
        },
        error => {
          console.log(<any>error);
        } );
  }

  fileChangeEvent(FileInput: any){
      this.filesToUpload = <Array<File>>FileInput.target.files;  
      console.log(FileInput);
  }

}
