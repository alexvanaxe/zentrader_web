export class Sell {
  constructor(
    /* Itens of the operation */
    public pk: string = null,
    public stock: string = null,
    public operation_type: string = null,
    public creation_date: String = null,
    public nickname: String = null,
    public amount: string = null,
    public cost: string = null,
    public price: string = null,
    public archived: boolean = false,
    public executed: boolean = false,
  ) {  }
}
