import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from '../../services/api.service';
import { BaseComponent } from "../../base-component";

import Swal from 'sweetalert2';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: [
        './login.component.scss',
        '../../../styles-ama-custom.scss'
    ]
})
export class LoginComponent extends BaseComponent implements OnInit {
    uname           = ""
    pwd             = ""
    new_fname       = ""
    new_lname       = ""
    new_uname       = ""
    new_pwd         = ""
    new_confirm_pwd = ""

    loginStats: any = {
        login: true,
        signUp: false,
        forgotPassword: false
    };

    toggleBlock(currentBlock, nextBlock) {
        this.loginStats[currentBlock] = false;
        this.loginStats[nextBlock] = true;
    };

    constructor(public injector: Injector, private http: Http, private API: ApiService) {
        super(injector);
    }

    ngOnInit() {
    }

    auth(){
        if(this.uname == "" || this.pwd == ""){
            Swal.fire("Oops","Required Field(s) Missing!","warning")
        }
        else {
            this.API.post("/auth", {
                "uname"     : this.uname,
                "pwd"       : this.pwd
            }).subscribe(data => {
                if(data.itemCount !=0){
                    localStorage.setItem("user_logged_in", JSON.stringify(data.devMessage));
                    this.router.navigateByUrl('/user/dashboard');
                }
                else{
                    Swal.fire("Oops","Invalid Username","warning")
                }
            },
                (error: any) => {
                    console.log(error)
                }
            )
        }
    }

    newAccount(){
        if(this.new_fname == "" || this.new_lname == "" || this.new_uname == "" || this.new_pwd == "" || this.new_confirm_pwd == ""){
            Swal.fire("Oops","Required Field(s) Missing!","warning")
        } 
        else if(this.new_pwd != this.new_confirm_pwd){
            Swal.fire("Oops","Password did not match!","warning")
        }
        else{
            this.API.post("/new-account", {
                "fname": this.new_fname,
                "lname": this.new_lname,
                "role" : "BORROWER",
                "uname": this.new_uname,
                "pwd": this.new_pwd,
            }).subscribe(data => {
                if(data.statusCode == 200){
                    Swal.fire("Success",data.devMessage,"success")
                    this.new_fname = ""
                    this.new_lname = ""
                    this.new_uname = ""
                    this.new_pwd = ""
                    this.new_confirm_pwd = ""
                    this.toggleBlock('signUp', 'login')
                }
            },
                (error: any) => {
                    console.log(error)
                }
            )
        }
    }

}
