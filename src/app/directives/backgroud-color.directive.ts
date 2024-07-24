import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[BackgroundColor]',
  standalone: true
})
export class BackgroudColorDirective implements OnChanges {
  @Input('BackgroundColor') backgroundColor!: string;
  defaultColor = 'blue';

  constructor(
    private element: ElementRef
  ) { 
    this.element.nativeElement.style.backgroundColor = this.defaultColor
    this.element.nativeElement.style.color= "yellow"
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['backgroundColor']){
      this.updateBackgroundColor();
    }
  }

  updateBackgroundColor() {
    this.element.nativeElement.style.backgroundColor = this.backgroundColor || this.defaultColor;
    this.element.nativeElement.style.color = 'yellow';
  }

}
