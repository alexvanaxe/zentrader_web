import { Component, OnInit, ViewChild } from '@angular/core';
import { OperationService } from "app/operation/operation/operation.service";
import { OperationNested } from "app/operation/model/operation";
import { OperationComponent } from "app/operation/operation/operation.component";

@Component({
  selector: 'zen-operations-overview',
  templateUrl: './operations-overview.component.html',
  styleUrls: ['./operations-overview.component.css']
})
export class OperationsOverviewComponent implements OnInit {

  operationsNested: OperationNested[];

  @ViewChild(OperationComponent)
  private operationComponent: OperationComponent;

  constructor(private operationService: OperationService) { }

  ngOnInit() {
    this.getOperationList();
  }

  getOperationList() {
    this.operationService.list().subscribe(operationResult => this.operationsNested = operationResult);
  }

  updateOperationList() {
    this.getOperationList();
  }
}
