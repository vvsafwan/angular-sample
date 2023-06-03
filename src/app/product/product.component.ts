import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products = [
    {
      id:1,
      name:'Minimalists Analog Watch',
      price:'109',
      color:'Black',
      available:'Available',
      image:'/assets/products/download.jpg'
    },{
      id:2,
      name:'Hisense Ultra HD Smart TV',
      price:'3339',
      color:'Black',
      available:'Available',
      image:'/assets/products/download2.jpg'
    },{
      id:3,
      name:'Apple Iphone 12',
      price:'1855',
      color:'Black',
      available:'Not Available',
      image:'/assets/products/download3.jpg'
    },{
      id:4,
      name:'LG Fully Automatic Washing Machine',
      price:'1775',
      color:'white',
      available:'Available',
      image:'/assets/products/download4.jpg'
    },{
      id:5,
      name:'LG Refrigerator With Door Cooling',
      price:'2815',
      color:'white',
      available:'Not Available',
      image:'/assets/products/download5.jpg'
    },{
      id:6,
      name:'DELL Inspiron One 27 Ryzon 7',
      price:'2145',
      color:'white',
      available:'Available',
      image:'/assets/products/download6.jpg'
    }
  ]
}
