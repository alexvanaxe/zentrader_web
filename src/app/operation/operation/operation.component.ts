import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Operation, OperationNested} from '../model/operation';
import {OperationService} from './operation.service';
import {Stock} from '../../stock/model/stock';
import {OperationType} from '../model/operation-type';
import * as moment from 'moment';
import { Buy } from "app/operation/model/buy";

@Component({
  selector: 'zen-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {
  operation: Operation;
  operationNested: OperationNested;

  @Output() onOperationUpdated = new EventEmitter<Operation>();
  @Output() onOperationDeleted = new EventEmitter<Operation>();
  @Output() onBuyChanged = new EventEmitter<Buy>();

  showExp: boolean;
  showBuy: boolean;
  showSell: boolean;
  isEditingOperation: boolean;

  constructor(private operationService: OperationService) {
    this.operation = new Operation();
    this.operationNested = new OperationNested();
    this.operation.operation_type = '1';
  }

  ngOnInit() {
  }

  stockSelected(selectedStock: Stock) {
    this.operation.stock = selectedStock.pk;
    this.operationNested.stock = selectedStock;
  }

  selectedOperationType(selectedOperationType: OperationType) {
    this.operation.operation_type = selectedOperationType.pk;
  }

  experienceSelected(selectedOperation: OperationNested) {
    this.operationNested = selectedOperation;

    this.showExp = !this.showExp;
    this.showBuy = false;
    this.showSell = false;
  }

  buySelected(selectedOperation: OperationNested) {
    this.operationNested = selectedOperation;
    this.showExp = false;
    this.showSell = false;
    this.showBuy = !this.showBuy;
  }

  sellSelected(selectedOperation: OperationNested) {
    this.operationNested = selectedOperation;
    this.showExp = false;
    this.showSell = !this.showSell;
    this.showBuy = false;
  }


  editOperation(selectedOperation: OperationNested) {
    this.operation.date = moment(selectedOperation.date).format('YYYY-MM-DDThh:mm');
    this.operation.pk = selectedOperation.pk;
    this.operation.amount = selectedOperation.amount;
    this.operation.price = selectedOperation.price;
    this.operation.archived = selectedOperation.archived;
    this.operation.nickname = selectedOperation.nickname;
    this.isEditingOperation = true;
  }

  add() {
    this.operationService.add(this.operation).subscribe(operation => this.onOperationUpdated.emit(operation));
  }

  edit() {
    this.operationService.patch(this.operation).subscribe(operation => this.updateScreen());
  }

  delete(selectedOperation: Operation) {
    this.showExp = false;
    this.showSell = false;
    this.showBuy = false;
    this.operationService.delete(selectedOperation).subscribe(result => this.updateScreen());
  }

  processBuy(buy: Buy) {
    this.onBuyChanged.emit(buy);
  }

  updateScreen() {
    this.onOperationUpdated.emit(null);
    this.onBuyChanged.emit(null);
  }
}
