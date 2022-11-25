import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appValiditeString]'
})
export class ValiditeStringDirective {

  constructor(private _element: ElementRef) {
    this._element.nativeElement.onkeypress = (event: { which: number; preventDefault: () => void; }) => {
      if ((event.which < 64 || (event.which > 90 && event.which < 97) || event.which > 122)) {
        event.preventDefault();
        this._element.nativeElement.style.backgroundColor = '#FFA2A2';
      }
      else {
        this._element.nativeElement.style.backgroundColor = '#FFFFFF';
      }
    }
  }
}
