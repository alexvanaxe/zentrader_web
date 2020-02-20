import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';

import { ExperienceService } from './experience/experience.service';
import { ExperienceListComponent } from './experience-list/experience-list.component';
import { BuyComponent } from './buy/buy.component';
import { BuyService } from './buy/buy.service';
import { BuyListComponent } from './buy-list/buy-list.component';
import { SellComponent } from './sell/sell.component';
import { SellService } from './sell/sell.service';
import { ExperienceFocusComponent } from './experience-focus/experience-focus.component';
import { BuyFocusComponent } from './buy-focus/buy-focus.component';
import { SharedModule } from '../shared/shared.module';
import { OperationAccordionComponent } from './operation-accordion/operation-accordion.component';
import { NoteModule } from '../note/note.module';
import { PostofficeModule } from '../postoffice/postoffice.module';
import { QuickSellComponent } from './quick-sell/quick-sell.component';
import { SellFocusComponent } from './sell-focus/sell-focus.component';
import { ArchiveComponent } from './archive/archive.component';
import { OperationsCenterComponent } from './operations-center/operations-center.component';
import { BuyCardComponent } from './buy-card/buy-card.component';
import { BuyEditComponent } from './buy-edit/buy-edit.component';
import { SellCardComponent } from './sell-card/sell-card.component';
import { SellEditComponent } from './sell-edit/sell-edit.component';
import { LearningModule } from '../learning/learning.module';
import { ExperienceDetailedButtonComponent } from './experience-detailed-button/experience-detailed-button.component';
import { MenuModule } from 'app/menu/menu.module';
import { ExperienceCreateModule } from 'app/experience-create/experience-create.module';
import { StockSelectModule } from 'app/stock-select/stock-select.module';
import { StockEditModule } from 'app/stock-edit/stock-edit.module';
import { ExperienceModule } from 'app/experience/experience.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NoopAnimationsModule,
    MatExpansionModule,
    NoteModule,
    ExperienceCreateModule,
    MenuModule,
    SharedModule,
    PostofficeModule,
    NgbModule,
    LearningModule,
    StockEditModule,
    StockSelectModule,
    ExperienceModule,
  ],
  declarations: [
    ExperienceListComponent,
    BuyComponent,
    BuyListComponent,
    SellComponent,
    ExperienceFocusComponent,
    BuyFocusComponent,
    OperationAccordionComponent,
    QuickSellComponent,
    SellFocusComponent,
    ArchiveComponent,
    OperationsCenterComponent,
    BuyCardComponent,
    BuyEditComponent,
    SellCardComponent,
    SellEditComponent,
    ExperienceDetailedButtonComponent
  ],
  exports: [
    ExperienceListComponent,
    BuyComponent,
    BuyListComponent,
    BuyComponent,
    OperationAccordionComponent],
  providers: [
    ExperienceService,
    BuyService,
    SellService ]
})
export class OperationModule { }
