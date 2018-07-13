import { Component, OnInit } from '@angular/core';
import { IrbrService } from '../irbr.service';
import { IrBr } from '../model/irbr';

@Component({
  selector: 'zen-irbr',
  templateUrl: './irbr.component.html',
  styleUrls: ['./irbr.component.css']
})
export class IrbrComponent implements OnInit {
  irBr: IrBr;

  constructor(private irbrService: IrbrService) {
   this.irBr = new IrBr();
  }

  ngOnInit() {
    this.irbrService.get().subscribe(ir => this.irBr = ir);
  }

}
