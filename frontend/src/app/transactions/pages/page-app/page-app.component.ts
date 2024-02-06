import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Transaction } from 'src/app/models/transaction.model';
import { TransactionService } from './../../../services/transaction.service';
import { TransactionInterface } from 'src/app/interfaces/transaction.interface';

@Component({
  selector: 'app-page-app',
  templateUrl: './page-app.component.html',
  styleUrls: ['./page-app.component.scss']
})
export class PageAppComponent implements OnInit {
  displayedColumns: string[] = ['idTransaction', 'clientName', 'concessionaire', 'modelVehicle', 'sellDate', 'sellPrice'];
  dataSource = new MatTableDataSource<TransactionInterface>();
  loading: boolean = false;

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.loadTransactions();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

   loadTransactions() {
    this.loading = true;
    this.transactionService.getTransactions().subscribe(data =>{
      this.loading=false;
      this.dataSource.data=data;
      console.log(data);
    })
   }

   deleteTransaction(id: number) {
    this.loading = true;
    this.transactionService.deleteTransaction(id).subscribe(data =>{
      this.loading=false;
      this.loadTransactions();
      console.log(data);
    })
   }



}
