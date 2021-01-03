import { Dish } from '../shared/dish';

export const DISHES: Dish[] = [
    {
      id: '0',
      name: 'Apple Pie',
      image: '/assets/images/food1.png',
      category: 'desserts',
      label: 'Hot',
      price: '16.99',
      featured: true,
      description: 'A unique combination of apple and bread crums with lavanda syrup.',
      comments: [
        {
            rating: 5,
            comment: 'Imagine all the eatables, living in the best of the best!',
            author: 'Arbaz Khan',
            date: '2020-10-16T17:57:28.556094Z'
        },
        {
            rating: 4,
            comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
            author: 'Paul McVites',
            date: '2020-10-17T17:57:28.556094Z'
        }
      ]
    },
    {
      id: '1',
      name: 'Donuts',
      image: '/assets/images/food4.png',
      category: 'mains',
      label: 'Hot',
      price: '10.99',
      featured: false,
      description: 'Famous donuts in desi style',
      comments: [
        {
            rating: 4,
            comment: 'Awesome!',
            author: 'Feroz',
            date: '2020-10-23T17:57:28.556094Z'
        }
      ]
    },
    {
        id: '2',
        name: 'Pizza',
        image: '/assets/images/food3.png',
        category: 'mains',
        label: 'Hot',
        price: '15.99',
        featured: true,
        description: 'Famous chicken tikka pizza with mouth watering taste',
        comments: [
          {
              rating: 4,
              comment: 'Lovely!',
              author: 'Shehroz',
              date: '2020-10-23T17:57:28.556094Z'
          }
        ]
    },
    {
        id: '3',
        name: 'Channa Chaat',
        image: '/assets/images/food5.png',
        category: 'mains',
        label: 'Hot',
        price: '20.99',
        featured: true,
        description: 'Famous Chaat Papri at your door step. Book now',
        comments: [
          {
              rating: 4,
              comment: 'Awesome!',
              author: 'Rabia',
              date: '2020-10-25T17:57:28.556094Z'
          }
        ]
    }

   ];
