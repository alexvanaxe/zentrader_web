import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';

import { AnalysisService } from '../analysis.service';

import { Analysis } from '../model/trade-system';

import { AutoUnsubscribe } from '../../shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-analysis-update',
  templateUrl: './analysis-update.component.html',
  styleUrls: ['./analysis-update.component.css']
})
export class AnalysisUpdateComponent implements OnInit, OnDestroy {
  @Input() analysis: Analysis;
  @Output() analysisUpdated = new EventEmitter<Analysis>();

  constructor(private analysisService: AnalysisService) {}

  ngOnInit(): void {}

  ngOnDestroy() {}

  updateAnalysis() {
    this.analysisService
      .patch(this.analysis)
      .subscribe(result => this.processUpdateComplete(result));
  }

  processUpdateComplete(analysis: Analysis) {
    this.analysis = analysis;
    this.analysisUpdated.emit(analysis);
  }
}
