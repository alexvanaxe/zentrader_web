import { Component, OnInit } from '@angular/core';
import { RiskService } from '../risk.service';
import { Risk } from '../model/risk';

@Component({
  selector: 'zen-shark',
  templateUrl: './shark.component.html',
  styleUrls: ['./shark.component.css']
})
export class SharkComponent implements OnInit {
  risk: Risk;

  constructor(private riskService: RiskService) {
    this.risk = new Risk()
  }

  ngOnInit() {
    this.riskService.get().subscribe(risk => this.risk = risk)
  }

}
