import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Sidebar as PrimeSidebar } from '@primeicons/angular/sidebar';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  imports: [ButtonModule,PrimeSidebar,SidebarModule],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {}
