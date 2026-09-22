import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  ButtonModule} from 'primeng/button';

@Component({
  imports: [ButtonModule, RouterOutlet],
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
