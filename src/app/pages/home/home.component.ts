import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { SliderModule } from 'primeng/slider';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { PasswordService } from '../../services/password.service';
import { PasswordRequest } from '../../interfaces/passwordRequest.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SliderModule,
    CheckboxModule,
    ButtonModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  readonly MIN_LENGTH = 4;
  readonly MAX_LENGTH = 32;

  passwordRequest: PasswordRequest = {
    Length: 8,
    IncludeUppercase: true,
    IncludeLowercase: true,
    IncludeNumbers: true,
    IncludeSpecialChars: true,
  }
  generatedPassword: string = '';
  passwordStrength: number = 0;

  constructor(private messageService: MessageService, private passwordService: PasswordService) {}

  ngOnInit(): void {
    this.generatePassword();
  }

  generatePassword(): void {
    const length = Math.floor(Number(this.passwordRequest.Length));
    this.passwordRequest.Length = Math.min(Math.max(length, this.MIN_LENGTH), this.MAX_LENGTH);
    
    this.passwordService.generatePassword(this.passwordRequest).subscribe({
      next: (response) => {
        if (response && response.Password) {
          this.generatedPassword = response.Password;
          this.passwordStrength = response.Strength;
        } else {
          this.messageService.add({
            severity: 'warn',
            summary: 'Aviso',
            detail: 'Resposta inválida do servidor'
          });
        }
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Erro ao gerar senha. Por favor, tente novamente.'
        });
      }
    });
  }

  copyPassword(): void {
    navigator.clipboard.writeText(this.generatedPassword);
    this.messageService.add({
      severity: 'success',
      summary: 'Copiado!',
      detail: 'Senha copiada para a área de transferência'
    });
  }

  getStrengthColor(): string {
    switch (this.passwordStrength) {
      case 5: return 'bg-green-500';
      case 4: return 'bg-green-400';
      case 3: return 'bg-yellow-500';
      case 2: return 'bg-orange-500';
      case 1: return 'bg-red-500';
      default: return 'bg-red-600';
    }
  }

  getStrengthText(): string {
    switch (this.passwordStrength) {
      case 5: return 'Excelente';
      case 4: return 'Muito Forte';
      case 3: return 'Forte';
      case 2: return 'Média';
      case 1: return 'Fraca';
      default: return 'Muito Fraca';
    }
  }

  getStrengthPercentage(): number {
    return (this.passwordStrength / 5) * 100;
  }
}
