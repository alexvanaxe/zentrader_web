import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

import { ReportService } from '../report.service';
import { TotalProfitMonthlyReport } from '../model/report';

@Component({
  selector: 'zen-monthly-report',
  templateUrl: './monthly-report.component.html',
  styleUrls: ['./monthly-report.component.css']
})
export class MonthlyReportComponent implements OnInit {
  monthlyReport: TotalProfitMonthlyReport = new TotalProfitMonthlyReport();
  monthList: Array<number> = new Array<number>();

  constructor(private reportService: ReportService) {
    this.reportService.getMonthlyReport().subscribe(result => this.processReport(result));

    let begMonth = moment().subtract(12, 'months');
    for (let i = 1; i <= 12; i++) {
      begMonth = moment(begMonth).add(1, 'months');
      this.monthList.push(+begMonth.format('M'));
    }
  }

  ngOnInit(): void {
  }

  processReport(monthlyReport: TotalProfitMonthlyReport) {

    /*for (let key in monthlyReport.total_monthly_profit) {
      const value = monthlyReport.total_monthly_profit[key];
    }*/
    console.log(monthlyReport);

    this.monthlyReport = monthlyReport;
  }

  monthName(monthNum: number) {
    return moment(monthNum, 'MM').format('MMMM');
  }

}
