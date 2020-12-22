import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { InfoService } from './services/info.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StartComponent } from './components/start/start.component';
import { SelectBoxComponent } from './components/select-box/select-box.component';


const appRoutes: Routes =[
  {path: '', redirectTo: 'start', pathMatch: 'full'},
  {path: 'start', component: StartComponent},
  {path: '**', component: NotFoundComponent}
];


@NgModule({
  imports: [
        BrowserModule,
		    HttpModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
  ],
  declarations: [
        AppComponent,
        NotFoundComponent,
        StartComponent,
        SelectBoxComponent,

  ],
  providers: [
        InfoService
  ],
  bootstrap: [
        AppComponent
  ]
})
export class AppModule { }
