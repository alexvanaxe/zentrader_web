import {Component, OnInit} from '@angular/core';
import {Operation, OperationNested} from '../model/operation';
import {OperationService} from './operation.service';
import {Stock} from '../../stock/model/stock';
import {OperationType} from '../model/operation-type';
import * as moment from 'moment';

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
  isEditingOperation: boolean;

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


  editOperation(selectedOperation: OperationNested) {
    console.log(moment(selectedOperation.date).format('YYYY-MM-DDThh:mm'))
    this.operation.date = moment(selectedOperation.date).format('YYYY-MM-DDThh:mm');
    this.operation.pk = selectedOperation.pk;
    this.operation.amount = selectedOperation.amount;
    this.operation.price = selectedOperation.price;
    this.isEditingOperation = true;
  }

  ngOnInit() {
  }

  add() {
    this.operationService.add(this.operation).subscribe();
  }

  edit() {
    this.operationService.patch(this.operation).subscribe();
  }
}
