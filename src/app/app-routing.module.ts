import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent }		from './todo/todo.component';

const routes: Routes = [
	{
		path:'todo',
		component: TodoComponent
		//canActivate: [AuthGuard],
		//data : {
		//  breadcrumb : 'Paramètres'
		//	}
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
