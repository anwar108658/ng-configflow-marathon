import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModulesService } from '../../features/modules/services/modules.service';

@Component({
  selector: 'app-menutest',
  standalone: true,
  imports: [JsonPipe],
  template: `
    <pre>{{ modules | json }}</pre>
  `
})
export class Menutest implements OnInit {

  modules: any = [];

  constructor(
    private menuService: ModulesService
  ) {}

  async ngOnInit() {
    this.modules = await this.menuService.getModules();
  }
}