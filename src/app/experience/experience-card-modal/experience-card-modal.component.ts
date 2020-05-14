import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ExperienceService } from 'app/operation/experience/experience.service';
import { AutoUnsubscribe } from 'app/shared/auto-unsubscribe';
import { Stock } from 'app/stock/model/stock';
import { Experience } from 'app/operation/model/experience';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@AutoUnsubscribe()
@Component({
  selector: 'zen-experience-card-modal',
  templateUrl: './experience-card-modal.component.html',
  styleUrls: ['./experience-card-modal.component.css']
})
export class ExperienceCardModalComponent implements OnInit, OnDestroy {

  @Input() stock: Stock;
  closeResult: string;
  experiences: Experience[] = new Array();

  constructor(private modalService: NgbModal, private experienceService: ExperienceService) { }

  ngOnInit() {
      this.experienceService.list_by_stock(this.stock.pk).subscribe(result => this.processResult(result));
  }

  processResult(experiences: Experience[]) {
    this.experiences = experiences;
  }

  ngOnDestroy() {}

  openLg(content) {
      this.experienceService.list_by_stock(this.stock.pk).subscribe(result => this.processResult(result));
      this.modalService.open(content, {size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
