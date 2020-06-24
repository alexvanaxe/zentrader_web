import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListAnalysisComponent } from './list-analysis/list-analysis.component';
import { AnalysisModalComponent } from './analysis-modal/analysis-modal.component';
import { TechAnalysisCreateComponent } from './tech-analysis-create/tech-analysis-create.component';
import { AnalysisUpdateComponent } from './analysis-update/analysis-update.component';

@NgModule({
  declarations: [
    ListAnalysisComponent,
    AnalysisModalComponent,
    TechAnalysisCreateComponent,
    AnalysisUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [AnalysisModalComponent]

})
export class TradeSystemModule {}
