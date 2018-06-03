import { Component, OnInit, ViewChild } from '@angular/core';
import { OperationService } from "app/operation/operation/operation.service";
import { OperationNested } from "app/operation/model/operation";
import { OperationComponent } from "app/operation/operation/operation.component";
import { BuyService } from "app/operation/buy/buy.service";
import { BuyNested } from "app/operation/model/buy";

@Component({
  selector: 'zen-operations-overview',
  templateUrl: './operations-overview.component.html',
  styleUrls: ['./operations-overview.component.css']
})
export class OperationsOverviewComponent implements OnInit {

  operationsNested: OperationNested[];
  buys: BuyNested[];

  @ViewChild(OperationComponent)
  operationComponent: OperationComponent;

  constructor(private operationService: OperationService, private buyService: BuyService) { }

  ngOnInit() {
    this.getOperationList();
  }

  getOperationList() {
    this.operationService.list().subscribe(operationResult => this.operationsNested = operationResult);
  }

  updateOperationList() {
    this.getOperationList();
  }

  updateBuyList() {
    this.buyService.list().subscribe(buys => this.buys = buys);
  }


}
