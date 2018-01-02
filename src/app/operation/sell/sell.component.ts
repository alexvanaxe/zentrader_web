import {Component, Input, OnInit} from '@angular/core';
import {Sell} from '../model/sell';
import {SellService} from './sell.service';
import {Buy} from '../model/buy';
import {Operation, OperationNested} from '../model/operation';

@Component({
  selector: 'zen-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  sell: Sell;
  @Input() operationNested: OperationNested;

  constructor(private sellService: SellService) {
    this.sell = new Sell();
  }

  ngOnInit() {
  }

  add() {
    this.sell.operation = this.operationNested.pk;

    this.sellService.add(this.sell).subscribe();
  }

  selectOperation(operation: Operation) {
    this.sell.operation = operation.pk;
  }
}
