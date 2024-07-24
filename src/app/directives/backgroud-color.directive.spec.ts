import { Component } from '@angular/core';
import { BackgroudColorDirective } from './backgroud-color.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template:`
    <h1 BackgroundColor="red">Pruebas unitarias CIC</h1>
    <div BackgroundColor="#ffbebe">prueba div</div>
    <div BackgroundColor>prueba div</div>
    <div>este div no utiliza la directiva</div>
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

  it('should have three BackgroundColor elements', ()=>{
    const elements = fixture.debugElement.queryAll(By.directive(BackgroudColorDirective));
    expect(elements.length).toEqual(3);
  })

  it('should the elements be match with bgcolor', ()=>{
    const elements = fixture.debugElement.queryAll(By.directive(BackgroudColorDirective));
    expect(elements[0].nativeElement.style.backgroundColor).toEqual('red')
    expect(elements[1].nativeElement.style.backgroundColor).toEqual('rgb(255, 190, 190)')
    expect(elements[2].nativeElement.style.backgroundColor).toEqual('blue')
  })

});
