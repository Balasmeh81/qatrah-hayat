import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-auth-container-footer',
  imports: [RouterLink],
  templateUrl: './user-auth-container-footer.component.html',
  styleUrl: './user-auth-container-footer.component.css'
})
export class UserAuthContainerFooterComponent {
  @Input() text: string = '';
  @Input() linkText: string = '';
  @Input() linkUrl: string = '';
}
