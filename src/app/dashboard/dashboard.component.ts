import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loaded = false;
  showNav = true;
  contentStyle = '';

  navOptions = [
    {icon: 'home', title: 'Home', link: '/dashboard/'},
    {icon: 'play_circle_outline', title: 'Actieve sessies', link: '/dashboard/sessions/open'},
    {icon: 'history', title: 'Recente sessies', link: '/dashboard/sessions'},
    {icon: 'save', title: 'Opgeslagen sessies', link: '/dashboard/sessions/saved'},
    {icon: 'add', title: 'Nieuwe sessie', link: '/dashboard/sessions/new'},
    {icon: 'help_outline', title: 'Vragen', link: '/dashboard/questions'},
    {icon: 'account_circle', title: 'Deelnemers', link: '/dashboard/subjects'},
    {icon: 'info_outline', title: 'Handleiding', link: '/dashboard/guide'},
    {icon: 'settings', title: 'Instellingen', link: '/dashboard/settings'},
  ];

  constructor(public authService: AuthService, private router: Router) {
    this.handleAuth();
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('background-image');
    body.classList.add('white-background');
  }

  ngOnInit() {
  }

  onSignOut() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  private handleAuth() {
    this.authService.handleAuthentication()
      .subscribe(loggedIn => {
        this.loaded = true;
        if (!loggedIn) {
          this.router.navigate(['/login']);
        }
      });
  }

  closeNavBar() {
    this.showNav = false;
  }

}
