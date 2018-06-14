import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


import { AlertService} from '../services/alert.service';
import { LoginService } from '../services/login.service';


import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent {

    public myForm: FormGroup; // our model driven form
    public submitted: boolean; // keep track on whether form is submitted
    public events: any[] = []; // use later to display form changes

    constructor(private _fb: FormBuilder) { } // form builder simplify form initialization

    ngOnInit() {
     // the short way
     this.myForm = this._fb.group({
        mobile: [''],
        password: ['', [<any>Validators.required, <any>Validators.minLength(3)]]
       
    });

    }

    save(model: User, isValid: boolean) {
        this.submitted = true; // set form submit to true

        // check if model is valid
        // if valid, call API to save customer
        console.log(model, isValid);
    }
}

