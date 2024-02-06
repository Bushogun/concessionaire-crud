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
  
  getData (): Observable<TransactionInterface[]> {
    const apiGetData = `${environment.API_URL}${environment.API_GET_SELLS}`
    return this.http.get<TransactionInterface[]>(apiGetData);
  }

}
