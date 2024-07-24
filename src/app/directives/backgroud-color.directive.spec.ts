import { Component } from '@angular/core';
import { BackgroudColorDirective } from './backgroud-color.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  template:`
    <h1 BackgroundColor="blue">Pruebas unitarias CIC</h1>
    <div BackgroundColor="#ffbebe">prueba div</div>
    `
})
class HostComponent {};

fdescribe('BackgroudColorDirective', () => {
  let component : HostComponent;
  let fixture : ComponentFixture<HostComponent>

  beforeEach(async () =>{
    await TestBed.configureTestingModule({
      declarations: [HostComponent],
      imports:[BackgroudColorDirective]
    })
    .compileComponents();
  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>{
    expect(component).toBeTruthy();
  })
});
