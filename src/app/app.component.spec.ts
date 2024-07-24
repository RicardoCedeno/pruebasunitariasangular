import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });
  
  

  beforeEach(() =>{
    
  })

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

  //pruebas ngfor

  const mockUsuarios = [
    { nombre: 'Juan', apellido: 'Pérez', usuario: 'juanperez', contrasena: 'pass1234', edad: 30, telefono: 1234567890 },
    { nombre: 'María', apellido: 'González', usuario: 'mariagonzalez', contrasena: 'password1', edad: 25, telefono: 9876543210 },
  ];


});
