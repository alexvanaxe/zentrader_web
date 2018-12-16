import { Stock } from '../../stock/model/stock';

export class Sell {
  constructor(
    /* Itens of the operation */
    public pk: string = null,
    public stock: string = null,
    public creation_date: String = null,
    public nickname: string = null,
    public amount: string = null,
    public price: string = null,
    public archived: boolean = false,
    public executed: boolean = false,

    public buy: string = null,
    public stop_gain: string = null,
    public stop_loss: string = null,
    public stop_loss_result: string = null,
    public stop_loss_percent: string = null,
    public stop_gain_result: string = null,
    public stop_gain_percent: string = null,
    public result: string = null,
    public gain_percent: string = null,
    public profit: string = null,
    public profit_percent: string = null,
    public stock_profit: string = null,
    public stock_profit_percent: string = null,
    public amount_available: string = null,

    public sell_value: string = null,

    public stock_data: Stock = new Stock(),
    public expanded: boolean = false
  ) {  }
}
