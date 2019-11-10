export class Historical {
  constructor(
    public profit: string = '',
    public profit_percent: string = ''
  ) {  }
}

export class Stock {
  constructor(
    public pk: string = null,
    public code: string = '',
    public price: string = null,
    public name: string = null,
    public sector: string = null,
    public subsector: string = null,

    public owned: string = null,
    public historical: Historical = new Historical()
  ) {  }
}
