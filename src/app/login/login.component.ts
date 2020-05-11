import { Component, OnInit } from '@angular/core';
import { RealestateService } from '../realestate.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  value : boolean;

  constructor(private router: Router, private service : RealestateService,private location: Location) { }

  ngOnInit(): void {
  }

  login(userName : string, password : string, userType : string){
    console.log("inside login");
  
    if( userType == "User"){
    this.service.login(userName, password).subscribe( data => {( this.value = data )} ); 
    console.log(this.value);
  
     
      if(this.value == true  )
      {  
          console.log(this.value)  
          this.router.navigate(['/user']);
      }  
      else  
      {  
        this.router.navigate(['/login']);  
      }  
    }
    if( userType == "Admin"){

      if( userName == "admin" && password == "admin"){
      this.router.navigate(['/admin']);
    }
    else{
      this.router.navigate(['/login']);  
    }
  }

}

}
