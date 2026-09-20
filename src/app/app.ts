import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  ButtonModule} from 'primeng/button';
import { MainLayout } from './layout/main-layout/main-layout';
import { Login } from './features/auth/pages/login/login';

@Component({
  imports: [ButtonModule, MainLayout, Login],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('configflow');
  constructor() {
    const style = document.createElement('style');
    style.textContent = `
      #p-license-host {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

  }
}
