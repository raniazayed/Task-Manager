import { FormsComponent } from './components/forms/forms.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TaskComponent } from './components/task/task.component';

const routes: Routes = [
  {path:'',component:FormsComponent},
  {path:'home',component:HomeComponent},
  {path:'Add-task',component:AddTaskComponent},
  {path:'task',component:TaskComponent},
  {path:'task/:id',component:TaskComponent},
  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
