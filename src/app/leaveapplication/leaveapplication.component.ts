import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leaveapplication',
  templateUrl: './leaveapplication.component.html',
  styleUrls: ['./leaveapplication.component.css']
})
export class LeaveapplicationComponent {

  leaveType=""
  start_date=""
  end_date=""
  reason=""
  status=""
  empid:any=""

  constructor(private api : ApiService)
  {
  this.empid =  localStorage.getItem("id")
  }

  readValues=()=>
  {
    let data:any = {"empid":this.empid,"leaveType":this.leaveType,"start_date":this.start_date,"end_date":this.end_date,"reason":this.reason,"status":0}
    console.log(data)
    this.api.leaveApplication(data).subscribe(
      
      (response:any)=>
      {
        console.log(response)
        if(response.status=="success")
        {
          alert("applied")
        }
        else{
          alert("not applied")
        }
      }


    )
    
  }

}
