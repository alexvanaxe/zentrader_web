import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'numberColor'
})
export class NumberColorPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {

  }

  transform(value: string, args?: any): any {
    var color = "";
    var money = parseFloat(value);

    if (money < 0) {  
      color = "lose-fn-color";
    } else if (money > 0) {
      color = "gain-fn-color";
    }

    if (value == null) {
      value = "---";
    }
    var htmlColored = color; 
    return htmlColored;
  }

}
