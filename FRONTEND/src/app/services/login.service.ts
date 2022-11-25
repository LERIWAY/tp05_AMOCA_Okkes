import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
    
  }

  login(login: string | undefined | null, password: string | undefined | null): Observable<any> {
    return this.http.post<any>(environment.apiurl + "login", { login: login, password: password });
  }
}
