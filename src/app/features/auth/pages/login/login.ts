import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputPasswordModule } from 'primeng/inputpassword';
import { IftaLabelModule } from 'primeng/iftalabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule, InputIcon } from 'primeng/inputicon';
import { PIcon } from '@primeicons/angular/p-icon';

@Component({
  imports: [ButtonModule, InputTextModule, InputPasswordModule, FormsModule, IftaLabelModule, IconFieldModule, InputIcon,PIcon],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  
}
