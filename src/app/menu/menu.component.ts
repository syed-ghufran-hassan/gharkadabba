import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[] = [
    {
      id: '0',
      name: 'Apple Pie',
      image: '/assets/images/food1.png',
      category: 'desserts',
      featured: true,
      label: 'Hot',
      price: '16.99',
      description: 'A unique combination of apple and bread crums with lavanda syrup.'
    },
    {
      id: '1',
      name: 'Daal Makhni',
      image: '/assets/images/food2.png',
      category: 'mains',
      featured: true,
      label: 'Hot',
      price: '10.99',
      description: 'Famous mughal dish with rich texture and butter that will make your tastebuds feel good'
    }
   ];
}



