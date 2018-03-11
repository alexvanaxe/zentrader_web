import { Component, OnInit } from '@angular/core';
import {Operation, OperationNested} from '../model/operation';
import {OperationService} from './operation.service';
import {Stock} from '../../stock/model/stock';
import {OperationType} from '../model/operation-type';

@Component({
  selector: 'zen-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {
  operation: Operation;
  operationNested: OperationNested;

  showExp: boolean;
  showBuy: boolean;
  showSell: boolean;

  constructor(private operationService: OperationService) {
    this.operation = new Operation();
    this.operationNested = new OperationNested();
    this.operation.operation_type = '1';
  }

  selectedStock(selectedStock: Stock) {
    this.operation.stock = selectedStock.pk;
    this.operationNested.stock = selectedStock;
  }

  selectedOperationType(selectedOperationType: OperationType) {
    this.operation.operation_type = selectedOperationType.pk;
  }

  experienceSelected(selectedOperation: OperationNested) {
    this.operationNested = selectedOperation;
    this.showExp = true;
    this.showBuy = false;
    this.showSell = false;
  }

  buySelected(selectedOperation: OperationNested) {
    console.log(selectedOperation.stock.code);
    this.showExp = false;
    this.showSell = true;
    this.showBuy = true;
  }

  sellSelected(selectedOperation: OperationNested) {
    this.operationNested = selectedOperation;
    this.showExp = false;
    this.showSell = true;
    this.showBuy = true;
  }

  ngOnInit() {
  }

  add() {
    this.operationService.add(this.operation).subscribe();
  }

}
