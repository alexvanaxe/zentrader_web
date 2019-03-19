import { Component, OnInit, OnDestroy } from '@angular/core';
import { RiskService } from '../risk.service';
import { Risk } from '../model/risk';
import { AutoUnsubscribe } from 'app/shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-shark',
  templateUrl: './shark.component.html',
  styleUrls: ['./shark.component.css']
})
export class SharkComponent implements OnInit, OnDestroy {
  risk: Risk;

  constructor(private riskService: RiskService) {
    this.risk = new Risk()
  }

  ngOnDestroy() {}

  ngOnInit() {
    this.riskService.get().subscribe(risk => this.risk = risk)
  }

}
