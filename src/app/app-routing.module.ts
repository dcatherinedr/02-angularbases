import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomeModule'
  },
  {
    path: 'about',
    loadChildren: './pages/about/about.module#AboutModule'
  },
  {
    path: 'contact',
    loadChildren: './pages/contact/contact.module#ContactModule'
  },
  {
    path: 'posts',
    loadChildren: './pages/posts/posts.module#PostsModule'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
