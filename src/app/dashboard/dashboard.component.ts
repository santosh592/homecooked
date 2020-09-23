import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Foodnearme from '../assets/json/FoodNearme.json';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  foodNearBy: any = []
  searchTerm: any;

  rating: number;
  deliveryOpts: any;
  typeOfFood: any;

  constructor(private route: ActivatedRoute) {
    console.log(Foodnearme)
  }



  ngOnInit() {
    this.foodNearBy = Foodnearme
    this.filterFoodByRating()
    this.filterFoodByDeliveryType()
    this.filterFoodByTypeOfFood()
    this.filterFoodByAll()

  }

  filterFoodByAll() {
    this.route.queryParams
      .subscribe(params => {
        this.searchTerm = params['searchTerm']

      })

  }



  filterFoodByRating() {
    this.route.queryParams
      .subscribe(params => {
        this.rating = params['rating']
        console.log(this.rating);
        if (!isNaN(this.rating)) {
          this.foodNearBy = Foodnearme.filter(rateingFilter => rateingFilter.foodRating == this.rating.toString())
        }
      })
  }

  filterFoodByDeliveryType() {
    this.route.queryParams
      .subscribe(params => {
        this.deliveryOpts = params['searchDeliveryOptions']
        console.log(this.deliveryOpts);

        if (this.deliveryOpts != null) {
          console.log(this.deliveryOpts);
          this.foodNearBy = Foodnearme.filter(rateingFilter => rateingFilter.deliveryOptions == this.deliveryOpts)
        }
      })
  }

  filterFoodByTypeOfFood() {

    this.route.queryParams
      .subscribe(params => {
        this.typeOfFood = params['searchByCategory']
        console.log(this.typeOfFood);
        if (this.typeOfFood != null) {
          this.foodNearBy = Foodnearme.filter(rateingFilter => rateingFilter.foodType == this.typeOfFood)
        }
      })
  }

}