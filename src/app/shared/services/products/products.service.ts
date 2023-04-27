import { Injectable } from '@angular/core';
import { ApiService } from '../Api/api.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private apiService: ApiService) { }

  listAllMaterial(): Observable<any> {
    return this.apiService.listAll()
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }

  listLastTenMaterial(): Observable<any> {
    return this.apiService.listLastTen()
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }



}
