import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  user: User = {nome: '', senha: '', cpf: '', email: '', perfil: '', role: '', token: ''};

  constructor(fb: FormBuilder, private router: Router) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });    
  }

  ngOnInit(){ }

  back(){
    this.router.navigate(['/users']);
  }

  save( ){ }
  
}
