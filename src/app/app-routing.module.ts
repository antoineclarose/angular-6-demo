import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersPageComponent} from "./users-page/users-page.component";
import {PostsComponent} from "./posts/posts.component";
import {DetailsComponent} from "./details/details.component";

const routes: Routes = [
  {
    path: '',
    component: UsersPageComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
