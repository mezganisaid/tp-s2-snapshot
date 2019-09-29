import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PagetwoComponent } from './pages/pagetwo/pagetwo.component';
import { PagethreeComponent } from './pages/pagethree/pagethree.component';

import { GlobalesService } from './services/servglobales/globales.service';
import { PagequatrComponent } from './pages/pagequatr/pagequatr.component';

import { ModalModule } from 'ngx-bootstrap/modal';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'page2', component: PagetwoComponent},
  {path: 'page3', component: PagethreeComponent},
  {path: 'page4/:id', component: PagequatrComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PagetwoComponent,
    PagethreeComponent,
    PagequatrComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    RouterModule.forRoot(routes),
    NgxPaginationModule,
    ModalModule.forRoot(),
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [GlobalesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
