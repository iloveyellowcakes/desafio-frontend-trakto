import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllAnimations } from 'src/app/core/animations/animations';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: AllAnimations
})
export class HeaderComponent implements OnInit {

  today: string = new Date().toLocaleDateString('pt-BR');
  isHome: boolean = false;
  imgUrl!: string | null;
  toggleModal: boolean = false;
  state: string = '0';

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.getRouteIsHome();
    this.imgUrl = localStorage.getItem('avatar');
  }

  public redirectTo() {
    this.router.navigate(['home']);
  }

  public getUrlImg() {
    if (this.isHome === true) {
      return '../../../../assets/images/logo_header.svg';
    }
    return '../../../../assets/images/logo_header-black.svg';
  }

  public getRouteIsHome() {

    if (this.authService.getRoute() === '/home') {
      this.isHome = true;
    }

    this.router.events
      .subscribe((val: any) => {

        if (val.url === undefined) return;

        if (val.url === '/home') {
          this.isHome = true;
          return;
        }
        if (val.url !== '/home') {
          this.isHome = false;
          return;
        }
      });
  }

  public toggle() {
    this.toggleModal = !this.toggleModal;

    if (this.toggleModal) {
      this.state = '1';
    }
    if (!this.toggleModal) {
      this.state = '0';
    }

  }

}
