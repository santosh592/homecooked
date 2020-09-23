import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chefdashboard',
  templateUrl: './chefdashboard.component.html',
  styleUrls: ['./chefdashboard.component.css']
})
export class ChefdashboardComponent implements OnInit {
  currentRate: number;
  foodNearByList: any = []
  foodBychefId: any = []
  private sub: any;
  chefName: string;
  term: string;
  query: any;
  searchTerm: any;
  foodTypeSub: any;
  foodType: any;
  chefId:number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.foodNearByList =
    [
      {
        "chefId":1,
        "mealName": "Biryani",
        "description": "Ingredients:onions,masala,rice",
        "chiefName": "santosh mandugula",
        "chiefProfilePic": "santosh.png",
        "foodRating": "4",
        "deliveryOptions": "Pickup",
        "foodType": "dishes",
        "distanceFromUser": "0.2 KM",
        "price": "RS 200"
      },
      {
        "chefId":2,
        "mealName": "Pizza",
        "description": "Ingredients:cheese,chicken,bread",
        "chiefName": "praneeth",
        "chiefProfilePic": "praneeth.png",
        "foodRating": "4",
        "deliveryOptions": "Pickup",
        "foodType": "dishes",
        "distanceFromUser": "0.2 KM",
        "price": "RS 100"
      },
      {
        "chefId":3,
        "mealName": "Dosa",
        "description": "Ingredients:onions,masala,rice flour",
        "chiefName": "prasanth",
        "chiefProfilePic": "praneeth.png",
        "foodRating": "3",
        "deliveryOptions": "Delivery",
        "foodType": "dishes",
        "distanceFromUser": "0.2 KM",
        "price": "RS 300"
      },
      {
        "chefId":4,
        "mealName": "fried rice",
        "description": "Ingredients:onions,masala,rice",
        "chiefName": "anwesh",
        "chiefProfilePic": "santosh.png",
        "foodRating": "5",
        "deliveryOptions": "Pickup",
        "foodType": "dishes",
        "distanceFromUser": "0.2 KM",
        "price": "RS 50"
      },
      {
        "chefId":5,
        "mealName": "manchurya",
        "description": "Ingredients:onions,masala,rice",
        "chiefName": "ravali",
        "chiefProfilePic": "ravali.png",
        "foodRating": "2",
        "deliveryOptions": "Pickup",
        "foodType": "dishes",
        "distanceFromUser": "0.2 KM",
        "price": "RS 40"
      },
      {
        "chefId":6,
        "mealName": "tamarind rice",
        "description": "Ingredients:onions,masala,rice",
        "chiefName": "roshan",
        "chiefProfilePic": "praneeth.png",
        "foodRating": "5",
        "deliveryOptions": "Delivery",
        "foodType": "dishes",
        "distanceFromUser": "0.2 KM",
        "price": "RS 150"
      },
      {
        "chefId":9,
        "mealName": "kabob",
        "description": "Ingredients:chicken,masala",
        "chiefName": "Vanitha",
        "chiefProfilePic": "vanitha.png",
        "foodRating": "3",
        "deliveryOptions": "Delivery",
        "foodType": "dishes",
        "distanceFromUser": "0.2 KM",
        "price": "RS 160"
      },
      {
        "chefId":8,
        "mealName": "Mango",
        "description": "Ingredients:onions,masala,rice",
        "chiefName": "roshan",
        "chiefProfilePic": "praneeth.png",
        "foodRating": "5",
        "deliveryOptions": "Delivery",
        "foodType": "pickles",
        "distanceFromUser": "0.2 KM",
        "price": "RS 150"
      },
      {
        "chefId":9,
        "mealName": "Golgappa",
        "description": "Ingredients:chicken,masala",
        "chiefName": "Vanitha",
        "chiefProfilePic": "vanitha.png",
        "foodRating": "3",
        "deliveryOptions": "Delivery",
        "foodType": "snacks",
        "distanceFromUser": "0.2 KM",
        "price": "RS 160"
      },
      {
        "chefId":9,
        "mealName": "Bread omlet",
        "description": "Ingredients:chicken,masala",
        "chiefName": "Vanitha",
        "chiefProfilePic": "vanitha.png",
        "foodRating": "3",
        "deliveryOptions": "Delivery",
        "foodType": "snacks",
        "distanceFromUser": "0.2 KM",
        "price": "RS 160"
      }
    ]
    this.foodBychefId = this.foodNearByList

    this.query = this.route.params.subscribe(params => {
      this.chefId = +params['id'];
      console.log(this.chefId)
      if (!isNaN(this.chefId)) {
        this.foodBychefId = this.foodNearByList.filter(x => x.chefId == this.chefId)
        console.log(this.foodBychefId)
      }
    });


    this.query = this.route.queryParams.subscribe(params => {
      this.searchTerm = params['searchTerm'];

    });

  }

}
