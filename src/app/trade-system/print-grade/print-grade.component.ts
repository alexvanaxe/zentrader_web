import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges,
  EventEmitter,
  Output,
  OnDestroy
} from '@angular/core';

import { AnalysisService } from '../analysis.service';
import { AutoUnsubscribe } from '../../shared/auto-unsubscribe';
import { Analysis } from '../model/trade-system';

@AutoUnsubscribe()
@Component({
  selector: 'zen-print-grade',
  templateUrl: './print-grade.component.html',
  styleUrls: ['./print-grade.component.css']
})
export class PrintGradeComponent implements OnInit, OnDestroy {
  @Input() analysisPk: string;

  analysis: Analysis;

  constructor(private analysisService: AnalysisService) {
    this.analysis = new Analysis();
  }

  ngOnInit(): void {
    this.retrieveGrade();
  }

  ngOnDestroy() {}

  retrieveGrade() {
    this.analysisService
      .get(this.analysisPk)
      .subscribe(result => this.processAnalysis(result));
  }

  processAnalysis(analysis: Analysis) {
    this.analysis = analysis;
  }

}
