import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EMPTY, empty } from 'rxjs';
import { Client } from '../Class/client';

@Component({
  selector: 'app-componentForm',
  templateUrl: './componentForm.component.html',
  styleUrls: ['./componentForm.component.css']
})
export class ComponentFormComponent implements OnInit {

  constructor() { }

  cacher : boolean = true;

  title : string = "Composant initialisé";
  valid : boolean = true;
  prenom : string = "";
  nom : string = "";
  genre : string = "";
  adresse : string = "";
  ville : string = "";
  cp : string = "";
  email : string = "";
  tel : string = "";
  pays : string = "";
  login : string = "";
  password : string = "";
  confirmPassword : string = "";

  validationPassword : boolean = true;
  cacherErreur : boolean = true;

  client !: Client;

  clientForm = new FormGroup({
    prenom: new FormControl('',[Validators.required]),
    nom: new FormControl('',[Validators.required]),
    genre: new FormControl('',[Validators.email, Validators.required]),
    adresse: new FormControl('',[Validators.required]),
    ville: new FormControl('',[Validators.required]),
    address: new FormControl('',[Validators.required]),
    cp: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.pattern('[0-9]{5}')]),
    tel: new FormControl('',[Validators.required]),
    pays: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    confirmPassword: new FormControl('',[Validators.required]),
  });

  ngOnInit(): void {
    this.title = "Formulaire de contact";
  }

  clicChange () : void {
    if(this.confirmationPassword(this.password, this.confirmPassword) && this.login != ""){
      this.client = new Client(this.nom, this.prenom, this.adresse, this.cp, this.pays, this.ville, this.tel, this.email, this.genre, this.login, this.password, this.confirmPassword);
      this.cacher = false;
      this.valid = false;
      this.cacherErreur = true;
    }
    else{
      this.cacherErreur=false;
    }
  }

  confirmationPassword(passwordInput : String, confirmPasswordInput : String) : boolean {
    if(passwordInput != confirmPasswordInput || passwordInput =="") {
      return false;
    }
    else {
      return true;
    }
  }

  ngOnDestroy () {

  }
}
