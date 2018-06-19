import { Stock } from '../../stock/model/stock';

export class Buy {
  constructor(
    /* Itens of the operation */
    public pk: string = null,
    public stock: number = null,
    public operation_type: string = null,
    public date: String = null,
    public nickname: String = null,
    public amount: number = null,
    public cost: number = null,
    public price: string = null,
    public archived: boolean = false,

    public operation_gain: string = null,
    public stock_data: Stock = new Stock()

  ) {  }
}
