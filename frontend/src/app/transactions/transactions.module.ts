import { NgModule } from '@angular/core';
import { PageAppComponent } from './pages/page-app/page-app.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PageAppComponent,
  ],
  imports: [
    MaterialModule,
    SharedModule
  ]
})
export class TransactionsModule { }
