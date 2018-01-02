
import {Stock} from '../../stock/model/stock';
import {OperationType} from './operation-type';

export class Operation {
  constructor(
    public pk: string = null,
    public stock: number = null,
    public operation_type: string = null,
    public date: Date = null,
    public amount: number = null,
    public cost: number = null,
    public price: string = null,
  ) {  }
}


export class OperationNested {
  constructor(
    public pk: string = null,
    public stock: Stock = new Stock(),
    public operation_type: OperationType = null,
    public date: Date = null,
    public amount: number = null,
    public cost: number = null,
    public price: string = null,
  ) {  }
}
