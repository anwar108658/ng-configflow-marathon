import { Component, OnInit, signal } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { SidebarModule, SidebarContent } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { Plus } from '@primeicons/angular/plus';
import { ChevronDown } from '@primeicons/angular/chevron-down';
import { EllipsisV } from '@primeicons/angular/ellipsis-v';
import { Sidebar as primeSidebar} from '@primeicons/angular/sidebar';
import { PIcon } from '@primeicons/angular/p-icon';
import { Header } from '../header/header';

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
  imports: [AvatarModule, SidebarModule, SidebarContent, ButtonModule, Plus, ChevronDown, EllipsisV, PIcon, Header]
})

export class MainLayout {
    isMobile = signal(true);
    open = signal(true);
    private mql?: MediaQueryList;
    private mqlListener?: (e: MediaQueryListEvent) => void;
    navGroups: NavGroup[] = [
        {
          label: 'Navigation',
          items: [
            { icon: 'home', label: 'Home', isActive: true },
            { icon: 'inbox', label: 'Inbox', badge: '12' },
            { icon: 'search', label: 'Search' },
            { icon: 'bell', label: 'Notifications', badge: '3' }
          ]
        },
        {
          label: 'Projects',
          action: true,
          items: [
            { icon: 'chart-bar', label: 'Analytics', subItems: [{ label: 'Overview', isActive: true }, { label: 'Reports' }, { label: 'Real-time' }] },
            { icon: 'users', label: 'Team' },
            { icon: 'calendar', label: 'Calendar' },
            { icon: 'folder', label: 'Documents', subItems: [{ label: 'Shared' }, { label: 'Private' }, { label: 'Archived' }] }
          ]
        },
        {
          label: 'Billing',
          items: [
            { icon: 'credit-card', label: 'Payments' },
            { icon: 'shopping-cart', label: 'Orders' },
            { icon: 'star', label: 'Subscriptions' }
          ]
        }
    ];
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
    }
    ngOnDestroy() {
      this.mql?.removeEventListener('change', this.mqlListener!);
    }
    hasActiveSub(item: NavItem): boolean {
      return !!item.subItems?.some((s) => s.isActive);
    }
}
