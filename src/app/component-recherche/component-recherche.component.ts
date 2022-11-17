import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-component-recherche',
  templateUrl: './component-recherche.component.html',
  styleUrls: ['./component-recherche.component.css']
})
export class ComponentRechercheComponent {

  recherche = new FormControl('');
  @Input() property !: string;
  @Input() list !: any[];

  @Output() filterResult = new EventEmitter<any[]>();
  @Output() filterInit = new EventEmitter();


  constructor() {
    this.recherche.valueChanges.subscribe((value) => {
      if (value == '') {
        this.filterInit.emit();
      }
      else {
        const newlist = this.list.filter((item) => item[this.property].includes(value));
        this.filterResult.emit(newlist);
      }
    });
  }

}
