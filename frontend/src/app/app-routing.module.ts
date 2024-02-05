import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAppComponent } from './transactions/pages/page-app/page-app.component';
import { ErrorPageComponent } from './shared/pages/error-page/error-page.component';

const routes: Routes = [
{
  path: 'transactions',
  component: PageAppComponent
},{
  path:'404',
  component: ErrorPageComponent
},
{
  path: '',
  redirectTo: 'transactions',
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: '404',
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
