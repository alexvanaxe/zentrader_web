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
    public indicators: string[] = null,
    public tunnel_top: string = '',
    public tunnel_botom: string = '',

    public technical_analyze_data: TechnicalAnalyze[] = []
  ) {  }
}

export class TechnicalAnalyze {
  constructor(
    public pk: string = '',
    public indicator: string = '',
    public analysis: string = '',
    public comment: string = '',
    public creation_date: string = '',

    public indicator_data: Indicator = null
  ) {  }
}
