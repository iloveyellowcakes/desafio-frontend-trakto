import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs';
import { AllAnimations } from 'src/app/core/animations/animations';
import { ProductsService } from './../../shared/services/products/products.service';

@Component({
  selector: 'app-courseware',
  templateUrl: './courseware.component.html',
  styleUrls: ['./courseware.component.scss'],
  animations: AllAnimations
})
export class CoursewareComponent implements OnInit{

  products$!: Observable<any>

  customOptions: OwlOptions = {
    loop: false,
    autoplay: false,
    center: false,
    dots: false,
    autoHeight: false,
    autoWidth: false,
    nav: true,
    navText: ['<span aria-label="Previous">‹</span>', '<span aria-label="Next">›</span>'],
    lazyLoad: false,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      },
      1500: {
        items: 5
      }
    },
  };

  constructor(private route: Router, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.products$ = this.productsService.listLastTenMaterial()
  }

  redirectTo() {
    this.route.navigate(['all'])
  }

}
