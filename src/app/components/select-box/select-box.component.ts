import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.css']
})
export class SelectBoxComponent implements OnInit {

  constructor() { }
  equipment: string = '';

  @Input() items;
  @Input() keyName;
  @Output() onEquipmentChange = new EventEmitter<any>();

  ngOnInit() {
  }

  onChange() {
    this.onEquipmentChange.emit(this.equipment);
  }

}
