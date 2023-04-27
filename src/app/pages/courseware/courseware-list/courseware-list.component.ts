import { Observable } from 'rxjs';
import { ProductsService } from './../../../shared/services/products/products.service';
import { Component, OnInit } from '@angular/core';
import { AllAnimations } from 'src/app/core/animations/animations';

@Component({
  selector: 'app-courseware-list',
  templateUrl: './courseware-list.component.html',
  styleUrls: ['./courseware-list.component.scss'],
  animations: AllAnimations
})
export class CoursewareListComponent implements OnInit {

  products$!: Observable<any>;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.products$ = this.productsService.listAllMaterial();
  }

}
