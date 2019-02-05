import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule,MatRadioModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,RouterModule,MatButtonModule,MatInputModule,FormsModule,MatRadioModule,ReactiveFormsModule
  ],
  declarations: [RegisterComponent],
  exports:[RegisterComponent]
})
export class RegisterModule { }
