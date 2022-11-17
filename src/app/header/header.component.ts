import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MagasinState } from '../magasin/magasin-state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title : String = "Composant initialisé";

  @Select(MagasinState.getNbProducts)
  numberProduct$!: Observable<number>;

  constructor() { }

  ngOnInit(): void {
    this.title = "Header";
  }

}
