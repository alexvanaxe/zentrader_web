export class Indicator {
  constructor(
    public pk: string = '',
    public name: string = '',
    public description: string = '',
    public indicator_kind: string = ''
  ) {  }
}

export class Analysis {
  constructor(
    public pk: string = '',
    public indicators: string = '',
    public beginning: string = '',
    public end: string = '',

    public technical_analyze_data: TechnicalAnalyze[] = null
  ) {  }
}

export class TechnicalAnalyze {
  constructor(
    public pk: string = '',
    public indicator: string = '',
    public analysis: string = '',
    public comment: string = '',

    public indicator_data: Indicator = null
  ) {  }
}
