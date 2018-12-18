import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'numberColor'
})
export class NumberColorPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {

  }

  transform(value: string, args?: any): any {
    var color = "black";
    var money = parseFloat(value);

    if (money < 0) {  
      color = "red";
    } else if (money > 0) {
      color = "blue";
    }

    if (value == null) {
      value = "---";
    }
    var htmlColored = `<span style='color: ${color}'>${value}</span>` 
    return this.domSanitizer.bypassSecurityTrustHtml(htmlColored);
  }

}
