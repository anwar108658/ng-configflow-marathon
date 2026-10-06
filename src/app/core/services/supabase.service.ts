import { inject, Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../Environments/environment';
import { firstValueFrom } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private readonly http = inject(HttpClient);
   url:string = 'https://m3vsbzqp-5086.asse.devtunnels.ms/api/Modules'
   urlActive:string = 'https://m3vsbzqp-8000.asse.devtunnels.ms/api/ui/dashboard'

  public readonly client: SupabaseClient;
  private readonly apiKey = 'fte-secret-key-2026';

  constructor() {
    this.client = createClient(
      environment.supabase.url,
      environment.supabase.key
    );
    
  }
  async getModulesLocal(){
    const res = await firstValueFrom(this.http.get(this.url))
    return res
  }
  async active(){
     const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-API-Key': this.apiKey
    });
    const res = await firstValueFrom(this.http.get(this.urlActive,{headers}))
    return res
  }
}