import { Component, inject } from '@angular/core';
import { SupabaseService } from '../../core/services/supabase.service';
import { NgIcon } from '@ng-icons/core';
import { DatePipe } from '@angular/common';
import { TableModule } from 'primeng/table'; 

@Component({
  imports: [NgIcon,DatePipe,TableModule],
  selector: 'app-report-table',
  styleUrl: './report-table.css',
  templateUrl: './report-table.html',
})
export class ReportTable {
  table = inject(SupabaseService).menuTable;
  
}
