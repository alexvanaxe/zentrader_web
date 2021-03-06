import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

import { AutoUnsubscribe } from '../../shared/auto-unsubscribe';

import { TechnicalAnalyzeService } from '../technical-analyze.service';
import { IndicatorService } from '../indicator.service';

import { TechnicalAnalyze, Indicator } from '../model/trade-system';

@AutoUnsubscribe()
@Component({
  selector: 'zen-tech-analysis-create',
  templateUrl: './tech-analysis-create.component.html',
  styleUrls: ['./tech-analysis-create.component.css']
})
export class TechAnalysisCreateComponent implements OnInit, OnDestroy {

  @Input() analysisPk: string;
  @Output() analysisAdded = new EventEmitter<TechnicalAnalyze>();

  techAnalyze: TechnicalAnalyze;
  indicators: Indicator[];

  constructor(private techAnalyzeService: TechnicalAnalyzeService,
              private indicatorService: IndicatorService) {
    this.techAnalyze = new TechnicalAnalyze();
  }

  ngOnInit(): void {
    this.retrieveIndicators();
  }

  ngOnDestroy() {}

  retrieveIndicators() {
    this.indicatorService.list().subscribe(result => this.processIndicators(result));
  }

  processIndicators(indicators: Indicator[]) {
    this.indicators = indicators;
  }

  addAnalyze() {
    this.techAnalyze.analysis = this.analysisPk;

    this.techAnalyzeService.add(this.techAnalyze).subscribe(result => this.techAnalyzeAdded(result));
  }

  techAnalyzeAdded(techAnalyze: TechnicalAnalyze) {
    this.techAnalyze = new TechnicalAnalyze();
    this.analysisAdded.emit(techAnalyze);
  }
}
