import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
{
  path: 'posts', component: PostsComponent
},
{
  path: 'contact', component: ContactComponent
},
{
  path: '',
  redirectTo: '/posts',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
