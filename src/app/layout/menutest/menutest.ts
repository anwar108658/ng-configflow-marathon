import { JsonPipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { ModulesService } from '../../features/modules/services/modules.service';

@Component({
  selector: 'app-menutest',
  standalone: true,
  imports: [],
  template: `
    <pre>test</pre>
  `
})
export class Menutest implements OnInit {

  modules = signal<any[]>([]);

  constructor(
    private menuService: ModulesService
  ) {}

  async ngOnInit() {
    this.modules.set(await this.menuService.getModules());
    console.log(this.modules());
  }
}