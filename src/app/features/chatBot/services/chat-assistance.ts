import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { AiChatResponse } from '../model';

@Service()
export class ChatAssistance {
     private readonly http = inject(HttpClient);

  private readonly apiUrl = 'https://m3vsbzqp-8000.asse.devtunnels.ms/api/chat';

  private readonly apiKey = 'fte-secret-key-2026';

  ask(prompt: string): Observable<AiChatResponse> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-API-Key': this.apiKey
    });

    console.log(prompt)

    return this.http.post<AiChatResponse>(
      this.apiUrl,
      {
        user_prompt:prompt
      },
      {
        headers
      }
    );
  }
}
