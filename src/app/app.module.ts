import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectComponent } from './componets/select/select.component';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';

import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';


const materialModules = [
  // CdkTreeModule,
  // MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  // MatChipsModule,
  MatDividerModule,
  // MatExpansionModule,
  // MatIconModule,
  // MatInputModule,
  MatListModule,
  MatMenuModule,
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
  MatFormFieldModule,
  MatButtonToggleModule,
  // MatTreeModule,
  // OverlayModule,
  // PortalModule,
  // MatBadgeModule,
  // MatGridListModule,
  MatRadioModule,
  // MatDatepickerModule,
  // MatTooltipModule,
  // MatSliderModule,
  // MatLuxonDateModule ,
  FormsModule,
  ReactiveFormsModule,
  // MatDialogModule,
];

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent
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

