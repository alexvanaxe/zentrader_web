import {Component, Input, OnInit} from '@angular/core';
import {Operation, OperationNested} from '../model/operation';
import {BuyService} from './buy.service';
import {Buy} from '../model/buy';

@Component({
  selector: 'zen-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  @Input() operationNested: OperationNested;

  constructor(private buyService: BuyService) {}

  ngOnInit() {
  }

  buy() {
    const buy = new Buy();
    buy.operation = this.operationNested.pk;

    this.buyService.add(buy).subscribe();
  }
}
