import { Component, OnInit, ChangeDetectionStrategy, Input, Output } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  styles: [`
  .star {
    font-size: 2rem;
    color: #12347c;
  }
  .filled {
    color: #127c7a;
  }
  .bad {
    color: #127c7a;
  }
  .filled.bad {
    color: #127c7a;
  }
`]
})
export class NavigationComponent implements OnInit {
  rateFilter = 0;
  localStorage: Storage;

  foodNearBy: any = [];
  deliveryOpt: string;
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {



  }

  filterRating(event, rating: number) {
    localStorage.removeItem('searchTerm')
    console.log(this.rateFilter)
    this.router.navigate(['/foodcart/rating'], { queryParams: { rating: rating } })

  }


  
  filterDelivery() {
    localStorage.removeItem('searchTerm')
    this.deliveryOpt = "Delivery"
    this.router.navigate(['/foodcart/deliveryOpt'], { queryParams: { searchDeliveryOptions: this.deliveryOpt } })

  }
  filterPickup() {
    localStorage.removeItem('searchTerm')
    this.deliveryOpt = "Pickup"
    this.router.navigate(['/foodcart/deliveryOpt'], { queryParams: { searchDeliveryOptions: this.deliveryOpt } })

  }
}
