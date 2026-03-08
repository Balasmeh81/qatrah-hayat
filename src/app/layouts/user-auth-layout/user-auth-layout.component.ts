import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { UserAuthHeaderComponent } from "../../features/auth/components/user-auth-header/user-auth-header.component";

@Component({
  selector: 'app-user-auth-layout',
  imports: [RouterOutlet, FooterComponent, UserAuthHeaderComponent],
  templateUrl: './user-auth-layout.component.html',
  styleUrl: './user-auth-layout.component.css'
})
export class UserAuthLayoutComponent {

}
