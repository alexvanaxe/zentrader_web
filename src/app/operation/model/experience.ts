import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-struct';

import { Stock } from '../../stock/model/stock';
import { Buy } from './buy';
import { UserInfo } from 'app/zen-auth/model/User';

export class Experience {
  constructor(
    /* Itens of the operation */
    public pk: string = null,
    public stock: string = null,
    public analysis: string = null,
    public creation_date: string = null,
    public nickname: string = null,
    public amount: string = null,
    public cost: string = null,
    public price: string = null,
    public archived: boolean = false,
    public intent: string = null,
    public get_intent_display: string = null,
    public categories: Array<any> = [],
    public intents: Array<any> = [],
    public category: string = null,

    public average_cost: string = null,
    public average_stock_cost: string = null,
    public operation_average_price: string = null,
    public stock_cost: string = null,
    public target_gain_percent: string = null,
    public target_gain_total_percent: string = null,

    public favorite: number = 0,
    /* Specific itens of the experience */
    public stop_gain: string = null,
    public stop_loss: string = null,
    public target: string = null,
    public limit: string = null,
    public action: string = null,
    public target_gain: string = null,
    public operation_limit: string = null,
    public experience_gain: string = null,
    public experience_gain_percent: string = null,
    public experience_total_gain_percent: string = null,

    public stop_loss_result: string = null,
    public stop_loss_percent: string = null,
    public stop_loss_total_percent: string = null,

    public stock_data: Stock = new Stock(),
    public owner_data: UserInfo = new UserInfo(),
    public buy_set: Buy[] = null,

    public estimated_date: string = null,

    public expanded: boolean = false,
    public detailed: boolean = true
  ) {
  }
}
