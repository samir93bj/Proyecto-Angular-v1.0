//IMPORTAR MODULOS DE ROUTER DE ANGULAR

import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


//IMPORTAR LOS COMPONENTES
import {AboutComponent} from './components/about/about.component';
import {ContactComponent} from './components/contact/contact.component';
import {CreateComponent} from './components/create/create.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {ErrorComponent} from './components/error/error.component';
import {DetailComponent} from './components/detail/detail.component';
import {EditComponent} from './components/edit/edit.component';


//ENRUTAMOS TODAS LAS PAGINAS
const appRouting : Routes = [
		{path: '',component : AboutComponent},
		{path: 'SobreMi',component : AboutComponent},
		{path: 'Contacto',component : ContactComponent},
		{path: 'Proyectos',component : ProjectsComponent},
		{path: 'crear-proyecto',component : CreateComponent},
		{path: 'proyecto/:id',component : DetailComponent},
		{path: 'editar-proyecto/:id',component : EditComponent},
		{path: '**',component : ErrorComponent}
	];

//EXPORTAMOS EL MODULO DEL ROUTER

export const appRoutingProviders: any[] = [];										//exportamos el srvicio
export const routing: ModuleWithProviders = RouterModule.forRoot(appRouting);		//exportamos el modulo   