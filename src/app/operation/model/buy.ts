import {OperationNested} from './operation';

export class Buy {
  constructor(
    public pk: string = null,
    public operation: string = null,
  ) {  }
}

export class BuyNested {
  constructor(
    public pk: string = null,
    public operation: OperationNested = new OperationNested(),
  ) {  }
}
