import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/assets/enviroments/enviroments';
import { products } from '../interfaces/products'


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http:HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/productos/';
  }

  getListProducts():Observable<products[]> {
    return this.http.get<products[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
}
