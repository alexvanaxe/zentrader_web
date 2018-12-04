import { Stock } from '../../stock/model/stock';

export class Buy {
  constructor(
    /* Itens of the operation */
    public pk: string = null,
    public stock: string = null,
    public creation_date: String = null,
    public nickname: String = null,
    public amount: string = null,
    public cost: string = null,
    public price: string = null,
    public archived: boolean = false,

    public experience: string = null,
    public operation_gain: string = null,
    public operation_average_price: string = null,
    public average_cost: string = null,
    public operation_gain_percent: string = null,
    public stock_data: Stock = new Stock()

  ) {  }
}
