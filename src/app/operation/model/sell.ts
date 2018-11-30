import { Stock } from '../../stock/model/stock';

export class Sell {
  constructor(
    /* Itens of the operation */
    public pk: string = null,
    public stock: string = null,
    public creation_date: String = null,
    public nickname: String = null,
    public amount: string = null,
    public price: string = null,
    public archived: boolean = false,
    public executed: boolean = false,

    public stop_gain: string = null,
    public stop_loss: string = null,
    public stop_loss_result: string = null,
    public stop_loss_percent: string = null,
    public stop_gain_result: string = null,
    public stop_gain_percent: string = null,
    public result: string = null,
    public gain_percent: string = null,

    public sell_value: string = null,

    public stock_data: Stock = new Stock()
  ) {  }
}
