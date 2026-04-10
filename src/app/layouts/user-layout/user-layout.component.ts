import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { UserHeaderComponent } from "../../features/user/presentation/components/user-header/user-header.component";
import { UserSidebarComponent } from "./components/user-sidebar/user-sidebar.component";

@Component({
  selector: 'app-user-layout',
  imports: [RouterOutlet, UserHeaderComponent, UserSidebarComponent],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.css'
})
export class UserLayoutComponent {
  isSidebarOpen = false;

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar(): void {
    this.isSidebarOpen = false;
  }
}
