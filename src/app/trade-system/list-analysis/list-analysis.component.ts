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
import { TechnicalAnalyzeService } from '../technical-analyze.service';

import { Analysis, TechnicalAnalyze } from '../model/trade-system';

import { AutoUnsubscribe } from '../../shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-list-analysis',
  templateUrl: './list-analysis.component.html',
  styleUrls: ['./list-analysis.component.css']
})
export class ListAnalysisComponent implements OnInit, OnDestroy {
  @Input() analysisPk: string;

  analysis: Analysis;

  constructor(
    private analysisService: AnalysisService,
    private technicalAnalyzeService: TechnicalAnalyzeService
  ) {
    this.analysis = new Analysis();
  }

  ngOnInit(): void {
    this.retrieveAnalysis();
  }

  ngOnDestroy() {}

  retrieveAnalysis() {
    this.analysisService
      .get(this.analysisPk)
      .subscribe(result => this.processAnalysis(result));
  }

  processAnalysis(analysis: Analysis) {
    this.analysis = analysis;
  }

  updateList() {
    this.retrieveAnalysis();
  }

  removeTechAnalysis(techAnalysis: TechnicalAnalyze) {
    this.technicalAnalyzeService
      .remove(techAnalysis)
      .subscribe(result => this.updateList());
  }
}
