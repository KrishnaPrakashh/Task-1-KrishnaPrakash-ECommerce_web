import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Service {
  constructor(private http:HttpClient)
  {}
  getProduct(){
    return this.http.get("https://dummyjson.com/products")
  }
  getsingleproduct(id:string | number): Observable<any>
  {
    return this.http.get<any>(`https://dummyjson.com/products/${id}`);
  }

  
}
