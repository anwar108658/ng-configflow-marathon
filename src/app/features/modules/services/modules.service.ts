import { Injectable } from '@angular/core';
import { SupabaseService } from '../../../core/services/supabase.service';
import { Module } from '../models/modules.model';

@Injectable({
  providedIn: 'root'
})
export class ModulesService {

  constructor(
    private supabase: SupabaseService
  ) {}

  async getModules() {
    const { data1, error1 }:any = await this.supabase.client
  .from('menu_types')
  .select('*');

console.log(data1);
console.log(error1);


    const { data, error } = await this.supabase.client
      .from('modules')
      .select(`
        id,
        code,
        name,
        sort_order,
        is_active,
        menu_types (
          id,
          code,
          name,
          sort_order,
          is_active,
          headers (
            id,
            name,
            sort_order,
            is_active,
            menus (
              id,
              name,
              code,
              sort_order,
              report_id,
              sub_page_id,
              config,
              route,
              icon,
              is_active
            )
          )
        )
      `)
      .eq('is_active', true)
      .order('sort_order', { ascending: true });

    if (error) {
      console.error('Failed to load menu:', error);
      throw error;
    }
    console.log(data)
  }
}