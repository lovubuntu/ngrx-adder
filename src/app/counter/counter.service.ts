import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Counter } from './counter.model';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private url = 'api/counters';

  constructor(private httpClient: HttpClient) { }

  saveCounter(value: number): Observable<any> {
    return this.httpClient.post<Counter>(this.url, {value, id: 1} as Counter);
  }

  getCounter(id: number): Observable<Counter> {
    return this.httpClient.get<Counter>(`${this.url}/${id}`);
  }

}
