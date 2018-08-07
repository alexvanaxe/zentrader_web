import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core'; 
import { BuyService } from 'app/operation/buy/buy.service';
import { Buy } from 'app/operation/model/buy';
import { Experience } from '../../operation/model/experience';
import { ExperienceService } from '../../operation/experience/experience.service';
import { AutoUnsubscribe } from '../../shared/auto-unsubscribe';
import { AccountFooterComponent } from '../../account/account-footer/account-footer.component';
import { PostOfficerService } from '../../postoffice/post-officer-service.service';


@AutoUnsubscribe()
@Component({
  selector: 'zen-operations-overview',
  templateUrl: './operations-overview.component.html',
  styleUrls: ['./operations-overview.component.css']
})
export class OperationsOverviewComponent implements OnInit, OnDestroy {

  buys: Buy[];
  experiments: Experience[];

  @ViewChild(AccountFooterComponent) accFooter: AccountFooterComponent;

  constructor(private buyService: BuyService,
    private experienceService: ExperienceService
    private postofficeService: PostOfficerService ) {
    this.updateExperienceList();
  }

  ngOnInit() { }
  ngOnDestroy() {}

  updateBuys() {
    this.buyService.list().subscribe(buys => this.buys = buys);
  }

  updateExperienceList() {
   this.experienceService.list().subscribe(experiments => this.experiments = experiments);
  }

  updateAll() {
    this.updateBuys();
    this.updateExperienceList();
    this.accFooter.getDefaultAccount();
  }

  teste() {
    console.log("Imprimindo...");
    this.postofficeService.deliverMessage("Teste");
  }

}
