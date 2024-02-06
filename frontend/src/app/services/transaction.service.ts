import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { TransactionInterface } from '../interfaces/transaction.interface';

@Injectable({
  providedIn: 'root'
})

export class TransactionService {
  constructor(private http: HttpClient) {
  }
  
  getTransactions (): Observable<TransactionInterface[]> {
    const apiGetData = `${environment.API_URL}${environment.API_GET_SELLS}`
    return this.http.get<TransactionInterface[]>(apiGetData);
  }

  getTransaction (id:number): Observable<TransactionInterface[]> {
    const apiGetSpecificData = `${environment.API_URL}${environment.API_GET_SPECIFIC_SELL}${id}`
    return this.http.get<TransactionInterface[]>(apiGetSpecificData);
  }

  deleteTransaction (id:number): Observable<TransactionInterface[]> {
    const apiDeleteData = `${environment.API_URL}${environment.API_DELETE_SELL}${id}`
    return this.http.get<TransactionInterface[]>(apiDeleteData);
  }

  updateTransaction (id:number): Observable<TransactionInterface[]> {
    const apiUpdateData = `${environment.API_URL}${environment.API_EDIT_SELL}${id}`
    return this.http.get<TransactionInterface[]>(apiUpdateData);
  }

}
