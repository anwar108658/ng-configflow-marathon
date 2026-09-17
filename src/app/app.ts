import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  ButtonModule} from 'primeng/button';
import { Sidebar } from './layout/sidebar/sidebar';

@Component({
  imports: [ButtonModule,Sidebar],
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
