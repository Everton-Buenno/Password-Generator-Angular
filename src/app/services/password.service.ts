import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { PasswordRequest } from '../interfaces/passwordRequest.interface';
import { PasswordResponse } from '../interfaces/passwordResponse.inteface';

@Injectable({
  providedIn: 'root' 
})
export class PasswordService {
  private readonly MIN_LENGTH = 4;
  private readonly MAX_LENGTH = 32;
  private apiUrl = '/api';  
  
  constructor(private http: HttpClient) { }

  // Métodos públicos
  generatePassword(request: PasswordRequest): Observable<PasswordResponse>{
    const validatedRequest = {
      ...request,
      Length: Math.min(Math.max(Number(request.Length) || 16, this.MIN_LENGTH), this.MAX_LENGTH)
    };
    
    console.log('Requisição sendo enviada:', validatedRequest);
    console.log('URL da API:', this.apiUrl);
    
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    return this.http.post<PasswordResponse>(this.apiUrl, validatedRequest, { headers })
      .pipe(
        tap(response => {
          console.log('Resposta do servidor:', response);
          console.log('Status da resposta:', response ? 'Sucesso' : 'Erro');
        }),
        catchError(error => {
          console.error('Erro na requisição:', error);
          console.error('Detalhes do erro:', {
            status: error.status,
            message: error.message,
            error: error.error
          });
          return of({
            GeneratedAt: new Date().toISOString(),
            Password: 'Erro ao gerar senha. Por favor, tente novamente.',
            Strength: 0
          });
        })
      );
  }
  
 
}
