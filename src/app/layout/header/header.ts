import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Sidebar as PrimeSidebar } from '@primeicons/angular/sidebar';

@Component({
  imports: [ButtonModule,PrimeSidebar],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {}
