export class Account {
  constructor(
    public pk: string = '',
    public operation_cost_day_trade: string = '',
    public operation_cost_fraction: string = '',
    public operation_cost_position: string = '',
    public equity: string = ''
  ) {}
}
