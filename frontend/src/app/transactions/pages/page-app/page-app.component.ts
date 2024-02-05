import { Component } from '@angular/core';
import { Transaction } from 'src/app/models/transaction.model';
import { TransactionService } from './../../../services/transaction.service';

@Component({
  selector: 'app-page-app',
  templateUrl: './page-app.component.html',
  styleUrls: ['./page-app.component.scss']
})
export class PageAppComponent {
  dataSource: Transaction[] = [];
  constructor( private transactionService: TransactionService){}


  ngOnInit() : void{
    this.dataSource = this.transactionService.getTransactions();
    console.log(this.dataSource)
  }

  displayedColumns: string[] = ['idTransaction', 'clientName', 'concessionaire', 'modelVehicle'];
}
