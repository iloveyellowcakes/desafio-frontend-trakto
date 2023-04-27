import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Component, Input } from '@angular/core';
import { AllAnimations } from 'src/app/core/animations/animations';

@Component({
  selector: 'app-modal-menu',
  templateUrl: './modal-menu.component.html',
  styleUrls: ['./modal-menu.component.scss'],
  animations: AllAnimations
})
export class ModalMenuComponent {

  constructor(private authService: AuthService){}

  public action(){
    this.authService.logout()
  }

}
