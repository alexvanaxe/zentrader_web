import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/core';

import { AutoUnsubscribe } from '../../shared/auto-unsubscribe';

import { ReportService } from '../report.service';
import { TotalProfitReport } from '../model/report';

@AutoUnsubscribe()
@Component({
  selector: 'zen-total-profit-report',
  templateUrl: './total-profit-report.component.html',
  styleUrls: ['./total-profit-report.component.css']
})
export class TotalProfitReportComponent implements OnInit, OnDestroy {
  report: TotalProfitReport;

  constructor(private reportService: ReportService) { }

  ngOnDestroy() {}

  ngOnInit(): void {
    this.reportService.get().subscribe(result => this.report = result);
  }

}
