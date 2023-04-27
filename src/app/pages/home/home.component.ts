import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AllAnimations } from 'src/app/core/animations/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: AllAnimations
})
export class HomeComponent {

  dataCircle= [
    {
      name: 'Material didático ',
      color: 'circle_blue',
      imgUrl: '../../../assets/icons/study.svg',
      route: 'courses',
      alt: '',
    },
    {
      name: 'Quiz',
      color: 'circle_green',
      imgUrl: '../../../assets/icons/Medal.svg',
      route: '',
      alt: '',
    },
    {
      name: 'Desenho',
      color: 'circle_purple',
      imgUrl: '../../../assets/icons/paint.svg',
      route: '',
      alt: '',
    },
    {
      name: 'Youtube',
      color: 'circle_red',
      imgUrl: '../../../assets/icons/youtube.svg',
      route: '',
      alt: '',
    }
  ]

  constructor(private router: Router){}

  public redirectTo(route: string){
    this.router.navigate([route])
  }

}
