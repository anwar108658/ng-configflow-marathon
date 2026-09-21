import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputPasswordModule } from 'primeng/inputpassword';
import { PIcon } from '@primeicons/angular/p-icon';

@Component({
  imports: [ButtonModule, InputTextModule, InputPasswordModule, FormsModule,PIcon],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {}
