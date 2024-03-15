import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {LogoComponent} from "../../utils/logo/logo.component";
import {FormsModule} from "@angular/forms";
import {NgClass} from "@angular/common";
import {FieldComponent} from "../../utils/field/field.component";

@Component({
  selector: 'app-register',
  standalone: true,
    imports: [
        RouterLink,
        LogoComponent,
        FormsModule,
        NgClass,
        FieldComponent
    ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

    name!: string
    email!: string
    password!: string
    cPassword!: string
    phone!: string
    css: string = "text-white text-3xl font-bold px-3 bg-yellow-300";

    check = false;

    nameError!:string;
    passwordError!:string;
    cPasswordError!:string;
    phoneError!:string


    validateEmail(){
        if(!this.email){
            return true;
        }
        const rgx:RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return rgx.test(this.email)
    }

    validateFields(val: string){
        if(!val){
            return true
        }
        return val !== '' && !(val.trim() === '');
    }

    validatePassword(val: string){
        if(!val){
            return true
        }
        if(this.password){
            return this.password !== '' && !(this.password.trim() === '') && this.password.length >= 8;
        }
        return false
    }

    submit() {

    }
}

export interface UserRegister {
    name:string,
    password:string,
    email: string,
    phone:number
}

