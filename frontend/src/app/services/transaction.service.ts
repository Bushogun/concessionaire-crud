import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})

export class TransactionService {
  myDate = new Date();
  constructor() {
  }
  
  public getTransactions() : Transaction[]{
    let operation1 = new Transaction();
    operation1.idTransaction = 1;
    operation1.clientName = 'Jonathan';
    operation1.concessionaire = 'AutoGermana';
    operation1.modelVehicle = 'BMW';
    operation1.sellDate = this.myDate;
    operation1.sellPrice = 1000;

    let operation2 = new Transaction();
    operation2.idTransaction = 2;
    operation2.clientName = 'Alice';
    operation2.concessionaire = 'AutoWorld';
    operation2.modelVehicle = 'Mercedes';
    operation2.sellDate = new Date();
    operation2.sellPrice = 1500;

    let operation3 = new Transaction();
    operation3.idTransaction = 3;
    operation3.clientName = 'Bob';
    operation3.concessionaire = 'CarCity';
    operation3.modelVehicle = 'Toyota';
    operation3.sellDate = new Date();
    operation3.sellPrice = 1200;

    let operation4 = new Transaction();
    operation4.idTransaction = 4;
    operation4.clientName = 'Eva';
    operation4.concessionaire = 'FastCars';
    operation4.modelVehicle = 'Ferrari';
    operation4.sellDate = new Date();
    operation4.sellPrice = 2000;

    return [operation1, operation2, operation3, operation4];
  } 
    
}
