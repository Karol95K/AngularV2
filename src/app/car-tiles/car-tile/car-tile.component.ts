  
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-car-tile',
  templateUrl: './car-tile.component.html',
  styleUrls: ['./car-tile.component.css']
})
export class CarTileComponent implements OnInit {

  @Input() id;
  @Input() carName;
  @Input() price;
  @Input() limit;
  @Input() available;


  constructor() {
  }

  ngOnInit(): void {
  }

}