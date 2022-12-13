import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent {

  empcode =""
  empdetails:any=[]
  id=""

  constructor(private api : ApiService)
  {}

  search=()=>
  {
    let data:any={"empcode":this.empcode}
    console.log(data)
    this.api.searchEmployee(data).subscribe(

     (response:any)=>
     {
       this.empdetails=response
       
     }



    )

  }
  
  deleButtonClick=(id:any)=>
  {
    let data1:any={"id":id}
    this.api.deleteEmployee(data1).subscribe(
     
      (response:any)=>
      {
        console.log(response)
        if(response.status == "success")
        {
          alert(" deleted")
          window.location.reload()
        }
        else
        {
          alert("not deleted")
        }
      }

    )
  }

}
