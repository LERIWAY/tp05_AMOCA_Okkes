import { Component, Output, OnInit, Input, EventEmitter } from '@angular/core';
import { Client } from '../Class/client';

@Component({
  selector: 'app-componentAffichage',
  templateUrl: './componentAffichage.component.html',
  styleUrls: ['./componentAffichage.component.css']
})
export class ComponentAffichageComponent implements OnInit {

  constructor() { }
  @Input() client !: Client;

  @Output() change: EventEmitter<String> = new EventEmitter<String>();
  
  ngOnInit(): void {
  }
}
