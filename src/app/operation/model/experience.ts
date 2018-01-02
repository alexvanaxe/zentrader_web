export class Experience {
  constructor(
    public pk: string = null,
    public operation: string = null,
    public stop_gain: string = null,
    public stop_loss: string = null,
    public target: string = null,
    public limit: string = null,
    public action: string = null,
    public operation_gain: string = null,
    public operation_limit: string = null,
  ) {  }
}
