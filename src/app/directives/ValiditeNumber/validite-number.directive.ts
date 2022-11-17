import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appValiditeNumber]'
})
export class ValiditeNumberDirective {
  
  constructor(private _element: ElementRef) { 
    this._element.nativeElement.onkeypress = (event: { which: number; preventDefault: () => void; }) => {
      if (event.which > 57 || event.which < 48 ) {
        event.preventDefault();
      }
      if (this._element.nativeElement.value.length >= 10) {
        event.preventDefault();
      }
      if (this._element.nativeElement.value.length <= 0) {
        this._element.nativeElement.style.backgroundColor = '#FFA2A2';
      }
      else {
        this._element.nativeElement.style.backgroundColor = '#FFFFFF';
      }
    }
  }
}
