import { Stock } from '../../stock/model/stock';
import { Sell } from './sell';

export class Buy {
  constructor(
    /* Itens of the operation */
    public pk: string = null,
    public stock: string = null,
    public creation_date: string = null,
    public nickname: string = null,
    public amount: string = null,
    public cost: string = null,
    public price: string = null,
    public archived: boolean = false,

    public executed: boolean = true,
    public experience: string = null,
    public operation_gain: string = null,
    public operation_gain_percent: string = null,
    public operation_average_price: string = null,
    public average_cost: string = null,
    public amount_available: string = null,
    public stock_data: Stock = new Stock(),
    public favorite: number = 0,

    public expanded: boolean = false,
    public sell_set: Sell[] = null,
    public detailed = false
  ) {  }
}
