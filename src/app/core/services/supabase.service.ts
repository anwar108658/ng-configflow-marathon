import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../Environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  public readonly client: SupabaseClient;

  constructor() {
    this.client = createClient(
      environment.supabase.url,
      environment.supabase.key
    );
  }
}