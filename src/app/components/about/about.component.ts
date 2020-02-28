import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

	public titulo : string;
	public subtitulo : string;
	public web : string;

  constructor() { 
  	this.titulo = 'Samir Mahmud';
  	this.subtitulo = 'Desarrollo WEB';
  	this.web = 'victorroblesweb.es';
  }
  ngOnInit() {

  }

}
