export class Experience {
  constructor(
    /* Itens of the operation */
    public pk: string = null,
    public stock: number = null,
    public date: String = null,
    public nickname: String = null,
    public amount: number = null,
    public cost: number = null,
    public price: string = null,
    public archived: boolean = false,

    public average_cost: string = null,
    public operation_average_price: string = null,
    public stock_cost: string = null,
    public target_gain_percent: string = null,

    /* Specific itens of the experience */
    public stop_gain: string = null,
    public stop_loss: string = null,
    public target: string = null,
    public limit: string = null,
    public action: string = null,
    public target_gain: string = null,
    public operation_limit: string = null,
    public experience_gain: string = null,
    public experience_gain_percent: string = null
  ) {
  }
}
