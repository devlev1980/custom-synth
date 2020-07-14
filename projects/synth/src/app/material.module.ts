import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatButtonToggleModule,
  MatSlideToggleModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatTooltipModule,
  MatAutocompleteModule,
  MatTableModule,
  MatTabsModule,
  MatSortModule,
  MatPaginatorModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatProgressBarModule,
  MatMenuModule,
  MatSliderModule
} from '@angular/material';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatButtonToggleModule,
  MatSlideToggleModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatTooltipModule,
  MatAutocompleteModule,
  MatTableModule,
  MatTabsModule,
  MatSortModule,
  MatPaginatorModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatProgressBarModule,
  MatMenuModule,
  MatSliderModule

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MATERIAL_MODULES
  ],
  exports: [MATERIAL_MODULES]
})
export class MaterialModule { }
