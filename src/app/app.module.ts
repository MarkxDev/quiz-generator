import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';

import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
/* import { MatDatepickerModule } from '@angular/material/datepicker'; */
/* import { MatLuxonDateModule } from '@angular/material-luxon-adapter'; */


const materialModules = [
  // CdkTreeModule,
  // MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  // MatCheckboxModule,
  // MatChipsModule,
  // MatDividerModule,
  // MatExpansionModule,
  // MatIconModule,
  // MatInputModule,
  // MatListModule,
  // MatMenuModule,
  // MatProgressSpinnerModule,
  // MatPaginatorModule,
  // MatRippleModule,
  MatSelectModule,
  // MatSidenavModule,
  // MatSnackBarModule,
  // MatSortModule,
  // MatTableModule,
  // MatTabsModule,
  // MatToolbarModule,
  // MatFormFieldModule,
  MatButtonToggleModule,
  // MatTreeModule,
  // OverlayModule,
  // PortalModule,
  // MatBadgeModule,
  // MatGridListModule,
  MatRadioModule,
  // /* MatDatepickerModule, */
  // MatTooltipModule,
  // MatSliderModule,
  // /*   MatLuxonDateModule , */
  FormsModule,
  ReactiveFormsModule,
  // MatDialogModule,
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ...materialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

