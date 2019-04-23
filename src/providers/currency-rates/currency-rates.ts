import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class CurrencyRatesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CurrencyRatesProvider Provider');
  }

  GetCurrencyData():Observable<any>{
    return this.http.get("https://api.exchangeratesapi.io/latest")
  
  } 

}
