export interface Menu {
  id: string;
  name: string;
  code?: string | null;
  sort_order: number;
  report_id?: string | null;
  sub_page_id?: string | null;
  config?: Record<string, unknown> | null;
  route?: string | null;
  icon?: string | null;
  is_active: boolean;
}

export interface Header {
  id: string;
  name: string;
  sort_order: number;
  menus: Menu[];
}

export interface MenuType {
  id: string;
  code: string;
  name: string;
  sort_order: number;
  headers: Header[];
}

export interface Module {
  id: string;
  code: string;
  name: string;
  sort_order: number;
  menu_types: MenuType[];
}