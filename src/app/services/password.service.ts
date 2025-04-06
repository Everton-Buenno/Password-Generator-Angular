import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { PasswordRequest } from '../interfaces/passwordRequest.interface';
import { PasswordResponse } from '../interfaces/passwordResponse.inteface';

@Injectable({
  providedIn: 'root'  
})
export class PasswordService {
  private readonly MIN_LENGTH = 4;
  private readonly MAX_LENGTH = 32;
  private apiUrl = '/api';  
  
  // Construtor (opcional)
  constructor(private http: HttpClient) { }

  // Métodos públicos
  generatePassword(request: PasswordRequest): Observable<PasswordResponse>{
    const validatedRequest = {
      ...request,
      Length: Math.min(Math.max(Number(request.Length) || 16, this.MIN_LENGTH), this.MAX_LENGTH)
    };
    
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    return this.http.post<PasswordResponse>(this.apiUrl, validatedRequest, { headers })
      .pipe(
        catchError(error => {
          return of({
            GeneratedAt: new Date().toISOString(),
            Password: 'Erro ao gerar senha. Por favor, tente novamente.',
            Strength: 0
          });
        })
      );
  }
}
