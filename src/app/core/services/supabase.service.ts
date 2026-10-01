import { inject, Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../Environments/environment';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private readonly http = inject(HttpClient);
   url:string = 'https://m3vsbzqp-5086.asse.devtunnels.ms/api/Modules'

  public readonly client: SupabaseClient;

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
}