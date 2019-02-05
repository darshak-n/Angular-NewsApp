import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
    
  }

  makeobj(uname:string,email:string,password:string,confirmpassword:string,gender:string,phno:string)
  {
    const regobj={"Username":uname,"EmailId":email,"Password":password,"PhoneNumber":phno,"Gender":gender};
   // const regobj={username:"david",email:"david@da.com",password:"1234",phonenumber:"123654789",gender:"M"};
    localStorage.setItem("regobj",JSON.stringify(regobj));
    console.log(localStorage.getItem("regobj"));
    localStorage.removeItem("regobj");
    
  }

  


}
