import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SupabaseService } from '../../../../core/services/supabase.service';
import { Router } from '@angular/router';

@Component({
  imports: [ButtonModule],
  selector: 'app-module',
  styleUrl: './module.css',
  templateUrl: './module.html',
})
export class Module {
  private getMod = inject(SupabaseService)
  menus = inject(SupabaseService).menus;
  table = inject(SupabaseService).menuTable;
  router = inject(Router);
  ngOnInit(){
    console.log(this.menus())
  }
  async getMenuTablelocal(menuName: string) {
    try {
      const res: any = await this.getMod.getModulesLocal(`/Dynamictable/`+menuName);
      this.table.set(res)
      await this.router.navigate(['/app/report']);
      console.log(this.table);
    } catch (error) {
      console.error('Failed to get modules:', error);
    } finally {
    }
  }
}
