import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { DirectoryComponent } from "./directory/directory.component";


const routes: Routes = [
  {
    path: 'directory/:ninja',
    component: DirectoryComponent
  },
  {
    path: '',
    component: HomeComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
