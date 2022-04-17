import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from "./directory/directory.component";

import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { FilterPipe } from './filter.pipe';



const routes: Routes = [
  {
    path: 'directory',
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
    HomeComponent,
    DirectoryComponent,
    FilterPipe
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
