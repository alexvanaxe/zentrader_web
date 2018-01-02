import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {OperationType} from '../model/operation-type';
import {OperationTypeService} from './operation-type.service';

@Component({
  selector: 'zen-operation-type',
  templateUrl: './operation-type.component.html',
  styleUrls: ['./operation-type.component.css']
})
export class OperationTypeComponent implements OnInit {

  operationTypes: OperationType[];
  @Output() onClickOperationType = new EventEmitter<OperationType>();

  constructor(private operationTypeService: OperationTypeService) {  }

  ngOnInit() {
    this.getOperationTypes();
  }

  getOperationTypes() {
    this.operationTypeService.list().subscribe(operationTypes => this.populateOperationTypes(operationTypes));
  }

  populateOperationTypes(operationTypes: OperationType[]) {
    this.operationTypes = operationTypes;
  }

  emitOperationTypeClicked(operationTypeClicked: OperationType) {
    this.onClickOperationType.emit(operationTypeClicked);
  }
}
