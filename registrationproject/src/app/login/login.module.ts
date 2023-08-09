import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregistraionComponent } from './userregistraion/userregistraion.component';
import { UserpassrresetComponent } from './userpassrreset/userpassrreset.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserloginComponent,
    UserregistraionComponent,
    UserpassrresetComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    UserloginComponent,
    UserregistraionComponent,
    UserpassrresetComponent
  ]
})
export class LoginModule { }
