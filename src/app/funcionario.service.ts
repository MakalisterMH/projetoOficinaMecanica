import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private apiUrl = 'http://localhost:8080/funcionarios';

  constructor(private http: HttpClient) { }

  cadastrarCliente(usuario: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, usuario)
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }



  
}
