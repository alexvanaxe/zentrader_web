export class Note {
  constructor(
    public pk: string = '',
    public operation: string = '',
    public note: string ='',
    public creation_date: string = '',

    // Interface only
    public editing: boolean = false
  ){}
}
