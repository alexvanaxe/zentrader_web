import { Component, OnInit, OnDestroy } from '@angular/core';
import { IrbrService } from '../irbr.service';
import { IrBr } from '../model/irbr';
import { AutoUnsubscribe } from 'app/shared/auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'zen-irbr',
  templateUrl: './irbr.component.html',
  styleUrls: ['./irbr.component.css']
})
export class IrbrComponent implements OnInit, OnDestroy {
  irBr: IrBr;

  constructor(private irbrService: IrbrService) {
   this.irBr = new IrBr();
  }

  ngOnDestroy() {}
  
  ngOnInit() {
    this.irbrService.get().subscribe(ir => this.irBr = ir);
  }

}
