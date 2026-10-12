import { inject, Injectable, signal } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../Environments/environment';
import { firstValueFrom } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private readonly http = inject(HttpClient);
   baseUrl1:string = 'https://m3vsbzqp-5086.asse.devtunnels.ms/api'
   baseUrl:string = 'https://m3vsbzqp-8000.asse.devtunnels.ms/api'

   menus:any = signal([]);
   menuTable:any = signal([]);

  public readonly client: SupabaseClient;
  private readonly apiKey = 'fte-secret-key-2026';

   headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-API-Key': this.apiKey
    });

    

  constructor() {
    this.client = createClient(
      environment.supabase.url,
      environment.supabase.key
    );
  }

  private get<T>(endpoint: string): Promise<T> {
    return firstValueFrom(
      this.http.get<T>(
        `${this.baseUrl}/${endpoint}`,
        { headers: this.headers }
      )
    );
  }

  async getModulesLocal(endpoint: string = '/Modules', parameters: any = {}): Promise<any> {
    console.log(this.baseUrl1)
    const res = await firstValueFrom(this.http.get(this.baseUrl1 + endpoint, { params: parameters }))
    console.log(res,"res")
    return res
  }
  
  async active() {
    return this.get('ui/dashboard');
  }

  async pendingHighOp() {
    return this.get('approvals/pending');
  }

  deletePendingHighOp(id: string, msg?: string) {
    console.log(id,msg)
    return firstValueFrom(this.http.post(`${this.baseUrl}/approvals/${id}/decision`,
      {
        decision: msg,
        reviewer_notes: 'Reviewed via Admin UI'
      },
      {
        headers: this.headers
      }
    ));
  }
  
}