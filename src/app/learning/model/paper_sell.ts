import { Stock } from '../../stock/model/stock';

export class PaperSell {
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

    public paper_buy: string = null,
    public stop_loss: string = null,
    public stop_gain: string = null,

    public sell_gain: string = null,
    public sell_gain_percent: string = null,

    // public operation_gain: string = null,
    // public operation_gain_percent: string = null,
    // public operation_average_price: string = null,
    // public average_cost: string = null,
    // public amount_available: string = null,

    public expanded: boolean = false,
    public stock_data: Stock = new Stock()

  ) {  }
}
