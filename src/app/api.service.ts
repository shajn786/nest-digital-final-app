import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

fetchEmployee=()=>
{
  return this.http.get("http://localhost:8080/viewallemployee")
}

addEmployee = (datatosend:any)=>
{
return this.http.post("http://localhost:8080/addemp",datatosend)
}

fetchSecurity=()=>
{
  return this.http.get("http://localhost:8080/viewallSecurity")
}

addSecurity=(datatosend:any)=>
{
  return this.http.post("http://localhost:8080/addsecurity",datatosend)
}

searchEmployee=(datatosend:any)=>
{
  return this.http.post("http://localhost:8080/searchemp",datatosend)
}

searchSecurity=(datatosend:any)=>
{
  return this.http.post("http://localhost:8080/searchsecurity",datatosend)
}

deleteEmployee=(datatosend:any)=>
{
  return this.http.post("http://localhost:8080/employeedelete",datatosend)
}
deleteSecurity=(datatosend:any)=>
{
  return this.http.post("http://localhost:8080/securitydelete",datatosend)
}

updateEmployee=(datatosend:any)=>
{
  return this.http.post("http://localhost:8080/employeeupdate",datatosend)
}

updateSecurity=(datatosend:any)=>
{
  return this.http.post("http://localhost:8080/securityupdate",datatosend)
}

employeeAuth=(datatosend:any)=>
{
  return this.http.post("http://localhost:8080/employeeauth",datatosend)
}

getEmpProfileData=(datatosend:any)=>
{
  return this.http.post("http://localhost:8080/employeeDetails",datatosend)
}

leaveApplication=(datatosend:any)=>
  {
     return this.http.post("http://localhost:8080/leavapplication",datatosend)
  }

}

