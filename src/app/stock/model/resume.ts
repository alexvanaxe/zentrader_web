export class Resume {
  constructor(
    public code: string = '',
    public price: string = null,
    public name: string = null,
    public sector: string = null,
    public subsector: string = null,

    public owned: string = null,
    public owner: string = null,
    public average_price: string = null,
    public stock_value: string = null,
    public stock_result: string = null,
    public stock_result_total_percent: string = null,
    public stock_result_percent: string = null
  ) {  }
}
