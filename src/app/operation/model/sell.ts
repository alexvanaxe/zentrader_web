import { Stock } from '../../stock/model/stock';
import { UserInfo } from 'app/zen-auth/model/User';

export class Sell {
  constructor(
    /* Itens of the operation */
    public pk: string = null,
    public stock: string = null,
    public creation_date: string = null,
    public nickname: string = null,
    public amount: string = null,
    public price: string = null,
    public archived: boolean = false,
    public executed: boolean = false,
    public favorite: number = 0,
    public categories: Array<any> = [],
    public category: string = null,
    public suggest_category: string = null,
    public operation_category: string = null,
    public operation_category_display: string = null,

    public buy: string = null,
    public stop_gain: string = null,
    public stop_loss: string = null,
    public stop_loss_result: string = null,
    public stop_loss_percent: string = null,
    public stop_loss_total_percent: string = null,
    public stop_gain_result: string = null,
    public stop_gain_percent: string = null,
    public gain_percent: string = null,
    public profit: string = null,
    public profit_percent: string = null,
    public profit_total_percent: string = null,
    public stock_profit: string = null,
    public stock_profit_percent: string = null,
    public stock_profit_total_percent: string = null,
    public amount_available: string = null,

    public sell_value: string = null,

    public stock_data: Stock = new Stock(),
    public owner_data: UserInfo = new UserInfo(),
    public expanded: boolean = false
  ) {  }
}

export class SellPaginated {
  constructor(
    public count: string = null,
    public next: string = null,
    public previous: string = null,
    public current: string = null,
    public countItemsOnPage: string = null,
    public lastPage: string = null,

    public results: Sell[] = null
  ) {  }
}
