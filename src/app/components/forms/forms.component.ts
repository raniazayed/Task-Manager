import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TasksService } from 'src/app/services/tasks.service';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  loginForm: FormGroup;

  
  constructor(  private router:Router,private taskser:TasksService,
    private title:Title) {
    this.title.setTitle('Task Manager-login')
    console.log(this.taskser.tasks)
   } 
  
  
  
  ngOnInit() {
    this.loginForm = new FormGroup ({
      email:new FormControl (null,[Validators.required,this.validateEmail]),
      password:new FormControl (null,[Validators.required,Validators.minLength(6),Validators.maxLength(12),this.validatePassword])
    })

  }
   validatePassword(control:FormControl):{[s:string]:boolean}{
    const patt = /[a-z]/g;
    const pattcapital = /[A-Z]/g;
    const pattdig = /\d/g;
    const pattspecial = /\W/g;

    if (patt.test(control.value) == true && pattdig.test(control.value) == true && pattspecial.test(control.value) == true && pattcapital.test(control.value) == true) {
      console.log(' valid');
      return null;
    }  
    else{
      return {'passworderror':true}
    }
   }
   validateEmail(control:FormControl):{[s:string]:boolean} {
     var valid =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     console.log('hi')
     if(valid.test(control.value)){
      console.log(control.value)
      return null ; // vaild
    }
    return {'validationError':true} //invalid
  }

  onSubmit(){
    console.log(this.loginForm.get('email'))
    console.log(this.loginForm.get('password'))
    if((this.loginForm.get('password').valid)&&this.loginForm.get('email').valid){

      this.router.navigate(['home']);
    }


  }
}
