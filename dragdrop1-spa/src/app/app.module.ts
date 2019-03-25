import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseschedulerComponent } from './coursescheduler/coursescheduler.component';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TooltipModule } from 'ng2-tooltip-directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
   declarations: [
      AppComponent,
      CourseschedulerComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      DragDropModule,
      NgbModule,
      TooltipModule,
      FormsModule,
      ReactiveFormsModule,
      CommonModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
