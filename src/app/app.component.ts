import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Persona } from './persona';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { BackgroudColorDirective } from './directives/backgroud-color.directive';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ButtonModule, InputTextModule, CardModule, BackgroudColorDirective, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.form = this.fb.group({
      nombre:['', Validators.required],
      apellido:['', Validators.required],
      edad:['', Validators.required],
      telefono:['', Validators.required],
      usuario:['', Validators.required],
      contrasena:['', Validators.required]
    })
  }
  private fb = inject(FormBuilder);

  title = 'pruebas-unitarias-cic';
  result: string = "";
  persona: Persona = {} as Persona;
  showMessage: boolean = false;
  rol: string = "ADMINISTRADOR"
  color: string = "";
  onShowMessage(){
    this.showMessage = true;
  }

  form: FormGroup = new FormGroup({})

  sendLogin(){
    this.result = "Formulario enviado"
  }

  
  usuarios:Persona[]=[
    {
      nombre: 'Juan',
      apellido: 'Pérez',
      usuario: 'juanperez',
      contrasena: 'pass1234',
      edad: 30,
      telefono: 1234567890
    },
    {
      nombre: 'María',
      apellido: 'González',
      usuario: 'mariagonzalez',
      contrasena: 'password1',
      edad: 25,
      telefono: 9876543210
    },
    {
      nombre: 'Carlos',
      apellido: 'Sánchez',
      usuario: 'carloss',
      contrasena: 'qwerty123',
      edad: 40,
      telefono: 1122334455
    },
    {
      nombre: 'Ana',
      apellido: 'Martínez',
      usuario: 'anamartinez',
      contrasena: 'abc123',
      edad: 35,
      telefono: 2233445566
    },
    {
      nombre: 'Luis',
      apellido: 'Ramírez',
      usuario: 'luisramirez',
      contrasena: 'password123',
      edad: 28,
      telefono: 3344556677
    },
    {
      nombre: 'Laura',
      apellido: 'Hernández',
      usuario: 'laurah',
      contrasena: 'pass5678',
      edad: 22,
      telefono: 4455667788
    },
    {
      nombre: 'Miguel',
      apellido: 'Torres',
      usuario: 'miguelt',
      contrasena: 'securepass',
      edad: 32,
      telefono: 5566778899
    },
    {
      nombre: 'Sofía',
      apellido: 'López',
      usuario: 'sofia_lopez',
      contrasena: 'mypassword',
      edad: 27,
      telefono: 6677889900
    },
    {
      nombre: 'Diego',
      apellido: 'Gómez',
      usuario: 'diegog',
      contrasena: '1234abcd',
      edad: 29,
      telefono: 7788990011
    },
    {
      nombre: 'Elena',
      apellido: 'Vargas',
      usuario: 'elenav',
      contrasena: 'password4321',
      edad: 24,
      telefono: 8899001122
    }
  ]
  
}
