import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private url = 'api/counters';

  constructor(private httpClient: HttpClient) { }

  saveCounter(value: number): Observable<any> {
    return this.httpClient.post(this.url, {value});
  }

}
