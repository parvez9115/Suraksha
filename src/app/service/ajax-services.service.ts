import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpEventType,
} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AjaxServicesService {

  constructor(private http: HttpClient) { }



  ajaxget(url: string): Observable<any> {

    console.log(url)
    return this.http.get(url).pipe(map((x) => {
      return x
    }))

  }

  ajaxPost(url: string, data: any): Observable<any> {

    return this.http.post(url, data).pipe(map((x) => {
      return x
    }))

  }
}
