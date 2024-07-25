import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { appConfig } from './app.config';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let fixture = ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, ReactiveFormsModule, FormsModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'pruebas-unitarias-cic' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pruebas-unitarias-cic');
  });


  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Pruebas unitarias CIC');
  });

  //pruebas formulario

  it('should return valid form', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const nombre = app.form.controls['nombre']
    const apellido = app.form.controls['apellido']
    const edad = app.form.controls['edad']
    const telefono = app.form.controls['telefono']
    const usuario = app.form.controls['usuario']
    const contrasena = app.form.controls['contrasena']
    
    nombre.setValue('Juan')
    apellido.setValue('Lopez')
    edad.setValue('13')
    telefono.setValue('1234567')
    usuario.setValue('jlopez@gmail.com')
    contrasena.setValue('123456')
    expect(app.form.valid).toBeTrue();
  })

  it('should return invalid form', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const nombre = app.form.controls['nombre']
    const apellido = app.form.controls['apellido']
    const edad = app.form.controls['edad']
    const telefono = app.form.controls['telefono']
    const usuario = app.form.controls['usuario']
    const contrasena = app.form.controls['contrasena']
    
    nombre.setValue('Juan')
    apellido.setValue('Lopez')
    edad.setValue('13')
    telefono.setValue('1234567')
    usuario.setValue('jlopez@gmail.com')
    expect(app.form.invalid).toBeTrue();
  })


  it('should return invalid form', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    const nombre = app.form.controls['nombre']
    const apellido = app.form.controls['apellido']
    const edad = app.form.controls['edad']
    const telefono = app.form.controls['telefono']
    const usuario = app.form.controls['usuario']
    const contrasena = app.form.controls['contrasena']
    
    nombre.setValue('Juan')
    apellido.setValue('Lopez')
    edad.setValue('13')
    telefono.setValue('1234567')
    usuario.setValue('jlopez@gmail.com')
    expect(app.form.invalid).toBeTrue();
  })

});
