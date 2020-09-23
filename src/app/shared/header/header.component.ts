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
  foodCategorys: any = ['All','dishes','snacks','pickles','more','more','more']

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {


  }


  filterItem() {

    this.router.navigate(['/foodcart/search'], { queryParams: { searchTerm: this.searchText } })

  }
  filterFoodByCategory(foodCategory:string){
    console.log(foodCategory)
    this.router.navigate(['/foodcart/timeline'], { queryParams: { searchByCategory: foodCategory } })
  }

}
