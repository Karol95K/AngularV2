import { Component, OnInit, ViewChild } from '@angular/core';
import { Car } from '../car';
import { ActivatedRoute } from '@angular/router';
import {NgForm} from '@angular/forms';
import {CarService} from '../../car.service';



@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {

  @ViewChild('form') form: NgForm;
  carId: number;
  car: Car;

  constructor(private route: ActivatedRoute, private carService: CarService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.carId = +params.id;
      this.car = this.carService.findById(this.carId);
    });
  }

  onSubmit() {
    // model danych formularza
    console.log('submitted', this.car);
    // dane z formularza
    console.log(this.form.value);
    // czy formularz spełnia warunki walidacji
    console.log(this.form.valid);
    // czy dane formularza zostały zmienione przez użytkownika
    console.log(this.form.dirty);
    // czy formularz został "dotknięty" przez użytkownika (próbował zmienić dane, ale niekoniecznie zmienił wartości)
    console.log(this.form.touched);

    // TODO:
    // this.httpClient.post...
  }
}