import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/pages/login/interfaces/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api: string | undefined;

  constructor(private httpClient: HttpClient) {
    this.api = environment.domain;
  }

  public login(user: User) {
    return this.httpClient.post(`${this.api}/auth/signin`, user)
  }

  public listAll(){
    return this.httpClient.get(`${this.api}/document`)
  }

  public listLastTen(){
    return this.httpClient.get(`${this.api}/document?total_per_page=10&order_by=updated_at`)
  }

}
