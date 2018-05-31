import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {Operation, OperationNested} from '../model/operation';
import {OperationService} from '../operation/operation.service';

@Component({
  selector: 'zen-operation-list',
  templateUrl: './operation-list.component.html',
  styleUrls: ['./operation-list.component.css']
})
export class OperationListComponent implements OnInit {

  @Input() operationsNested: OperationNested[];
  @Output() onExperienceOperationSelected = new EventEmitter<OperationNested>();
  @Output() onBuyOperationSelected = new EventEmitter<OperationNested>();
  @Output() onSellOperationSelected = new EventEmitter<OperationNested>();
  @Output() onEditOperationSelected = new EventEmitter<OperationNested>();

  constructor(private operationService: OperationService) { }

  ngOnInit() {
  }

  emmitExperienceSelected(operationSelected: OperationNested) {
    this.onExperienceOperationSelected.emit(operationSelected);
  }

  emmitBuySelected(operationSelected: OperationNested) {
    this.onBuyOperationSelected.emit(operationSelected);
  }

  emmitEditSelected(operationSelected: OperationNested) {
    console.log(operationSelected.archived);
    this.onEditOperationSelected.emit(operationSelected);
  }

  emmitSellSelected(operationSelected: OperationNested) {
    this.onSellOperationSelected.emit(operationSelected);
  }

  deleteOperation(operationSelected: Operation) {
    this.operationService.delete(operationSelected).subscribe();
  }
}
