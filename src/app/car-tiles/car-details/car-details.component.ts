import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/car.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  carId: number;
  car: Car;

  constructor(private location: Location,private router: Router, private route: ActivatedRoute, private carService: CarService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // parametr jest typu String, dlatego musimy wymusić, żeby został zrzutowany na typ number
      this.carId = +params.id;
      this.car = this.carService.findById(this.carId);
    });
  }
 
  //lepsza backClicked()
  // goBackToCars (){
  //   this.router.navigate(['cars']);
  // }

  backClicked (): void{
    this.location.back();
  }

}