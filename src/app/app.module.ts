import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { SecurityLoginComponent } from './security-login/security-login.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddSecurityComponent } from './add-security/add-security.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { ViewallEmployeeComponent } from './viewall-employee/viewall-employee.component';
import { ViewallSecurityComponent } from './viewall-security/viewall-security.component';
import { AdminoptionsComponent } from './adminoptions/adminoptions.component';
import { AdminsecuritynavbarComponent } from './adminsecuritynavbar/adminsecuritynavbar.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { SearchseacurityComponent } from './searchseacurity/searchseacurity.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateSecurityComponent } from './update-security/update-security.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmpProfileNewComponent } from './emp-profile-new/emp-profile-new.component';

const myRoutes :  Routes=[

{
  path:"",component:AdminLoginComponent
},
{
  path:"employeelogin",component:EmployeeLoginComponent
},
{
  path:"securitylogin",component:SecurityLoginComponent
},
{
  path:"addemployee",component:AddEmployeeComponent
},
{
  path:"addsecurity",component:AddSecurityComponent
},
{
  path:"viewallemployee",component:ViewallEmployeeComponent
},
{
  path:"viewallsecurity",component:ViewallSecurityComponent
},
{
  path:"adminoptions",component:AdminoptionsComponent
},
{
  path:"searchemployee",component:SearchEmployeeComponent
},
{
  path:"searchsecurity",component:SearchseacurityComponent
},
{
  path:"updateEmployee",component:UpdateEmployeeComponent
},
{
  path:"updatesecurity",component:UpdateSecurityComponent
}


]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    EmployeeLoginComponent,
    SecurityLoginComponent,
    AddEmployeeComponent,
    AddSecurityComponent,
    AdminnavbarComponent,
    ViewallEmployeeComponent,
    ViewallSecurityComponent,
    AdminoptionsComponent,
    AdminsecuritynavbarComponent,
    SearchEmployeeComponent,
    SearchseacurityComponent,
    UpdateEmployeeComponent,
    UpdateSecurityComponent,
    EmployeeProfileComponent,
    EmpProfileNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
