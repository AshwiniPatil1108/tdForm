import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tdForm';
  @ViewChild('signUp') signUp ! : NgForm;

  contactMode =[
    {mode:"Phone", id:1},
    {mode:"Email", id:2},
    {mode:"Fax", id:3}
  ]

  userObj={ 
    "userDetails": {
       "userName": "ashuuuuuu",
        "email": "jashu@gmail.com" 
      }, 
    "secretQuestion": "favouritBook", 
    "answer": "aaaaa",
    "isSubscribed": true,
    "moc": "Email" 
    }

  userNameMaxflag : boolean = false
  ngOnInit(): void {
  
  }

  onEdit(){
    this.signUp.form.patchValue(this.userObj)
  }

  onSignin(){
    console.log(this.signUp)
    console.log(this.signUp.value)

  }
}
