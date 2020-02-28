import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'; //IMPORTAMOS ESTO PARA UTILIZAR EL HTTP CLIENT
import { FormsModule} from '@angular/forms'; //importamos esto para utilizar los formularios y los chuidatabinding

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { CreateComponent } from './components/create/create.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';  

import { appRoutingProviders, routing } from './ROUTING-APP';
import { EditComponent } from './components/edit/edit.component';//IMPORTAMOS LOS ELEMENTOS DEL ROUTING


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CreateComponent,
    ProjectsComponent,
    ContactComponent,
    ErrorComponent,
    DetailComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,                           //importamos el routing
    FormsModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders], //guardamos provider provider
  bootstrap: [AppComponent]
})
export class AppModule { }
 