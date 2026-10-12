import { Component, inject, OnInit, signal } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { SidebarModule, SidebarContent } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { PIcon } from '@primeicons/angular/p-icon';
import { Header } from '../header/header';
import { Router, RouterOutlet } from '@angular/router';
import { NgIcon } from '@ng-icons/core';
import { SupabaseService } from '../../core/services/supabase.service';
import { Chatai } from '../../features';

interface NavItem {
  icon: string;
  label: string;
  isActive?: boolean;
  badge?: string;
  subItems?: { label: string; isActive?: boolean }[];
}
interface NavGroup {
  label: string;
  action?: boolean;
  items: NavItem[];
}

@Component({
  selector: 'app-main-layout',
  styleUrl: './main-layout.css',
  templateUrl: './main-layout.html',
  imports: [NgIcon ,AvatarModule, SidebarModule, SidebarContent, ButtonModule, PIcon, Header, RouterOutlet, Chatai]
})

export class MainLayout {
    isMobile = signal(true);
    open = signal(true);
    loading = signal(true);
    loading1 = signal(false);
    status = signal<any>('');
    navGroups:any = []
    service = inject(SupabaseService)
    Menus:any = []
    private mql?: MediaQueryList; 
    private mqlListener?: (e: MediaQueryListEvent) => void;
    private getMod = inject(SupabaseService)
    private readonly supabaseService = inject(SupabaseService);
    router = inject(Router); 

  async getModuleslocal() {
    try {
      this.loading.set(true);
      const res: any = await this.getMod.getModulesLocal();
      this.navGroups = res.data;
      console.log(this.navGroups);
    } catch (error) {
      console.error('Failed to get modules:', error);
    } finally {
      this.loading.set(false);
    }
}

  async getModulesMenulocal(id: string) {
    try {
      const res: any = await this.getMod.getModulesLocal(`/Menus`,  { moduleId: id });
      this.service.menus.set(res.data);
      await this.router.navigate(['/app/module']);
      console.log(this.service.menus());
    } catch (error) {
      console.error('Failed to get modules:', error);
    } finally {
    }
}


    ngOnInit() {
        if (typeof window === 'undefined') return;
        this.mql = window.matchMedia('(max-width: 1023px)');
        this.isMobile.set(this.mql.matches);
        this.open.set(!this.mql.matches);
        this.mqlListener = (e) => { 
          this.isMobile.set(e.matches);
          this.open.set(!e.matches);
        };
        this.mql.addEventListener('change', this.mqlListener);

        this.getModuleslocal()
    }
    ngOnDestroy() {
      this.mql?.removeEventListener('change', this.mqlListener!);
    }
    hasActiveSub(item: NavItem): boolean {
      return !!item.subItems?.some((s) => s.isActive);
    }

    async ActiveSession(): Promise<void> {
      this.loading1.set(true);
    try {
      const result: any = await this.supabaseService.active();
      this.status.set(result);
      console.log('Active Session result:', result);
    } catch (error) {
      console.error('Active Session Error:', error);
    } finally {
      this.loading1.set(false);
    }
  }
  
  clearStatus() {
  this.status.set(null);
  console.log("first",this.status)
}
}
