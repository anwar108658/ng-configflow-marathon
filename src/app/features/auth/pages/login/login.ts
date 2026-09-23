import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputPasswordModule } from 'primeng/inputpassword';
import { PIcon } from '@primeicons/angular/p-icon';

@Component({
  imports: [ButtonModule, InputTextModule, InputPasswordModule, FormsModule,],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  @ViewChild('backgroundAnimation')
  backgroundVideo!: ElementRef<HTMLVideoElement>;
  ngAfterViewInit(): void {
    const video = this.backgroundVideo.nativeElement;

    video.muted = true;
    video.currentTime = 0;
    video.playbackRate = 0.4;

    video.play().catch(error => {
      console.warn('Video autoplay failed:', error);
    });
  }
}
