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

  private SEARCH_TERM: string = 'searchTerm';
  private RATING: string = 'rating';
  private SEARCH_DELIVERY_OPTIONS: string = 'searchDeliveryOptions';
  private SEARCH_BY_CATEGORY: string = 'searchByCategory'

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
        this.searchTerm = params[this.SEARCH_TERM]

      })

  }



  filterFoodByRating() {
    this.route.queryParams
      .subscribe(params => {
        this.rating = params[this.RATING]
        console.log(this.rating);
        if (!isNaN(this.rating)) {
          this.foodNearBy = Foodnearme.filter(rateingFilter => rateingFilter.foodRating == this.rating.toString())
        }
      })
  }

  filterFoodByDeliveryType() {
    this.route.queryParams
      .subscribe(params => {
        this.deliveryOpts = params[this.SEARCH_DELIVERY_OPTIONS]
        console.log(this.deliveryOpts);

        if (this.deliveryOpts != null) {
          console.log(this.deliveryOpts);
          this.foodNearBy = Foodnearme.filter(deliveryTypeFilter => deliveryTypeFilter.deliveryOptions == this.deliveryOpts)
        }
      })
  }

  filterFoodByTypeOfFood() {

    this.route.queryParams
      .subscribe(params => {
        this.typeOfFood = params[this.SEARCH_BY_CATEGORY]
        console.log(this.typeOfFood);
        if (this.typeOfFood != null) {
          if (this.typeOfFood === 'All') { this.foodNearBy = Foodnearme } else {
            this.foodNearBy = Foodnearme.filter(foodTypeFilter => foodTypeFilter.foodType == this.typeOfFood)
          }
        }
      })
  }

  public generateFake(count: number): Array<number> {
    const indexes = [];
    for (let i = 0; i < count; i++) {
      indexes.push(i);
    }
    return indexes;
  }

}