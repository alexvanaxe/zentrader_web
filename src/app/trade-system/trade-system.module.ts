import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListAnalysisComponent } from './list-analysis/list-analysis.component';
import { AnalysisModalComponent } from './analysis-modal/analysis-modal.component';
import { TechAnalysisCreateComponent } from './tech-analysis-create/tech-analysis-create.component';
import { AnalysisUpdateComponent } from './analysis-update/analysis-update.component';
import { PrintGradeComponent } from './print-grade/print-grade.component';

@NgModule({
  declarations: [
    ListAnalysisComponent,
    AnalysisModalComponent,
    TechAnalysisCreateComponent,
    AnalysisUpdateComponent,
    PrintGradeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [AnalysisModalComponent, PrintGradeComponent]

})
export class TradeSystemModule {}
