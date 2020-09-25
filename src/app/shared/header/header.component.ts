import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  searchText: string
  foodCategorys: any = ['All', 'dishes', 'snacks', 'pickles', 'more', 'more', 'more']

  currentLocation: string;
  currentPlace: string;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.getCurrentLocationFromLocal()

  }
  getCurrentLocationFromLocal() {
    this.currentLocation = localStorage.getItem("currentLocation")
    this.currentPlace = this.currentLocation.split(',')[0]
  }


  filterItem() {

    this.router.navigate(['/foodcart'], { queryParams: { searchTerm: this.searchText } })

  }
  filterFoodByCategory(foodCategory: string) {
    console.log(foodCategory)
    this.router.navigate(['/foodcart'], { queryParams: { searchByCategory: foodCategory } })
  }

}
